"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import { Card } from '@tremor/react';
import React from 'react';
import { LineChartHero } from '@/components/staticLineChart';
import BarDiagram from '@/components/barDiagrama';
import DonutChart from '@/components/donutDiagrama';

const App: React.FC = () => {
  return (    
    <div className='dashboard rounded-lg'>
        <h1 className='text-center text-2xl font-bold'>Stadistics</h1>
        <Card>
            <div className="grid grid-cols-2">
              <div>
                <LineChartHero/>
              </div>
              <div className='grid grid-flow-row'>
                <BarDiagram />
                <div className='grid grid-flow-row'>
                <DonutChart />
                </div>
              </div>
              
            </div>
        </Card>


    </div>
  );
};

export default App;
