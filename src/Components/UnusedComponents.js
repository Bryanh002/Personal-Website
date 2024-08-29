



        {/*OldNavBar*/}

            <div className="fixed top-0 flex justify-end space-x-8 text-lg font-semibold mb-10 w-full p-2 pb-4 pr-20 pt-4 bg-white shadow-lg z-10">
                <nav>
                    <button onClick={handleGitHubButtonClick}><img src={GithubIcon} className="fixed top-[9px] left-8 h-9 w-9 hover:scale-105 ease-in-out duration-300"></img></button>
                    <button onClick={handleLinkedInButtonClick}><img src={LinkedinIcon} className="fixed top-1 left-24 h-12 w-12 hover:scale-105 ease-in-out duration-300"></img></button>
                    <ButtonLink to='/home' className="relative group mr-16 px-2">Home<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span></ButtonLink>
                    <ButtonLink to='/projects' className="relative group mr-16 px-2 transition-all">Personal Projects
                    <span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-200 ease-in-out origin-left"></span>
                    <span className="absolute right-0 bottom-0 h-full w-0.5 bg-blue-300 transform scale-y-0 group-hover:scale-y-100 transition-all delay-200 duration-200 ease-in-out origin-bottom"></span>
                    <span className="absolute left-0 top-0 h-0.5 w-full bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-all delay-400 duration-200 ease-in-out origin-right"></span>
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-300 transform scale-y-0 group-hover:scale-y-100 transition-all delay-600 duration-200 ease-in-out origin-top"></span>
                    </ButtonLink>
                    <ButtonLink to='/clubs' className="relative group mr-16 px-2 ">Clubs<span className="rounded-lg absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span><span className="absolute right-0 bottom-0 h-full w-0.5 bg-blue-300 scale-y-0 transform group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-bottom"></span><span className="absolute left-0 top-0 h-0.5 w-full bg-blue-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-right"></span><span className="absolute left-0 top-0 h-full w-0.5 bg-blue-300 scale-y-0 transform group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top"></span></ButtonLink>
                    <button className="relative px-2 group opacity-100 group-hover:opacity-100 transition-opacity duration-300">Test Button
                    <span className="absolute inset-0 border-2 border-blue-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                </nav>
            </div>