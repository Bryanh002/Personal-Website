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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 1000);
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
  
        <div className="fixed inset-0 hidden sm:block sm:h-screen bg-cover sm:bg-center z-0" style={{ backgroundImage: `url(${BryanImage})` }}></div>

        <div
          id="home-page" className={`fixed inset-0 h-screen transition-transform duration-2000 ease-in-out ${
            isAnimated ? '-translate-x-full' : 'translate-x-0'
          } z-10`}
        ></div>

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
  
        {/*main page text container*/}
        <Element name="home" className="relative z-10 min-h-screen overflow-hidden bg-transparent text-white">
          <div className="flex-grow flex flex-col items-center justify-center sm:pt-56 sm:pr-[1350px] fixed inset-0 h-screen z-20">

            <h1 className={`text-4xl sm:pr-40 pb-2 transition-colors duration-500 delay-1000 ease-in-out ${isAnimated ? 'text-white' : 'text-black'}`}
              >Hey<span role="img" aria-label="wave">👋</span>,</h1>

            <h2 className={`text-6xl font-bold transition ease-in-out duration-300 delay-1000 hover:scale-110 hover:delay-0 pl-4 ${isAnimated ? 'text-white' : 'text-black'}`}>
              I'm Bryan!</h2>

            <h2 className={`sm:hidden m-2 mt-6 p-4 border-2 rounded-lg shadow-lg transition ease-in-out duration-300 delay-1000 ${isAnimated ? 'text-white bg-blue-500 border-blue-500' : 'text-black bg-blue-200 border-blue-200'}`}>I'm a third year attending Western university for a degree in mechatronics and artifical intelligence systems engineering. I'm passionate about AI, embedded systems, Mechanical Design and more! I'm currently looking for interships during the summer of 2025. </h2>

            <Link to="timeline-section" smooth={true} duration={1000} className={`text-lg pt-4 sm:pl-16 transition ease-in-out delay-1000 duration-300 hover:scale-105 hover:delay-0 cursor-pointer ${isAnimated ? 'text-white' : 'text-black'}`}>
              Click to learn more about me
            </Link>
            
          </div>
        </Element>
  
  
        <Element name="timeline-section">
        <div id="banner" className="relative h-6 shadow-xl z-30">
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
              <div id="banner" className="relative h-6 shadow-xl z-30"></div>
              <div className="pt-10">
              <Timeline />
              </div>
            </div>
          </div>
          <div className="bg-slate-200 h-96">
            <div>
            <div className="text-3xl p-2 pt-12 group border w-full flex justify-center" style={{ clipPath: 'inset(0 0 0 0 )' }}>
                <div className="[grid-area:1/1] flex items-center justify-center pb-20 sm:mb-0  h-20 w-full transition ease-in-out duration-1000 hover:translate-y-10"><DownArrow /></div>
            </div>
            <div className="flex justify-center w-full">
                <ButtonLink to='/projects' className="text-xl font-semibold bg-blue-300 rounded-lg mt-2 sm:mt-2 px-4 py-4 shadow-md hover:scale-105 ease-in-out duration-300 hover:shadow-lg">My Projects!</ButtonLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default HomePage;