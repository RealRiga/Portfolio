import { CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid'

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                My <span className='text-yellow-400'>Services</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem]
                mt-[4rem] text-white'>
                <div data-aso="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Frontend
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    I am a frontend developer on a mission to create immersive and user-centric digital experiences. With a
                    keen eye for design and a passion for cutting-edge technologies, I bring websites and applications
                    to life through captivating and responsive user interfaces.
                    </p>
                </div>
                </div>
                <div data-aos="zoom-in" data-aos-delays="300">
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300
                 uppercase font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Backend
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    In the world of backend development, my focus is on architecting solutions that not only meet current needs
                    but also scale gracefully for the future. From database design to server-side logic, I thrive on optimizing
                    performance and ensuring the reliability of the core functionalities that make applications tick.
                    </p>
                </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
                 uppercase font-semibold text-center p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Full Stack
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    On the frontend, I breathe life into designs, creating captivating and responsive user interfaces that leave lasting impressions.
                    Proficient in HTML, CSS, and JavaScript, I meticulously translate creative visions into dynamic, user-friendly realities.
                    Responsive design isn't just a checkbox – it's a commitment to delivering seamless experiences across all devices.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services