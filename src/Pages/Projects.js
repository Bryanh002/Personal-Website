import ButtonLink from '../Components/ButtonLink.js';
import React,  { useState } from 'react';
import Roboticarm from '../images/Roboticarm.jpg';
import GithubIcon from'../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.webp';
import project2 from '../images/project2.PNG';
import project3 from '../images/Yolo_V3.jpg';


function ProjectPage() {
    const [isAiActive, setIsAiActive] = useState(false);
    const [isRActive, setIsRActive] = useState(false);
    const [isFActive, setIsFActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  

    const handleRobotButtonClick = () => {

        window.location.href = 'https://github.com/Bryanh002/Robotic-arm';

    };


    const handleAiTagClick = () => {
        

        setIsAiActive(!isAiActive);
    }

    const handleARoboticsTagClick = () => {
        

        setIsRActive(!isRActive);
    }

    const handleFullStackTagClick = () => {
        
        setIsFActive(!isFActive);
    }

    const handleGitHubButtonClick = () => {

        window.location.href ="https://github.com/Bryanh002"
    
    }
    
    const handleLinkedInButtonClick = () => {
    
        window.location.href="https://www.linkedin.com/in/bryan-heddle-4a55361ba/"
    
    }
  



    return(

        <div id="projects" className="h-[1700px] sm:h-[1600px]">

        
            <div className="fixed top-0 w-full bg-white shadow-lg z-20 p-4 flex justify-between items-center">
            <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            </div>
    
            {/* Desktop Menu */}
            <div className="hidden fixed top-0 sm:flex sm:justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-20 pt-4 bg-white shadow-lg z-20">
            <nav>
                <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300 hidden sm:block "></img></button>
                <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300 hidden sm:block"></img></button>
                <ButtonLink to='/home' className="sm:ml-16 relative group sm:mr-16 ">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                <ButtonLink to='/projects' className="relative group sm:mr-16">Personal Projects<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                <ButtonLink to='/clubs' className="relative group sm:mr-16">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                <ButtonLink to='/clubs' className="relative group sm:mr-16">Resume<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
            </nav>
            </div>
        

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-lg p-4 absolute top-[60px] left-0 w-full z-20">
                <nav className="flex flex-col space-y-4">
                    <ButtonLink to='/home' className="text-center">Home</ButtonLink>
                    <ButtonLink to='/projects' className="text-center">Personal Projects</ButtonLink>
                    <ButtonLink to='/clubs' className="text-center">Clubs</ButtonLink>
                    <ButtonLink to='/resume' className="text-center">Resume</ButtonLink>
                </nav>
                </div>
            )}


            <div className="pt-36">
                <div className="bg-white h-[1400px] sm:h-[1300px] w-full scale-x-90 rounded-lg shadow-lg">
                    <div className="h-20 w-full flex justify-left items-center">
                        <p className="pl-6 sm:pl-14 pb-2 text-2xl relative">
                        Tags:
                        <span className="absolute bottom-0 left-6 sm:left-14 h-0.5 w-14 bg-black"></span>
                        </p>
                        <button onClick={handleAiTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isAiActive ? 'bg-blue-300 border-black' : ''}`}>AI</button>
                        <button onClick={handleARoboticsTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isRActive ? 'bg-blue-300 border-black' : ''}`}>Robotics</button>
                        <button onClick={handleFullStackTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isFActive ? 'bg-blue-300 border-black' : ''}`}>FullStack</button>
                    </div>
                    <div className="bg-slate-200 h-5 scale-x-95 w-full rounded-full border-slate-200 border-2 border-solid shadow-md"></div>


                    {/*Project Cards*/}

                    <div className="h-full w-full">
                        <div className="flex justify-center">
                            <div id="robotic-arm" className="bg-slate-100 mt-14 sm:h-72 sm:w-[1350px] w-[320px] h-[350px] rounded-lg shadow-md flex hover:shadow-xl ease-in-out duration-300">
                                <div className="w-[510px] h-72 sm:h-full scale-75 scale-y-50 sm:scale-90 shadow-md rounded-lg overflow-hidden border-white border-2 border-solid"><img src={Roboticarm} className='w-full h-full'></img></div>
                                <div className="w-[850px] mt-2 font-bold font-serif text-2xl hidden sm:block">IOT Robot Arm: 
                                <p className="font-normal text-lg">For this project I built an Internet of Things robotic arm, this means that to control the arm I designed a desktop app that connects via bluetooth, It controlled the arm with sliders that can choose the servo motor's positions. The robotic arm itself has 6 degrees of freedom, The base, Shoulder joint, First Elbow Joint, Second Elbow Joint, Wrist joint and Gripper, this allows for greater mobility and range. In Terms of the electrical side it is all connected in circuit via an arduino UNO, Servo Driver, Stepper Motor Driver and a Breadboard. </p>
                                <button className="mt-9 text-lg" onClick={handleRobotButtonClick}>Click to Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div id="Financial Website" className="bg-slate-100 mt-14 sm:h-72 sm:w-[1350px] w-[320px] h-[350px] rounded-lg shadow-md flex hover:shadow-xl ease-in-out duration-300">
                                <div className="w-[510px] h-72 sm:h-full scale-75 scale-y-50 sm:scale-90 shadow-md rounded-lg overflow-hidden border-white border-2 border-solid"><img src={project2} className='w-full h-full'></img></div>
                                <div className="w-[850px] mt-2 font-bold font-serif text-2xl hidden sm:block">Financial Management Website: 
                                <p className="font-normal text-lg"></p>
                                <button className="mt-52 text-lg" onClick={handleRobotButtonClick}>Click to Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div id="robotic-arm" className="bg-slate-100 mt-14 sm:h-72 sm:w-[1350px] w-[320px] h-[350px] rounded-lg shadow-md flex hover:shadow-xl ease-in-out duration-300">
                                <div className="w-[510px] h-72 sm:h-full scale-75 scale-y-50 sm:scale-90 shadow-md rounded-lg overflow-hidden border-white border-2 border-solid"><img src={project3} className='w-full h-full'></img></div>
                                <div className="w-[850px] mt-2 font-bold font-serif text-2xl hidden sm:block">YOLOV3 Reseach Implementation 
                                <p className="font-normal text-lg"></p>
                                <button className="mt-52 text-lg" onClick={handleRobotButtonClick} >Click to Learn More</button>
                                </div>
                            </div>
                        </div>



                    </div>



                </div>
            </div>

        </div>
    );

}

export default ProjectPage;


