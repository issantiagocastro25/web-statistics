import React, { useEffect, useState } from 'react';
import {
    Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

// Tipo para los datos de la tabla
interface TableData {
  name: string;
  monstersSlayed: number;
  region: string;
  status: string;
}

export const TableHero = () => {
  const [data, setData] = useState<TableData[]>([]);
  
  useEffect(() => {
    // Función para cargar los datos desde el archivo JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Ruta desde la raíz del servidor
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: TableData[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
        <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Indicadores de tabla</h3>
        <Table>
            <TableHead>
            <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell className="text-right">
                Monsters Slayed
                </TableHeaderCell>
                <TableHeaderCell>Region</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
            </TableHead>

            <TableBody>
            {data.map((item, index) => (
                <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.monstersSlayed}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.status}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Card>
  );
};
