"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import React, { useState } from 'react';
import Cards from '../../../components/cards';
import Stadistics from '../../../components/stadistics';

const entities = [
  { id: 1, name: 'Leon medical centers', description: 'Leon Medical Centers es uno de los principales proveedores de los servicios y cuidados de salud para los pacientes de Medicare desde 1996. Los pacientes tienen acceso a ocho centros de alta tecnología, convenientemente localizados en todo Miami-Dade.',url:"https://www.cancer.gov.co/", stats: [/* stats data */] ,},
  { id: 2, name: 'Another entity', description: 'Leon Medical Centers es uno de los principales proveedores de los servicios y cuidados de salud para los pacientes de Medicare desde 1996. Los pacientes tienen acceso a ocho centros de alta tecnología, convenientemente localizados en todo Miami-Dade.',url:"https://www.cancer.gov.co/", stats: [/* stats data */] },
  { id: 3, name: 'Leon medical centers', description: 'Leon Medical Centers es uno de los principales proveedores de los servicios y cuidados de salud para los pacientes de Medicare desde 1996. Los pacientes tienen acceso a ocho centros de alta tecnología, convenientemente localizados en todo Miami-Dade.',url:"https://www.cancer.gov.co/", stats: [/* stats data */] },
  // Agrega más entidades según sea necesario
];

const App: React.FC = () => {
  const [filteredEntities, setFilteredEntities] = useState(entities);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value.toLowerCase();
    const filtered = entities.filter(entity =>
      entity.name.toLowerCase().includes(filterValue)
    );
    setFilteredEntities(filtered);
  };

  return (
    <div className='dashboard rounded-lg'>
      <div className='text-center text-2xl font-bold pb-5 w-full'>
        <h1 className='text-3xl'>Estadísticas</h1>
      </div>
      <input
          type='text'
          placeholder='Filtrar entidades'
          onChange={handleFilterChange}
          className='mt-4 p-2 mb-5 border rounded'
        />
      <div className='flex flex-col'>
        {filteredEntities.map((entity) => (
          <div key={entity.id} className='flex flex-row mb-4'>
            <div className='flex-col w-1/3'>
              <Cards entity={entity} />
            </div>
            <div className='flex-col w-2/3'>
              <Stadistics />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;