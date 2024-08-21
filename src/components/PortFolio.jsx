import React from "react";
import { Image,Card,CardBody,CardFooter,CardHeader,Divider,Link } from "@nextui-org/react";

function PortFolio() {
  const cardItem = [
    {
      id:1,
      name: 'IOS Homescreen',
      tech: 'React , Javascript',
      link: '',
      type: 'Client',
      desc: 'Created a dynamic iOS home screen interface with customizable app organization, screen page management, and personalized template downloads.      '
    },
    {
      id:2,
      name: 'GYRO',
      tech: 'Java , Html , CSS , Javascript,Bootstrap',
      link: '',
      type: 'Academic',
      desc: 'Developed a web application serving as a platform connecting hostel seekers, particularly students, with hostel owners seeking to showcase their accommodations.      '
    },
    {
      id:3,
      name: 'Resume Maker',
      tech: 'React',
      link: '',
      type: 'Self',
      desc: 'Led the development of a robust React-based web application for streamlined resume creation, featuring real-time preview and diverse template selections.  '
    },
    {
      id:4,
      name: 'Redaction Framework',
      tech: 'Python , SQL',
      link: '',
      type: 'Client',
      desc: 'Developed Redaction Framework using Python , Oracle SQL and YAML file in which redacted some columns based on user’s choice '
    },
    {
      id:5,
      name: 'Instagram Clone',
      tech: 'MERN',
      link: '',
      type: 'Self',
      desc: 'Developed a fully functional Instagram clone using the MERN (MongoDB, Express.js, React.js, Node.js) stack, demonstrating expertise in both frontend and backend technologies      '
    },
   
    {
      id:6,
      name: 'Patient Appointment Booking',
      tech: 'React , FastAPI',
      link: '',
      type: 'Self',
      desc: 'The application facilitates users in creating patients , scheduling appointments, and processing payments securely through a user-friendly web interface.      '
    },
    {
      id:7,
      name: 'Cee Vee diag',
      tech: 'MERN',
      link: '',
      type: 'Client',
      desc: 'Developed Cee Vee Diag, a MERN stack application for diagnosis and medicine '
    },
   
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map((info,index ) => (
                <Card className="max-w-[400px] py-2 border rounded-md justify-center shadow-md">
                <CardHeader className="flex gap-3">
                  {/* <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  /> */}
                  <div className="flex flex-col py-4 ml-2">
                    <p className="text-lg">{info.name}</p>
                    <p className="text-small text-default-500">{info.type}</p>
                    <p className="text-md text-default-500">Tech Stack : {info.tech}</p>
                  </div>
                </CardHeader>
                <Divider/>
                <CardBody className="my-4">
                  <p>{info.desc}</p>
                </CardBody>
                <Divider/>
                <CardFooter className="justify-center bg-black text-white w-80 hover:bg-gray-800">
                  <Link
                    isExternal
                    showAnchorIcon
                    href={info.link}
                  >
                    Github Code
                  </Link>
                </CardFooter>
              </Card>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
