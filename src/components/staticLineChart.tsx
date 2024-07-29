"use client";
import React, { useState, useMemo } from 'react';
import { LineChart, Legend, Select, SelectItem, Card, Title, Text } from '@tremor/react';
import { RiCalendarLine } from '@remixicon/react';

// Datos de ejemplo para seguidores en redes sociales
const fullData = [
  { date: 'Ene 22', Facebook: 10000, Twitter: 5000, Instagram: 15000, YouTube: 2000 },
  { date: 'Feb 22', Facebook: 10500, Twitter: 5200, Instagram: 16000, YouTube: 2100 },
  { date: 'Mar 22', Facebook: 11000, Twitter: 5400, Instagram: 17000, YouTube: 2300 },
  { date: 'Abr 22', Facebook: 11500, Twitter: 5600, Instagram: 18000, YouTube: 2500 },
  { date: 'May 22', Facebook: 12000, Twitter: 5800, Instagram: 19000, YouTube: 2700 },
  { date: 'Jun 22', Facebook: 12500, Twitter: 6000, Instagram: 20000, YouTube: 2900 },
  { date: 'Ene 23', Facebook: 15000, Twitter: 7000, Instagram: 25000, YouTube: 5000 },
  { date: 'Feb 23', Facebook: 15500, Twitter: 7200, Instagram: 26000, YouTube: 5200 },
  { date: 'Mar 23', Facebook: 16000, Twitter: 7400, Instagram: 27000, YouTube: 5400 },
  { date: 'Abr 23', Facebook: 16500, Twitter: 7600, Instagram: 28000, YouTube: 5600 },
  { date: 'May 23', Facebook: 17000, Twitter: 7800, Instagram: 29000, YouTube: 5800 },
  { date: 'Jun 23', Facebook: 17500, Twitter: 8000, Instagram: 30000, YouTube: 6000 },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('es').format(number).toString();

const years = ['2022', '2023'];
const categories = ['Facebook', 'Twitter', 'Instagram', 'YouTube'];
const colors = ['blue', 'cyan', 'pink', 'red'];

export function LineChartHero() {
  const [activeCategories, setActiveCategories] = useState<string[]>(categories);
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  const filteredData = useMemo(() => {
    return fullData.filter(data => data.date.includes(selectedYear.slice(-2)));
  }, [selectedYear]);

  const totalFollowers = useMemo(() => {
    const latestData = filteredData[filteredData.length - 1];
    return activeCategories.reduce((total, category) => total + (latestData[category] || 0), 0);
  }, [filteredData, activeCategories]);

  return (
    <Card>
      <div className="md:flex justify-between items-center mb-4">
        <div>
          <Title>Seguidores en Redes Sociales</Title>
          <Text>Comparación de seguidores entre plataformas</Text>
        </div>
        <div className="mt-4 md:mt-0">
          <Select
            value={selectedYear}
            onValueChange={setSelectedYear}
            icon={RiCalendarLine}
          >
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <Text>Total de Seguidores (último mes): {dataFormatter(totalFollowers)}</Text>
      </div>

      <Legend
        className="mt-3"
        categories={categories}
        colors={colors}
        onClickLegendItem={(e) => {
          setActiveCategories(prev => 
            prev.includes(e) ? prev.filter(category => category !== e) : [...prev, e]
          );
        }}
        activeLegend={activeCategories}
      />

      <LineChart
        className="mt-6 h-80"
        data={filteredData}
        index="date"
        categories={activeCategories}
        colors={colors}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        showLegend={false}
        showXAxis={true}
        showYAxis={true}
        showGridLines={true}
        curveType="monotone"
      />
    </Card>
  );
}