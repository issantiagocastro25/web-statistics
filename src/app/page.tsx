"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="grid min-h-screen bg-gray-100 rounded m-2">
      <h1 className="text-2xl font-bold m-2">hola</h1>
    </div>
  );
};

export default App;
