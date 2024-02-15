import type { Personas } from '@models/persona.model';
import { useState } from 'preact/hooks';
import './PersonaList.css';

interface PersonaListProps {
  data: Personas;
}

export function PersonaList({ data }: PersonaListProps) {
  const [filterText, setFilterText] = useState('');

  const handleInputChange = (e: any) => {
    setFilterText(e.target.value);
  };

  const filteredKeys = Object.keys(data).filter(key =>
    key.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={filterText}
        onInput={handleInputChange}
        placeholder="Buscar..."
      />

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredKeys.map(key => (
          <a href={`/persona/${key}`} class="persona-card">
            <span class="persona-card__title">{key}</span>
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
