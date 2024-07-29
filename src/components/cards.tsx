"use client"; // Esto indica que este componente se debe ejecutar del lado del cliente

import React from 'react';
import 'tailwindcss/tailwind.css';
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";

const Cards = () => {
  return (
    <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Leon medical centers
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>      
  );
};

export default Cards;
