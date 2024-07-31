import { BarChart, Card } from '@tremor/react';

// Datos ficticios para el ejemplo
const chartdata = [
  {
    name: 'Institución A',
    Facebook: 1200,
    Twitter: 800,
    Instagram: 1500,
    YouTube: 900,
    TikTok: 500,
  },
  {
    name: 'Institución B',
    Facebook: 1500,
    Twitter: 1000,
    Instagram: 1700,
    YouTube: 1200,
    TikTok: 700,
  },
  {
    name: 'Institución C',
    Facebook: 1100,
    Twitter: 900,
    Instagram: 1600,
    YouTube: 800,
    TikTok: 600,
  },
  {
    name: 'Institución D',
    Facebook: 1300,
    Twitter: 950,
    Instagram: 1800,
    YouTube: 1000,
    TikTok: 650,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function BarChartSocialMediaFollowers() {
  return (
    <>
        <Card>
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Seguidores por Red Social
            </h3>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="name"
                categories={[
                'Facebook',
                'Twitter',
                'Instagram',
                'YouTube',
                'TikTok',
                ]}
                colors={['blue', 'sky', 'purple', 'red', 'green']}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
        </Card>
    </>
  );
}
