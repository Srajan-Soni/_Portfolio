import { Accordion,AccordionItem ,Image,Card,CardFooter,Button} from "@nextui-org/react";
import React,{useState} from "react";
import gfg from '../assets/gfg.jpg'
import leetcode from '../assets/leetcode.webp'

function About() {


  const codingProfiles = [
    {
      name: 'GFG',
      img: gfg,
      link: '',
      score: 100
    },
    {
      name: 'Leetcode',
      img: leetcode,
      link: '',
      score: 100
    },

  ]

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Srajan, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative UI solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      <br></br>
        <h1 className="text-blue-600 font-semibold text-xl">
          Education & Training
        </h1>
        <br />
        <span>
          <ul>
            <h5 className="font-semibold text-xl">Degree</h5>
            <li className="text-grey-800 font-semibold text-m">B.Tech</li>
            <h5 className="font-semibold text-xl">Institute</h5>
            <li className="text-grey-800 font-semibold text-m">Gyan Ganga college of Technology</li>
            <h5 className="font-semibold text-xl">Course</h5>
            <li className="text-grey-800 font-semibold text-m">Computer Science</li>
            <h5 className="font-semibold text-xl">Year of Passing</h5>
            <li className="text-grey-800 font-semibold text-m">2022</li>

          </ul>
         
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <br />
        <span>
          Experienced with <span className="font-semibold text-m">
            Javascript , React , Node.js , Python , SQL , Web tools & Technology</span> Strong grasp of UI development,
          Excellent problem-solving skills Effective communicator and
          collaborator
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <br />
        <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Software Engineer" title="Persistent Systems">
      <span>
          <ul>
          <h5 className="font-semibold text-xl">Job Title</h5>
          <li className="text-grey-800 font-semibold text-m">Software Engineer</li>
          <br />
          <h5 className="font-semibold text-xl">Company/Organization</h5>
          <li className="text-grey-800 font-semibold text-m">Persistent Systems</li>
          <br />
          <h5 className="font-semibold text-xl">Joined at </h5>
          <li className="text-grey-800 font-semibold text-m">July 2022 </li>
          <br />
          <h5 className="font-semibold text-xl">Location </h5>
          <li className="text-grey-800 font-semibold text-m">Pune (on-site) </li>
          <br />
          <h5 className="font-semibold text-xl">Projects </h5>
          <li className="text-grey-800 font-semibold text-m">IOS Homescreen </li>
          <li className="text-grey-800 font-semibold text-m">Redaction Framework </li>
          <br />
          <h5 className="font-semibold text-xl">Roles & Responsibilities </h5>
          <li className="text-grey-800 font-semibold text-m">Building UI features </li>
          <li className="text-grey-800 font-semibold text-m">Manage Tasks </li>
          <li className="text-grey-800 font-semibold text-m">Handling CLient's call </li>
          <li className="text-grey-800 font-semibold text-m">Team Work </li>

          </ul>
          
        </span>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle="Software Engineer"
        title="VKV Technologies"
      >
        
        <span>
          <ul>
          <h5 className="font-semibold text-xl">Job Title</h5>
          <li className="text-grey-800 font-semibold text-m">Software Engineer</li>
          <br />
          <h5 className="font-semibold text-xl">Company/Organization</h5>
          <li className="text-grey-800 font-semibold text-m">VKV Technologies</li>
          <br />
          <h5 className="font-semibold text-xl">Joined at </h5>
          <li className="text-grey-800 font-semibold text-m">June 2024 </li>

          <br />
          <h5 className="font-semibold text-xl">Location </h5>
          <li className="text-grey-800 font-semibold text-m">Varanasi (Remote) </li>
          <br />
          <h5 className="font-semibold text-xl">Projects </h5>
          <li className="text-grey-800 font-semibold text-m">Cee Vee diag </li>
      
          <br />
          <h5 className="font-semibold text-xl">Roles & Responsibilities </h5>
          <li className="text-grey-800 font-semibold text-m">Working on MERN stack </li>
          <li className="text-grey-800 font-semibold text-m">User and admin UI development using React and CSS frameworks </li>
          <li className="text-grey-800 font-semibold text-m">Complex queries for collections </li>
          <li className="text-grey-800 font-semibold text-m">working on both frontend and backend </li>

          </ul>
          
        </span>
      </AccordionItem>
      {/* <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
        {defaultContent}
      </AccordionItem> */}
    </Accordion>
        
        <br />
        <br />
       
        <br />
        <br />
       
        <h1 className="text-blue-600 font-semibold text-xl">
          Coding Profiles
        </h1>

    <div className="flex items-center justify-around mt-10">
     
     
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="GeeksForGeeks"
        className="object-cover"
        height={200}
        src={gfg}
        width={200}
      />
      <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-100 shadow-small ml-1 z-10">
        {/* <p className="text-tiny text-black">Available soon.</p> */}
        <Button className="text-tiny m-auto text-center text-white/80 bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Visit
        </Button>
      </CardFooter>
    </Card>

    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="GeeksForGeeks"
        className="object-cover"
        height={200}
        src={leetcode}
        width={200}
      />
      <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-100 shadow-small ml-1 z-10">
        {/* <h4 className="text-tiny text-black">Score</h4> */}
        <Button className="text-tiny m-auto text-center text-white/80 bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          <a href="https://www.geeksforgeeks.org/user/srajansoni/">Visit</a>
        </Button>
      </CardFooter>
    </Card>
    
 </div>    
      </div>
    </div>
  );
}

export default About;
