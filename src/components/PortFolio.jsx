import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function PortFolio() {

  const { darkMode } = useTheme(); 
  const cardItem = [
    { id: 1, name: 'iOS Homescreen', tech: 'React, JavaScript', link: '', type: 'Client', desc: 'Created a dynamic iOS home screen interface with customizable app organization, screen page management, and personalized template downloads.' },
    { id: 2, name: 'GYRO', tech: 'Java, HTML, CSS, JavaScript, Bootstrap', link: '', type: 'Academic', desc: 'Developed a web application serving as a platform connecting hostel seekers, particularly students, with hostel owners seeking to showcase their accommodations.' },
    { id: 3, name: 'Resume Maker', tech: 'React', link: '', type: 'Self', desc: 'Led the development of a robust React-based web application for streamlined resume creation, featuring real-time preview and diverse template selections.' },
    { id: 4, name: 'Redaction Framework', tech: 'Python, SQL', link: '', type: 'Client', desc: 'Developed Redaction Framework using Python, Oracle SQL, and YAML file in which redacted some columns based on user’s choice.' },
    { id: 5, name: 'Instagram Clone', tech: 'MERN', link: '', type: 'Self', desc: 'Developed a fully functional Instagram clone using the MERN (MongoDB, Express.js, React.js, Node.js) stack, demonstrating expertise in both frontend and backend technologies.' },
    { id: 6, name: 'Patient Appointment Booking', tech: 'React, FastAPI', link: '', type: 'Self', desc: 'The application facilitates users in creating patients, scheduling appointments, and processing payments securely through a user-friendly web interface.' },
    { id: 7, name: 'Cee Vee Diag', tech: 'MERN', link: '', type: 'Client', desc: 'Developed Cee Vee Diag, a MERN stack application for diagnosis and medicine.' },
  ];

  return (
    <div name="Portfolio" className={` container mx-auto px-4 md:px-20 pt-10 ${darkMode ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'}` }>
      <div>
        <h1 className="text-3xl font-bold pb-5 dark:text-white">Portfolio</h1>
        <span className="underline font-semibold dark:text-gray-300">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
          {cardItem.map((info) => (
            <Card
              key={info.id}
              className="h-full flex flex-col justify-between border rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700"
            >
              <div>
                <CardHeader className="flex flex-col items-start gap-2 p-4">
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{info.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tech Stack: {info.tech}</p>
                </CardHeader>
                <Divider className="dark:bg-gray-700" />
                <CardBody className="p-4 flex-grow">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{info.desc}</p>
                </CardBody>
              </div>
              <Divider className="dark:bg-gray-700" />
              {info.link ? (
                <CardFooter className="p-4 bg-black text-white hover:bg-gray-800 transition rounded-b-lg">
                  <Link
                    isExternal
                    showAnchorIcon
                    href={info.link}
                    className="flex items-center gap-2 text-white"
                  >
                    <FaGithub /> Github Code
                  </Link>
                </CardFooter>
              ) : (
                <CardFooter className="p-4 bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-200 rounded-b-lg justify-center">
                  <span>No Link Available</span>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
