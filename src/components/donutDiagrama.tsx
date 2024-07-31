import { Card, DonutChart, EventProps, Title } from '@tremor/react';
import React from 'react';

const sales = [
  {
    name: 'New York',
    sales: 980,
  },
  {
    name: 'London',
    sales: 456,
  },
  {
    name: 'Hong Kong',
    sales: 390,
  },
  {
    name: 'San Francisco',
    sales: 240,
  },
  {
    name: 'Singapore',
    sales: 190,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function DonutChartUsageExampleWithClickEvent() {
  const [value, setValue] = React.useState<EventProps>(null);
  return (

      <DonutChart
        data={sales}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />

  );
}