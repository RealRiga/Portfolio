import { Bars3Icon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [activeLink, setActiveLink] = useState('Home');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        // const [mobileNavOpen, setMobileNavOpen] = useState(false);
        if (element) {
            if (sectionId === 'home') {
                // For the "Home" section, scroll to the top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            } else {
                // For other sections, scroll to the section with the default behavior
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            const sections = [
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'services', label: 'Services' },
                { id: 'project', label: 'Projects' },
                { id: 'testimonial', label: 'Testimonial' },
                { id: 'contact', label: 'Contact' },
            ];

            clearTimeout(timeoutId!);

            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                let activeSection = 'Home';

                sections.forEach((section) => {
                    const element = document.getElementById(section.id);
                    if (element && scrollPosition >= element.offsetTop) {
                        activeSection = section.label;
                    }
                });

                setActiveLink(activeSection);
            }, 50); // Adjust the delay duration as needed
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Detach the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 onClick={() => {
                    scrollToSection('home');
                    setActiveLink('Home');
                }} className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                    Ri
                    <span className='text-yellow-300'>ga</span>
                </h1>
                <div onClick={() => {
                    scrollToSection('home');
                    setActiveLink('Home');
                }} className={`nav-link ${activeLink === 'Home' ? 'active' : ''} transition-all ease-in-out duration-300`}>Home</div>

                <div onClick={() => {
                    scrollToSection('about');
                    setActiveLink('About');
                }} className={`nav-link ${activeLink === 'About' ? 'active' : ''} transition-all ease-in-out duration-300`}>About Me</div>

                <div onClick={() => {
                    scrollToSection('skills');
                    setActiveLink('Skills');
                }} className={`nav-link ${activeLink === 'Skills' ? 'active' : ''} transition-all ease-in-out duration-300`}>Skills</div>

                <div onClick={() => {
                    scrollToSection('services');
                    setActiveLink('Services');
                }} className={`nav-link ${activeLink === 'Services' ? 'active' : ''} transition-all ease-in-out duration-300`}>Services</div>

                <div onClick={() => {
                    scrollToSection('project');
                    setActiveLink('Projects');
                }} className={`nav-link ${activeLink === 'Projects' ? 'active' : ''} transition-all ease-in-out duration-300`}>Projects</div>

                <div onClick={() => {
                    scrollToSection('testimonial');
                    setActiveLink('Testimonial');
                }} className={`nav-link ${activeLink === 'Testimonial' ? 'active' : ''} transition-all ease-in-out duration-300`}>Testimonial</div>

                <div onClick={() => {
                    scrollToSection('contact');
                    setActiveLink('Contact');
                }} className={`nav-link ${activeLink === 'Contact' ? 'active' : ''} transition-all ease-in-out duration-300`}>Contact</div>

                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
                </div>
            </div>
        </div>
    );
};

export default Nav;
