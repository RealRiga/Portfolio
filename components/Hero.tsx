import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Particle from './Particle';
import TextEffect from './TextEffect';

const Hero = () => {

    const handleDownload = () => {
        // Provide a link to your resume PDF
        const resumeUrl = '/resume.pdf';
        console.log('Download button clicked');

        // Create an invisible anchor element
        const link = document.createElement('a');
        link.href = resumeUrl;

        // Set the download attribute to specify the file name
        link.download = 'Yisa_Adeola_Resume.pdf';

        // Append the anchor element to the document
        document.body.appendChild(link);

        // Trigger a click on the anchor element to start the download
        link.click();

        // Remove the anchor element from the document
        document.body.removeChild(link);
    };


    return (
        // <div className="h-[88vh] bg-[url('/image/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <div className="h-[88vh] bg-black mt-[10vh] bg-cover bg-center">
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[45px] text-white font-bold'>
                        HI, I AM <span className='text-yellow-400'> ADEOLA YISA</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
                        Versatility is my forte – I am proficient in a range of programming languages and
                        frameworks, making me a full-stack developer with expertise in both front-end and
                        back-end technologies. Results-driven and quality-focused, I prioritize delivering
                        solutions that not only meet but exceed expectations.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                        font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
                            onClick={handleDownload}
                        >
                            <p>Download Resume</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                        {/* <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200
                            text-[#55e6a5]'/>
                            <p className='text-[20px] font-semibold text-white'>
                                Watch The Video
                            </p>
                        </button> */}
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image
                        src="/image/riga.jpg"
                        alt="user"
                        layout="fill"
                        className='object-cover rounded-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero