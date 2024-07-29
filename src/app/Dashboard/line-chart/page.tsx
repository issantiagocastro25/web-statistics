"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import { Card } from '@tremor/react';
import React from 'react';
import { LineChartHero } from '@/components/staticLineChart';
import { BarListUsageExample } from '@/components/staticBar';

const App: React.FC = () => {
  return (    
    <div className='dashboard rounded-lg'>
        <h1 className='text-center text-2xl font-bold'>Stadistics</h1>
        <Card>
            <div className="mx-auto grid grid-cols-2 gap-4">
                <BarListUsageExample/>
                <LineChartHero/>
            </div>
        </Card>

    </div>
  );
};

export default App;
