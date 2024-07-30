"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import React from 'react';
import { Card } from '@tremor/react';
import { TableHero } from '@/components/TableIndicatorsComponent'; // Asegúrate de importar correctamente el componente TableHero
import { BarChartSocialMediaFollowers } from '@/components/ComponentsBar/BarChartListGeneral';

const App: React.FC = () => {
  return (
    <>
      <div className="container-content m-auto mt-4 p-4 max-w-[1390px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Hola</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center rounded-md border p-4 py-6">
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="indigo"
                >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            </Card>
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="indigo"
                >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            </Card>
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="indigo"
                >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            </Card>
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="indigo"
                >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            </Card>
        </div>
        <div className='mt-2 grid gap-4 grid-cols-4'>
            <div className="col-span-2 mt-8 max-w-2xl"> {/* Agrega un margen superior para separar el grid de la tabla */}
            <TableHero />
            </div>
            <div className="col-span-2 mt-8 max-w-2xl"> {/* Agrega un margen superior para separar el grid de la tabla */}
            <BarChartSocialMediaFollowers />
            </div>
        </div>
      </div>
    </>
  );
};

export default App;
