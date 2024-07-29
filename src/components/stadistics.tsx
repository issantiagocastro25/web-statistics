"use client"; // Esto indica que este componente se debe ejecutar del lado del cliente
import {ProgressCircle } from '@tremor/react';
import React from 'react';
import 'tailwindcss/tailwind.css';

const Stadistics = () => {
  return (
    
    <div className="mx-auto grid grid-cols-1 gap-12">
    <div className="flex justify-center">
      <ProgressCircle value={72} size="lg" />
    </div>
    </div>

  );
}


export default Stadistics;
