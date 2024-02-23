import React, { useRef, useState } from 'react';
import type { Personas } from '@models/persona.model';
import './PersonaList.css';

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
        }}
      >
        {filteredKeys.map(key => (
          <a href={`./persona/${key}`} className="persona-card" key={key}>
            <span className="persona-card__title">{key}</span>
            <img
              src={data[key].img}
              alt={key}
              loading="lazy"
              style={{
                maxWidth: '100%',
                height: '200px',
                objectFit: 'contain',
              }}
            />
          </a>
        ))}
      </section>
    </>
  );
}
