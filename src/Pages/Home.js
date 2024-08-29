import '../App.css';
import { Link, Element } from 'react-scroll';
import Timeline from '../Components/timeline.js';
import universityPhoto from '../images/universityPhoto.jpg';
import ButtonLink from '../Components/ButtonLink.js';
import { DownArrow, ResumeIcon } from '../Components/Icons.js';
import GithubIcon from '../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.webp';
import React, {useState, useEffect} from 'react';
import BryanImage from '../images/Bryan_Landscape.jpg'




function HomePage() {

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 1500); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }, []);

    const handleGitHubButtonClick = () => {

      window.location.href ="https://github.com/Bryanh002"

    }

    const handleLinkedInButtonClick = () => {

      window.location.href="https://www.linkedin.com/in/bryan-heddle-4a55361ba/"

    }


    return (
      <div className="relative min-h-screen text-black">
  
        {/*background*/}
        <div className="fixed inset-0 h-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${BryanImage})` }}></div>

        {/* sliding color background */}
        <div
          className={`fixed inset-0 h-screen bg-customBlue-100 transition-transform duration-2000 ease-in-out ${
            isAnimated ? '-translate-x-full' : 'translate-x-0'
          } z-10`}
        ></div>
  
        {/*navbar*/}
        <div className="fixed top-0 flex justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-20 pt-4 bg-white shadow-lg z-20">
          <nav>
            <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300"></img></button>
            <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300"></img></button>
            <ButtonLink to='/home' className="relative group mr-16">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
            <ButtonLink to='/projects' className="relative group mr-16">Personal Projects<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
            <ButtonLink to='/clubs' className="relative group mr-16">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
          </nav>
        </div>
  
        {/*main page text container*/}
        <Element name="home" className="relative z-10 min-h-screen overflow-hidden bg-transparent text-white">
          <div className="flex-grow flex flex-col items-center justify-center pt-20 pr-[1350px] fixed inset-0 h-screen z-20">
            <h1 className="text-4xl pr-40 pl-3 pb-2">Hey <span role="img" aria-label="wave">👋</span>,</h1>
            <h2 className="text-6xl font-bold transition ease-in duration-300 hover:scale-110 pl-4">I'm Bryan!</h2>
            <Link to="timeline-section" smooth={true} duration={1000} className="text-lg pt-4 pl-16 transition ease-in duration-300 hover:scale-105 cursor-pointer">
              Click to learn more about me
            </Link>
          </div>
        </Element>
  
  
        <Element name="timeline-section">
        <div className="relative bg-blue-300 h-6 shadow-xl z-30">
          {/*<div className="relative top-4 bg-blue-200 shadow-md rounded-md scale-x-75 h-6 z-30"></div>*/}
        </div>
        </Element>
  
        <div className="relative z-20">
          <div className="bg-slate-200 h-[800px]">
            <div className="relative z-20  text-center">
              <div className="relative w-full h-72">
                <img src={universityPhoto} alt="University" className="w-full h-full object-cover" />
                <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50">My Timeline</h1>
              </div>
              <div className="relative bg-blue-300 h-6 shadow-xl z-30"></div>
              <div className="pt-20">
              <Timeline />
              </div>
            </div>
          </div>
          <div className="bg-slate-200 h-72">
            <div>
            <div className="text-3xl p-2 group border w-full flex justify-center" style={{ clipPath: 'inset(0 0 0 0 )' }}>
                <div className="[grid-area:1/1] flex items-center justify-center h-20 w-96 transition ease-in-out duration-1000 hover:translate-y-10"><DownArrow /></div>
            </div>
            <div className="flex justify-center w-full">
                <ButtonLink to='/projects' className="text-xl font-semibold bg-blue-300 rounded-lg mt-8 px-4 py-4 shadow-md hover:scale-105 ease-in-out duration-300 hover:shadow-lg">My Projects!</ButtonLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default HomePage;