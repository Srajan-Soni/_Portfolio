import { Accordion, AccordionItem, Image, Card, CardFooter, Button } from "@nextui-org/react";
import React from "react";
import gfg from '../assets/gfg.jpg';
import leetcode from '../assets/leetcode.webp';
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();

  const aboutInfo = {
    intro: "Hello, I'm Srajan, a passionate Web developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.",
    mission: "My mission is to leverage my skills and creativity to deliver innovative UI solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.",
    education: {
      degree: "B.Tech",
      institute: "Gyan Ganga College of Technology",
      course: "Computer Science",
      yearOfPassing: "2022",
    },
    skills: [
      "Javascript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Web tools & Technology",
    ],
  };

  const professionalExperience = [
    {
      company: "Persistent Systems",
      title: "Software Engineer",
      joinedAt: "July 2022",
      location: "Pune (on-site)",
      projects: ["IOS Homescreen", "Redaction Framework"],
      responsibilities: ["Building UI features", "Manage Tasks", "Handling Client's call", "Team Work"],
    },
    {
      company: "VKV Technologies",
      title: "Software Engineer",
      joinedAt: "June 2024",
      location: "Varanasi (Remote)",
      projects: ["Cee Vee diag"],
      responsibilities: [
        "Working on MERN stack",
        "User and admin UI development using React and CSS frameworks",
        "Complex queries for collections",
        "Working on both frontend and backend",
      ],
    },
  ];

  const codingProfiles = [
    {
      name: "GeeksForGeeks",
      img: gfg,
      link: "https://www.geeksforgeeks.org/user/srajansoni/",
    },
    {
      name: "Leetcode",
      img: leetcode,
      link: "https://leetcode.com/",
    },
  ];

  return (
    <div name="About" className={`container mx-auto px-4 md:px-20  ${darkMode ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'}`}>
      <div className="space-y-6 pt-10">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-gray-700 dark:text-gray-300">{aboutInfo.intro}</p>

        <div className="space-y-2">
          <h1 className="text-blue-600 dark:text-yellow-400 font-semibold text-xl">Mission Statement</h1>
          <p className="text-gray-700 dark:text-gray-300">{aboutInfo.mission}</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-blue-600 dark:text-yellow-400 font-semibold text-xl">Education & Training</h1>
          <ul className="space-y-1 pl-4">
            <li><span className="font-semibold">Degree:</span> {aboutInfo.education.degree}</li>
            <li><span className="font-semibold">Institute:</span> {aboutInfo.education.institute}</li>
            <li><span className="font-semibold">Course:</span> {aboutInfo.education.course}</li>
            <li><span className="font-semibold">Year of Passing:</span> {aboutInfo.education.yearOfPassing}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="text-blue-600 dark:text-yellow-400 font-semibold text-xl">Skills & Expertise</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Experienced with <span className="font-semibold">{aboutInfo.skills.join(", ")}</span>.
            Strong grasp of UI development, excellent problem-solving skills, effective communicator and collaborator.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-blue-600 dark:text-yellow-400 font-semibold text-xl">Professional Experience</h1>
          <Accordion>
            {professionalExperience.map((exp, index) => (
              <AccordionItem
                key={index}
                aria-label={`Accordion ${index + 1}`}
                subtitle={exp.title}
                title={exp.company}
                className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-2`}
              >
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Job Title:</span> {exp.title}</p>
                  <p><span className="font-semibold">Joined at:</span> {exp.joinedAt}</p>
                  <p><span className="font-semibold">Location:</span> {exp.location}</p>
                  <p className="font-semibold">Projects:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {exp.projects.map((proj, projIndex) => (
                      <li key={projIndex}>{proj}</li>
                    ))}
                  </ul>
                  <p className="font-semibold">Roles & Responsibilities:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="space-y-4">
          <h1 className="text-blue-600 dark:text-yellow-400 font-semibold text-xl">Coding Profiles</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {codingProfiles.map((profile, index) => (
              <Card key={index} isFooterBlurred radius="lg" className={`border-none w-48 md:w-60 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Image
                  alt={profile.name}
                  className="object-cover rounded-t-lg"
                  height={200}
                  src={profile.img}
                  width={240}
                />
                <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small z-10">
                  <Button
                    className={`text-tiny m-auto text-center ${darkMode ? 'text-white/80 bg-black/30' : 'text-gray-700 bg-black/20'}`}
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">Visit</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;