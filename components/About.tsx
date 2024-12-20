import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const About = () => {

    const handleDownload = () => {
        // Provide a link to your resume PDF
        const resumeUrl = '/my_resume.pdf';
        console.log('Download button clicked');

        // Create an invisible anchor element
        const link = document.createElement('a');
        link.href = resumeUrl;

        // Set the download attribute to specify the file name
        link.download = 'Yisa_Adeola_My_Resume.pdf';

        // Append the anchor element to the document
        document.body.appendChild(link);

        // Trigger a click on the anchor element to start the download
        link.click();

        // Remove the anchor element from the document
        document.body.removeChild(link);
    };


    return (
        <div id="about" className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize
                mb-[3rem] font-bold text-white'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                            A passionate and innovative programmer with a flair for turning
                            ideas into reality through code. My journey in the world of technology
                            has equipped me with a diverse skill set and a commitment to continuous learning.
                            I thrive on challenges, leveraging my adaptability to quickly grasp new technologies and frameworks.
                            As a detail-oriented programmer, I take pride in crafting clean, efficient, and scalable code that stands
                            the test of time. I am not just a coder; I am a problem-solver, always seeking innovative solutions to complex challenges.
                        </p>
                    </div>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
                        onClick={handleDownload}
                    >
                        <p>Download Resume</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </button>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image
                        src='/image/riga.jpg'
                        alt='user'
                        layout='fill'
                        objectFit='contain'
                        className='relative z-[11] w-[100%] h-[100%] object-contain'
                    />
                    {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About