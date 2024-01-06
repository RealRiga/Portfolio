import SkillsItems from './SkillsItems';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
            <h1 className='heading'>
                Education & <span className='text-yellow-400'>Skill</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
        items-center'>
                <div>
                    <SkillsItems title="React Developer" year="2023 - Till Date"
                    text="As a React developer, I specialize in creating dynamic and interactive user interfaces that captivate and engage.
                    Leveraging the power of React, I breathe life into design concepts, ensuring that every component is not just visually
                    appealing but also seamlessly responsive. My expertise lies in harnessing the full potential of React to deliver user
                    experiences that leave a lasting impression."
                    />
                    <SkillsItems title="C# Developer" year="2023 - Till Date"
                    text="As a C# developer, I bring precision and power to backend development. With a keen eye for detail, I craft solutions
                    that seamlessly integrate with frontend technologies. C# empowers me to create secure and scalable applications, and my commitment
                    to clean, maintainable code ensures that these solutions stand the test of time."
                    />
                    

                    <SkillsLanguage
                        skill1="html"
                        skill2="css"
                        skill3="javascript"
                        skill4="bootstrap"
                        skill5="tailwind"
                        skill6="c"
                        level1="w-[99%]"
                        level2="w-[95%]"
                        level3="w-[80%]"
                        level4="w-[80%]"
                        level5="w-[80%]"
                        level6="w-[60%]"
                    />
                </div>
                <div>
                    <SkillsItems title="Next Js Developer" year="2023 - Till Date"
                    text="Taking the frontend experience to the next level, I excel as a Next.js developer. With this framework, I seamlessly
                    blend server-side rendering with a delightful user experience. Navigating the complexities of Next.js, I ensure that web
                    applications are not only performant but also easily maintainable. From optimizing page load times to crafting intuitive navigation,
                    I thrive on pushing the boundaries of what's possible."
                    />
                    <SkillsItems title="Java Developer" year="2023 - Till Date"
                    text="In the backend landscape, my proficiency extends to Java development. Armed with the robust capabilities of Java, I architect
                    scalable and efficient solutions that form the backbone of web applications. Whether it's database management, business logic, or system
                    integration."
                    />

                    <SkillsLanguage
                        skill1="React Js"
                        skill2="Next Js"
                        skill3="TypeScript"
                        skill4="java"
                        skill5="flutter"
                        skill6="c#"
                        level1="w-[81%]"
                        level2="w-[78%]"
                        level3="w-[50%]"
                        level4="w-[70%]"
                        level5="w-[89%]"
                        level6="w-[60%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;