import ButtonLink from '../Components/ButtonLink.js';
import React,  { useState } from 'react';
import Roboticarm from '../images/Roboticarm.jpg';
import GithubIcon from'../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.png';
import project2 from '../images/project2.jpg';
import project3 from '../images/Yolo_V3.jpg';



function ProjectPage() {
    const [isAiActive, setIsAiActive] = useState(false);
    const [isRActive, setIsRActive] = useState(false);
    const [isFActive, setIsFActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResumeActive, setIsResumeActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  

    const handleRobotButtonClick = () => {

        window.location.href = 'https://github.com/Bryanh002/Robotic-arm';

    };

    const handleFinanceButtonClick = () => {

        window.location.href = 'https://github.com/Bryanh002/Financial-Management-Website.git';

    };

    const handleAIButtonClick = () => {

        window.location.href = 'https://github.com/Bryanh002/YOLOV3-Project.git';

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

    const handleResumeClicked = () => {

        setIsResumeActive(!isResumeActive);
  
      }
  
    if (isResumeActive) {
      return (
        <div className="relative h-screen w-screen z-50 bg-white flex items-center justify-center">
          <div className="absolute top-5 right-5">
            <button
              onClick={handleResumeClicked}
              className="text-xl font-semibold p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <iframe
            title="Bryan Heddle Resume"
            className="h-[90vh] w-[80vw]"
            src="/Bryan_Heddle_resume2.pdf"
            style={{
              border: "none",
              transform: "scale(1)", // Adjust scale as needed
              transformOrigin: "0 0", // Scale from the top-left corner
            }}
          ></iframe>
        </div>
      );
    }
  


    return(

        <div id="projects" className="h-[2000px] sm:h-[1600px]">

        
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
            <div className="hidden fixed top-0 sm:flex sm:justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-2 pt-4 bg-white shadow-lg z-20">
            <nav>
                <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300 hidden sm:block "></img></button>
                <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300 hidden sm:block"></img></button>
                <ButtonLink to='/home' className="sm:ml-16 relative group sm:mr-16 ">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                <ButtonLink to='/projects' className="relative group sm:mr-16">Personal Projects<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                <ButtonLink to='/clubs' className="relative group sm:mr-16">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                {/*<button onClick={handleResumeClicked} className="relative group sm:mr-16">Resume<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></button>*/}
            </nav>
            </div>
        

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-lg p-4 absolute top-[60px] left-0 w-full z-20">
                <nav className="flex flex-col space-y-4">
                    <ButtonLink to='/home' className="text-center">Home</ButtonLink>
                    <ButtonLink to='/projects' className="text-center">Personal Projects</ButtonLink>
                    <ButtonLink to='/clubs' className="text-center">Clubs</ButtonLink>
                </nav>
                </div>
            )}


            <div className="pt-36">
                <div className="bg-white h-[1700px] sm:h-[1300px] w-full scale-x-90 rounded-lg shadow-lg">
                    <div className="h-20 w-full flex justify-left items-center">
                        <p className="pl-6 sm:pl-14 pb-2 text-2xl relative">
                        Tags:
                        <span className="absolute bottom-0 left-6 sm:left-14 h-0.5 w-14 bg-black"></span>
                        </p>
                        <button onClick={handleAiTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:text-base text-sm sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isAiActive ? 'bg-blue-300 border-black' : ''}`}>AI</button>
                        <button onClick={handleARoboticsTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:text-base text-sm sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isRActive ? 'bg-blue-300 border-black' : ''}`}>Robotics</button>
                        <button onClick={handleFullStackTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-4 sm:text-base text-sm sm:ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isFActive ? 'bg-blue-300 border-black' : ''}`}>FullStack</button>
                    </div>
                    <div className="bg-slate-200 h-5 scale-x-95 w-full rounded-full border-slate-200 border-2 border-solid shadow-md"></div>


                    {/*Project Cards*/}
                    <div className="h-full w-full flex flex-col">
                        <div className={`flex justify-center sm:px-20 px-5 ${isFActive ? 'hidden' : 'visible'} ${isAiActive ? 'hidden' : 'visible'}`}>
                                <div id="robotic-arm" className="bg-slate-100 mt-14 sm:h-72  w-full h-[400px] rounded-lg shadow-md flex flex-col sm:flex-row hover:shadow-xl ease-in-out duration-300">
                                    <div className="w-full sm:w-[510px] h-56 sm:h-full scale-75 scale-y-75 sm:scale-y-90 sm:scale-90 shadow-md rounded-lg overflow-hidden border-white border-2 border-solid">
                                        <img src={Roboticarm} className="w-full h-56 sm:h-full"></img>
                                    </div>
                                    <div className="w-full md:w-[850px] md:mt-2 font-bold font-serif text-lg lg:text-2xl md:text-left text-center">
                                        <p>IOT Robot Arm:</p>
                                        <p className="font-normal text-sm md:hidden">I built a robotic arm with 6 Degrees of freedom and controlled it with a bluetooth app!</p>
                                        <p className="font-normal lg:text-lg text-base hidden md:block">
                                            For this project I built an Internet of Things robotic arm, this means that to control the arm I designed a desktop app that connects via Bluetooth. The robotic arm has 6 degrees of freedom: base, shoulder joint, two elbow joints, wrist, and gripper. The system includes an Arduino UNO, servo driver, stepper motor driver, and a breadboard for the electronics.
                                        </p>
                                        <button className="mt-9 text-lg hidden xl:block" onClick={handleRobotButtonClick}>Click to Learn More</button>
                                    </div>
                                </div>
                        </div>

                        <div className={`flex justify-center sm:px-20 px-5 ${isRActive ? 'hidden' : 'visible' } ${isAiActive ? 'hidden' : 'visible' }`}>
                            <div id="Financial Website" className="bg-slate-100 mt-14 sm:h-72 w-full h-[400px] rounded-lg shadow-md flex flex-col sm:flex-row hover:shadow-xl ease-in-out duration-300">
                                <div className="w-full sm:w-[510px] h-56 sm:h-full scale-75 scale-y-75 sm:scale-y-90 sm:scale-90 shadow-md rounded-lg border-white border-2 border-solid">
                                    <img src={project2} className='w-full h-56 sm:h-full'></img>
                                </div>
                                <div className="w-full md:w-[850px] md:mt-2 mb-16 md:mb-0 font-bold font-serif text-lg lg:text-2xl md:text-left text-center">Financial Management Website: 
                                    <p className="font-normal text-sm md:hidden">I created a full-stack application for managing funds, investments, checking crypto and stock prices and also financial news articles. This was done with the use of a python backend utilizing multiple API's</p>
                                    <p className="font-normal lg:text-lg text-base hidden md:block">For this project I created a full-stack application that allows the user to manage their bank accounts using Plaid API, manage investments, check any stock and crypto prices in real-time, as well as easily view financial news. The Front-end was created using react-js, and the back-end utilized python with a Flask framework for sending API requests.</p>
                                    <button className="mt-10 text-lg hidden xl:block" onClick={handleFinanceButtonClick}>Click to Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className={`flex justify-center sm:px-20 px-5 ${isFActive ? 'hidden' : 'visible' } ${isRActive ? 'hidden' : 'visible' }`}>
                            <div id="Ai-project" className="bg-slate-100 mt-14 sm:h-72 w-full h-[400px] rounded-lg shadow-md flex flex-col sm:flex-row hover:shadow-xl ease-in-out duration-300">
                                <div className="w-full sm:w-[510px] h-56 sm:h-full scale-75 scale-y-75 sm:scale-y-90 sm:scale-90 shadow-md rounded-lg overflow-hidden border-white border-2 border-solid">
                                    <img src={project3} className='w-full h-full'></img>
                                </div>
                                <div className="w-full md:w-[850px] mt-2 font-bold font-serif text-lg lg:text-2xl text-center md:text-left">YOLOV3 Reseach Implementation:
                                <p className="font-normal text-sm md:hidden">I trained and fine-tuned a computer vision model based off of the YOLOv3 research paper, this involved understanding the concepts of the paper and applying them. I  managed to retain a mean average precision of 51.2% compared to YOLOv3's 57.9%</p>
                                <p className="font-normal lg:text-lg text-base hidden md:block">For this project I used a pre-made dataset to train my own Computer Vision model completely based off of the YOLOv3 research paper. This project involved reading and understanding the concepts and techniques in the paper for training weights, understanding model architecture, training the model, setting loss functions, model evaluation and last but not least optimizing and fine-tuning the model. This project was quite successful as I was able to retain a mean Average Precision of 51.2% compared to YOLOv3's 57.9% </p>
                                <button className="mt-4 pb-10 sm:mt-9 text-lg hidden xl:block" onClick={handleAIButtonClick} >Click to Learn More</button>
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


