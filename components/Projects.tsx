import Image from "next/image";
import React from 'react'

const Projects = () => {
  const handleDivClick = (url:string) => {
    window.open(url, '_blank');
  };

  return (
    <div id="project" className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Proj<span className='text-yellow-400'>ects</span>
      </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div
        data-aos="fade-up" onClick={() => handleDivClick('https://fan0fannation.netlify.app/')}>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/project1.png"
                alt="fan company"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" onClick={() => handleDivClick('https://adeolaportfolio.vercel.app/')}>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/project2.png"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600" onClick={() => handleDivClick('https://crystal-store.vercel.app/')}>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/project3.png"
                alt="crystal company"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div>
        {/* <div data-aos="fade-up" data-aos-delay="900">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/p4.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/p5.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1600">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
            w-[100%] h-[200px] md:h-[300px]'>
              <Image
                src="/image/p1.jpg"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;