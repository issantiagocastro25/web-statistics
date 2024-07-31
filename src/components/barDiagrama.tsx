import { BarChart } from '@tremor/react';
import colors from 'tailwindcss/colors';

const chartdata = [
  {
    name: 'Leon Medical Centers',
    'Cantidad de seguidores': 2488,

  },
  {
    name: 'Fundacion valle de lili',
    'Cantidad de seguidores': 1445,
  },
  {
    name: 'Hospital general plaza de la Salud',
    'Cantidad de seguidores': 743,
  },
  {
    name: 'Changua Hospital',
    'Cantidad de seguidores': 281,
  },
  {
    name: 'Hospital Mondongo',
    'Cantidad de seguidores': 251,
  },
  {
    name: 'Hospital Ajiaco',
    'Cantidad de seguidores': 232,
  },
  {
    name: 'Hospital Caldo',
    'Cantidad de seguidores': 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export default function () {
    return(
  <BarChart
    data={chartdata}
    index="name"
    categories={['Cantidad de seguidores']}
    colors={['blue']}
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
    );
};