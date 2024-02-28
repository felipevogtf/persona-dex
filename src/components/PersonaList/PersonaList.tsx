import React, { useRef, useState } from 'react';
import type { Personas } from '@models/persona.model';
import './PersonaList.css';
import { getBaseUrl } from '@utils/baseUrl';
import InfiniteScroll from 'react-infinite-scroll-component';

interface PersonaListProps {
  data: Personas;
}

export function PersonaList({ data }: PersonaListProps) {
  const [filterText, setFilterText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasMore, setHasMore] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(20); // Mostrar 20 elementos inicialmente

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredKeys = Object.keys(data).filter(key =>
    key.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleContainerClick = () => {
    inputRef.current!.focus();
  };

  const fetchMoreData = () => {
    // Simplemente aumentamos la cantidad de elementos a mostrar
    setItemsToShow(prevItems => prevItems + 20); // Por ejemplo, aquí incrementamos en 20 elementos
    if (itemsToShow >= filteredKeys.length) {
      // Si ya hemos mostrado todos los elementos, establecemos hasMore en false para detener la carga infinita
      setHasMore(false);
    }
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
          onChange={handleInputChange}
          placeholder="Search persona..."
        />
      </div>

      <InfiniteScroll
        dataLength={itemsToShow}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loading">
            <span>Loading...</span>
          </div>
        }
      >
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '20px',
            padding: '0 20px',
            overflowY: 'hidden',
          }}
        >
          {filteredKeys.slice(0, itemsToShow).map(key => (
            <a href={`./persona/${key}`} className="persona-card" key={key}>
              <div className="persona-card__background">
                <div className="persona-card__background2"></div>
              </div>

              <div className="persona-card__content">
                <span className="persona-card__title">{key}</span>
                <img
                  src={getBaseUrl() + data[key].img}
                  alt={`${key} persona`}
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
      </InfiniteScroll>
    </>
  );
}
