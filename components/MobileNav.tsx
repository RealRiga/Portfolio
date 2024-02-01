import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
    scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ nav, closeNav, scrollToSection }: Props) => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            // Adjust the offset based on the section
            let offset = 0;
            if (sectionId == 'home' || sectionId === 'skills' || sectionId === 'project') {
                offset = -50; // Adjust this value as needed
            } else if (sectionId === 'testimonial' || sectionId == 'services') {
                offset = -20; // Adjust this value as needed
            } else if (sectionId === 'contact') {
                offset = -20; // Adjust this value as needed
            }

            window.scrollTo({
                top: element.offsetTop + offset,
                behavior: 'smooth',
            });
        }
        setActiveLink(sectionId);
        closeNav();
    };

    return (
        <div className={`fixed transform transition-all duration-300 top- left-0 right-0 bottom-0 z-[1000000] bg-[#09101a] ${nav ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div
                    onClick={() => handleLinkClick('home')}
                    className={`nav-link-mobile ${activeLink === 'home' ? 'active' : ''}`}
                >
                    Home
                </div>
                <div
                    onClick={() => handleLinkClick('about')}
                    className={`nav-link-mobile ${activeLink === 'about' ? 'active' : ''}`}
                >
                    About
                </div>
                <div
                    onClick={() => handleLinkClick('skills')}
                    className={`nav-link-mobile ${activeLink === 'skills' ? 'active' : ''}`}
                >
                    Skills
                </div>
                <div
                    onClick={() => handleLinkClick('services')}
                    className={`nav-link-mobile ${activeLink === 'services' ? 'active' : ''}`}
                >
                    Services
                </div>
                <div
                    onClick={() => handleLinkClick('project')}
                    className={`nav-link-mobile ${activeLink === 'project' ? 'active' : ''}`}
                >
                    Project
                </div>
                <div
                    onClick={() => handleLinkClick('testimonial')}
                    className={`nav-link-mobile ${activeLink === 'testimonial' ? 'active' : ''}`}
                >
                    Testimonial
                </div>
                <div
                    onClick={() => handleLinkClick('contact')}
                    className={`nav-link-mobile ${activeLink === 'contact' ? 'active' : ''}`}
                >
                    Contact
                </div>
            </div>
            <div
                onClick={closeNav}
                className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'
            >
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;
