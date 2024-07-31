"use client"; // Esto indica que este componente se debe ejecutar del lado del cliente
import { Rating } from "flowbite-react";
import React from 'react';
import 'tailwindcss/tailwind.css';
import { Card } from "flowbite-react";

const Cards: React.FC<{ entity: { name: string, description: string, url: string} }> = ({ entity }) => {
  return (
    <a href="/Dashboard/static-linechart" ><Card horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {entity.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {entity.description}
      </p>
      <a className='text-blue-500' href={entity.url}>{entity.url}</a>
      <Rating>
        <Rating.Star filled={true} />
        <Rating.Star filled={true} />
        <Rating.Star filled={true} />
        <Rating.Star filled={true} />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.0 out of 5</p>
      </Rating>
    </Card></a>
  );
};

export default Cards;
