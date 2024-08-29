import ButtonLink from '../Components/ButtonLink.js';
import React,  { useState } from 'react';
import Roboticarm from '../images/Roboticarm.jpg';
import GithubIcon from'../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.webp';


function ProjectPage() {
    const [isAiActive, setIsAiActive] = useState(false);
    const [isRActive, setIsRActive] = useState(false);
    const [isFActive, setIsFActive] = useState(false);

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

        <div className="bg-blue-200 h-[3000px]">

        
            <div className="fixed top-0 flex justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-20 pt-4 bg-white shadow-lg z-10">
                <nav>
                    <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300"></img></button>
                    <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300"></img></button>
                    <ButtonLink to='/home' className="relative group mr-16">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                    <ButtonLink to='/projects' className="relative group mr-16">Personal Projects<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                    <ButtonLink to='/clubs' className="relative group mr-16">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                </nav>
            </div>


            <div className="pt-36">
                <div className="bg-white h-screen w-full scale-x-90 rounded-lg shadow-lg">
                    <div className="h-20 w-full flex justify-left items-center">
                        <p className="pl-14 pb-2 text-2xl relative">
                        Tags:
                        <span className="absolute bottom-0 left-14 h-0.5 w-14 bg-black"></span>
                        </p>
                        <button onClick={handleAiTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isAiActive ? 'bg-blue-300 border-black' : ''}`}>AI</button>
                        <button onClick={handleARoboticsTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isRActive ? 'bg-blue-300 border-black' : ''}`}>Robotics</button>
                        <button onClick={handleFullStackTagClick} className={`rounded-full border-slate-200 border-2 border-solid ml-14 px-4 py-1 shadow-sm hover:scale-105 hover:shadow-lg ease-in-out duration-300 ${isFActive ? 'bg-blue-300 border-black' : ''}`}>FullStack</button>
                    </div>
                    <div className="bg-slate-200 h-5 scale-x-95 w-full rounded-full border-slate-200 border-2 border-solid shadow-md"></div>


                    {/*Project Cards*/}

                    <div className="h-full w-full">
                        <div id="robotic-arm" className="bg-slate-100 mt-14 h-72 w-[1350px] ml-[248.85px] rounded-lg shadow-md flex hover:shadow-xl ease-in-out duration-300">
                            <div className="w-[450px] h-full scale-90 shadow-md rounded-lg overflow-hidden border-slate-500 border-2 border-solid"><img src={Roboticarm} className='w-full h-full'></img></div>
                            <div className="w-[850px] mt-2 font-bold font-serif text-2xl">IOT Robot Arm: 
                            <p className="font-normal text-lg">For this project I built an Internet of Things robotic arm, this means that to control the arm I designed a desktop app that connects via bluetooth, It controlled the arm with sliders that can choose the servo motor's positions. The robotic arm itself has 6 degrees of freedom, The base, Shoulder joint, First Elbow Joint, Second Elbow Joint, Wrist joint and Gripper, this allows for greater mobility and range. In Terms of the electrical side it is all connected in circuit via an arduino UNO, Servo Driver, Stepper Motor Driver and a Breadboard. </p>
                            <button className="ml-12 mt-9 text-lg" onClick={handleRobotButtonClick} >Click to Learn More<img src={GithubIcon} className="h-8 w-8 absolute bottom-[490px] left-[700px] hover:scale-110 ease-in-out duration-300"></img></button>
                            </div>
                        </div>

                        <div id="Financial Website" className="bg-slate-100 mt-14 h-72 w-[1350px] ml-[248.85px] rounded-lg shadow-md flex hover:shadow-xl ease-in-out duration-300">
                            <div className="w-[450px] h-full scale-90 shadow-md rounded-lg overflow-hidden border-slate-500 border-2 border-solid"><img src={Roboticarm} className='w-full h-full'></img></div>
                            <div className="w-[850px] mt-2 font-bold font-serif text-2xl">Financial Management Website: 
                            <p className="font-normal text-lg"></p>
                            {/*<button className="ml-12 mt-9 text-lg" onClick={handleRobotButtonClick} >Click to Learn More<img src={GithubIcon} className="h-8 w-8 absolute bottom-[490px] left-[700px] hover:scale-110 ease-in-out duration-300"></img></button>*/}
                            </div>
                        </div>



                    </div>



                </div>
            </div>

            
      

            

            <div className="bg-blue-200 h-36 w-full"></div>
        </div>
    );

}

export default ProjectPage;


