    import React from 'react';


const Timeline = () => {
    return (
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto hover:shadow-xl hover:scale-[1.02] ease-out duration-300">
        <div className="timeline-item mb-3 ">
          <div className="year text-lg font-bold text-gray-800 mb-1">2022</div>
          <div className="details text-gray-700">
            <p className="text-sm sm:text-base">Started engineering undergraduate degree</p>
            <p className="text-sm sm:text-base">Achieved Dean's Honor's List <span role="img" aria-label="graduation cap">🎓</span></p>
          </div>
        </div>
        <div className="timeline-item mb-3">
          <div className="year text-lg font-bold text-gray-800 mb-1">2023</div>
          <div className="details text-gray-700">
            <p className="text-sm sm:text-base">Got into Mechatronics program with Artificial Intelligence Systems Engineering Dual Degree <span role="img" aria-label="trophy">🏆</span></p>
            <p className="text-sm sm:text-base">Achieved Dean's Honor's List again <span role="img" aria-label="graduation cap">🎓</span></p>
            <p className="text-sm sm:text-base">Joined WeMars Club <span role="img" aria-label="rocket">🚀</span></p>
            <p className="text-sm sm:text-base">Joined Aero Design Club</p>
          </div>
        </div>
        <div className="timeline-item mb-1">
          <div className="year text-lg font-bold text-gray-800 mb-1">2024</div>
          <div className="details text-gray-700">
            <p className="text-sm sm:text-base">Became WeMars Lead Software Engineer <span role="img" aria-label="rocket">🚀</span></p>
            <p className="text-sm sm:text-base">Plan to acheive Dean's Honor list again!<span role="img" aria-label="graduation cap">🎓</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Timeline;