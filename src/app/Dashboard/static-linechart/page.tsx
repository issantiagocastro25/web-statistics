"use client"; // Asegúrate de que el componente raíz también sea un Client Component si es necesario

import { Card } from '@tremor/react';
import React from 'react';
import { LineChartHero } from '@/components/staticLineChart';
import { BarChartSocialMediaFollowers } from '@/components/ComponentsBar/BarChartListGeneral';
import { CardSocialWeb } from '@/components/CardSocialWeb';

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
                <BarChartSocialMediaFollowers />
              {/*  <div className='grid grid-flow-row'>
                <DonutChart />
                </div> */}
              </div>
              <div className='m-10'>
                <div className='m-10'>
                <CardSocialWeb/>
                </div>
                <div className='m-10'>
                <CardSocialWeb/>
                </div>
              </div>
              <div className='m-10'>
                <div className='m-10'>
                <CardSocialWeb/>
                </div>
                <div className='m-10'>
                <CardSocialWeb/>
                </div>
              </div>
            </div>
        </Card>


    </div>
  );
};

export default App;
