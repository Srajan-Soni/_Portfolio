import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import python from "../assets/python.webp";
import javascript from "../assets/javascript.png";
import reactlogo from "../assets/react.jpeg";
import nodejs from "../assets/node.jpg";
import express from "../assets/express.png";
import mongo from "../assets/mongodb.jpg";
import tailwind from "../assets/tailwind.jpeg";
import nextui from "../assets/nextui.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useTheme } from "../context/ThemeContext";

function Experiance() {

  const {darkMode} = useTheme()
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: python, name: "Python" },
    { id: 5, logo: reactlogo, name: "React" },
    { id: 6, logo: nodejs, name: "Node.js" },
    { id: 7, logo: express, name: "Express" },
    { id: 8, logo: mongo, name: "MongoDB" },
    { id: 9, logo: tailwind, name: "Tailwind CSS" },
    { id: 10, logo: nextui, name: "Next UI" },
  ];

  return (
    <div
      name="Experiance"
      className={`${darkMode ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'} container mx-auto px-4 md:px-20 py-16`}
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 dark:text-white">Experience</h1>
        <p className="dark:text-gray-300">
          I&apos;ve more than 1+ years of experience in the below technologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6">
          {cardItem.map(({ id, logo, name }) => (
            <Card
              key={id}
              isPressable
              onPress={() => console.log(`${name} clicked`)}
              className="h-full flex flex-col justify-between shadow-lg hover:scale-105 transition-transform dark:bg-gray-900 dark:border-gray-700"
            >
              <CardBody className="flex items-center justify-center p-4">
                <Image
                  alt={name}
                  src={logo}
                  radius="lg"
                  className="object-contain h-36 w-auto"
                />
              </CardBody>
              <CardFooter className="justify-center p-4 bg-gray-50 rounded-b-lg dark:bg-gray-800">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  {name}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
