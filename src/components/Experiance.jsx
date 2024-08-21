import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.jpg'
import python from '../assets/python.webp';
import javascript from '../assets/javascript.png';
import reactlogo from '../assets/react.jpeg'
import nodejs from '../assets/node.jpg'
import express from '../assets/express.png'
import mongo from '../assets/mongodb.jpg'
import tailwind from '../assets/tailwind.jpeg'
import nextui from '../assets/nextui.png'
import { Card,CardBody,CardFooter,Image } from "@nextui-org/react";


function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: python,
      name: "Python",
    },
    {
      id: 5,
      logo: reactlogo,
      name: "React",
    },
    {
      id: 6,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 7,
      logo: express,
      name: "Express",
    },
    {
      id: 8,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 9,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 10,
      logo: nextui,
      name: "Next UI",
    },
    
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 1+ years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <Card shadow="sm" key={id} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0 m-4">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={name}
                className="w-full object-cover h-[200px]"
                src={logo}
              />
            </CardBody>
            <CardFooter className="text-small justify-center m-2">
              <b>{name}</b>
             
            </CardFooter>
          </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
