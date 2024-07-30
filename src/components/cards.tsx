"use client"; // Esto indica que este componente se debe ejecutar del lado del cliente

import React from 'react';
import 'tailwindcss/tailwind.css';
import { Card } from "flowbite-react";

const Cards: React.FC<{ entity: { name: string, description: string, url: string} }> = ({ entity }) => {
  return (
    <Card horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {entity.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {entity.description}
      </p>
      <a className='text-blue-500' href={entity.url}>{entity.url}</a>
    </Card>
  );
};

export default Cards;
