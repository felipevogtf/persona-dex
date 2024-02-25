import React, { useRef, useState } from 'react';
import type { Personas } from '@models/persona.model';
import './PersonaList.css';
import { getBaseUrl } from '@utils/baseUrl';

interface PersonaListProps {
  data: Personas;
}

export function PersonaList({ data }: PersonaListProps) {
  const [filterText, setFilterText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: any) => {
    setFilterText(e.target.value);
  };

  const filteredKeys = Object.keys(data).filter(key =>
    key.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleContainerClick = () => {
    inputRef.current!.focus();
  };

  return (
    <>
      <div className="persona-search" onClick={handleContainerClick}>
        <div className="persona-search__background">
          <div className="persona-search__background2"></div>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={filterText}
          onInput={handleInputChange}
          placeholder="Search persona..."
        />
      </div>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '20px',
          padding: '0 20px',
        }}
      >
        {filteredKeys.map(key => (
          <a href={`./persona/${key}`} className="persona-card" key={key}>
            <div className="persona-card__background">
              <div className="persona-card__background2"></div>
            </div>

            <div className="persona-card__content">
              <span className="persona-card__title">{key}</span>
              <img
                src={getBaseUrl() + data[key].img}
                alt={key}
                loading="lazy"
                style={{
                  boxSizing: 'border-box',
                  maxWidth: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  aspectRatio: '1/1',
                }}
              />
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
