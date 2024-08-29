    import React from 'react';


const Timeline = () => {
    return (
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto hover:shadow-xl hover:scale-[1.02] ease-out duration-300">
        <div className="timeline-item mb-10">
          <div className="year text-xl font-bold text-gray-800 mb-2">2022</div>
          <div className="details text-gray-700">
            <p>Started engineering undergraduate degree</p>
            <p>Achieved Dean's Honor's List <span role="img" aria-label="graduation cap">🎓</span></p>
          </div>
        </div>
        <div className="timeline-item mb-10">
          <div className="year text-xl font-bold text-gray-800 mb-2">2023</div>
          <div className="details text-gray-700">
            <p>Got into Mechatronics program with Artificial Intelligence Systems Engineering Dual Degree <span role="img" aria-label="trophy">🏆</span></p>
            <p>Achieved Dean's Honor's List again <span role="img" aria-label="graduation cap">🎓</span></p>
            <p>Joined WeMars Club <span role="img" aria-label="rocket">🚀</span></p>
            <p>Joined Aero Design Club</p>
          </div>
        </div>
        <div className="timeline-item mb-2">
          <div className="year text-xl font-bold text-gray-800 mb-2">2024</div>
          <div className="details text-gray-700">
            <p>Became WeMars Lead Software Engineer <span role="img" aria-label="rocket">🚀</span></p>
            <p>Plan to acheive Dean's Honor list again!<span role="img" aria-label="graduation cap">🎓</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Timeline;