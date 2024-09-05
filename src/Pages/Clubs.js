import React,  { useState, useRef, useEffect } from 'react';
import ButtonLink from '../Components/ButtonLink';
import GithubIcon from '../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.webp';
import WeMarsLogo from '../images/WeMarsLogo.png';
import WAeroDesignLogo from '../images/WAeroDesignLogo.png'



function ClubsPage() {
    const [showContent, setShowContent] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  

    const ref = useRef(null);


    useEffect(() => {
        setShowContent(true);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            console.log('Entry:', entry); // Add this line
            if (entry.isIntersecting) {
            console.log('In view'); // Add this line
            setVisible(true);
            observer.disconnect();
            }
        },
        {
            threshold: 0.1,
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleGitHubButtonClick = () => {
        window.location.href = "https://github.com/Bryanh002";
    };

    const handleLinkedInButtonClick = () => {
        window.location.href = "https://www.linkedin.com/in/bryan-heddle-4a55361ba/";
    };



    return(
        <div id="clubs" className="h-[1800px] pt-12">
            
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
  


            <div className="w-full h-[1000px] pt-24 sm:pt-56">
                <div className={`transform transition-all duration-1000 ease-in-out ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex justify-center sm:justify-normal"><img className="w-auto h-auto sm:w-[450px] sm:h-[200px] sm:ml-56" src={WeMarsLogo}></img></div>
                    <div className="flex justify-center sm:justify-normal"><div className={`bg-white mx-4 sm:mx-0 pb-8 sm:pb-0 w-auto h-auto sm:w-[1000px] sm:h-72 sm:mt-20 mt-5 sm:ml-56 rounded-lg shadow-md`}>
                        <h1 className="ml-10 pt-5 font-semibold text-2xl font-serif">Lead Software Engineer</h1>
                        <p className="ml-10 mr-10 pt-5 font-serif">My time with WeMars has enhanced my practical software development skills. I have worked with a variety of devices, including the Intel D345 Camera, ESP32 Cams, MPU6050 IMU, and GY-NEO6MV2 GPS module. I have also developed expertise in using the CAN Bus protocol for data transfer from these devices to a front-end interface for our team's monitoring purposes. Our data pipeline involved using an ESP-board with an installed CAN Hub to collect data, which was then transmitted to a Raspberry Pi. The Raspberry Pi forwarded this data to our communication radios, and ultimately, the information was displayed on our front-end interface for easy viewing and analysis.</p>
                    </div></div>
                </div>
            </div>

            <div ref={ref} className="w-full h-[700px] pt-10">
                <div className={`transform transition-all duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="flex justify-center sm:justify-normal"><img className="w-auto h-auto sm:ml-[1277px] ml-10 sm:w-[450px] sm:h-[200px]" src={WAeroDesignLogo} alt="WAeroDesign Logo" /></div>
                <div className="flex justify-center sm:justify-normal"><div className="bg-white mx-4 sm:mx-0 pb-8 sm:pb-0 w-auto h-auto sm:w-[1000px] sm:h-72 mt-10 sm:mt-20 sm:ml-[679px] rounded-lg shadow-md">
                    <h1 className="sm:ml-[680px] pl-10 sm:pl-0 pt-5 font-semibold text-2xl">Junior Controls Engineer</h1>
                    <p className="ml-10 mr-10 pt-5 ">In this I club I was taught by senior leads how to properly code a react.js front-end for displaying data and pair it with a database for storing the data, all in real-time. This also involved setting up a Docker file to allow the program to be very user friendly. I was also taught basic PCB design and soldering for electrical components. </p>
                </div></div>
                </div>
            </div>





        </div>
    )



}


export default ClubsPage;