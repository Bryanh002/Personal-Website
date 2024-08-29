import React,  { useState, useRef, useEffect } from 'react';
import ButtonLink from '../Components/ButtonLink';
import GithubIcon from '../images/GithubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.webp';
import WeMarsLogo from '../images/WeMarsLogo.png';
import WAeroDesignLogo from '../images/WAeroDesignLogo.png'



function ClubsPage() {
    const [showContent, setShowContent] = useState(false);
    const [visible, setVisible] = useState(false);
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
        <div className="bg-gradient-to-b from-blue-200 to-blue-400 h-[1700px]">
            {/*navbar*/}
            <div className="fixed top-0 flex justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-20 pt-4 bg-white shadow-lg z-10">
                <nav>
                    <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300"></img></button>
                    <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300"></img></button>
                    <ButtonLink to='/home' className="relative group mr-16">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                    <ButtonLink to='/projects' className="relative group mr-16">Personal Projects<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                    <ButtonLink to='/clubs' className="relative group mr-16">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                </nav>
            </div>


            <div className="w-full h-[1000px] pt-56">
                <div className={`transform transition-all duration-1000 ease-in-out ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                    <img className="w-[450px] h-[200px] ml-56" src={WeMarsLogo}></img>
                    <div className={`bg-white w-[1000px] h-72 mt-20 ml-56 rounded-lg shadow-md`}>
                        <h1 className="ml-10 pt-5 font-semibold text-2xl font-serif">Lead Software Engineer</h1>
                        <p className="ml-10 mr-10 pt-5 font-serif">My time with WeMars has enhanced my practical software development skills. I have worked with a variety of devices, including the Intel D345 Camera, ESP32 Cams, MPU6050 IMU, and GY-NEO6MV2 GPS module. I have also developed expertise in using the CAN Bus protocol for data transfer from these devices to a front-end interface for our team's monitoring purposes. Our data pipeline involved using an ESP-board with an installed CAN Hub to collect data, which was then transmitted to a Raspberry Pi. The Raspberry Pi forwarded this data to our communication radios, and ultimately, the information was displayed on our front-end interface for easy viewing and analysis.</p>
                    </div>
                </div>
            </div>

            <div ref={ref} className="w-full h-[700px]">
                <div className={`transform transition-all duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <img className="ml-[1277px] w-[450px] h-[200px]" src={WAeroDesignLogo} alt="WAeroDesign Logo" />
                <div className="bg-white w-[1000px] h-72 mt-20 ml-[679px] rounded-lg shadow-md">
                    <h1 className="ml-[680px] pt-5 font-semibold text-2xl">Junior Controls Engineer</h1>
                    <p className="ml-10 mr-10 pt-5 "></p>
                </div>
                </div>
            </div>





        </div>
    )



}


export default ClubsPage;