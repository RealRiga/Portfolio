import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Versatility is my forte – I am proficient in a range of programming languages and frameworks, making me a full-stack developer with expertise in both front-end and back-end technologies. Results-driven and quality-focused, I prioritize delivering solutions that not only meet but exceed expectations.',
        1500,
      ]}
      speed={20}
      className='text-[1rem] md:text-[1.5rem] text-[#ffff] font-bold'
      repeat={Infinity}
    />
  );   
};

export default AnimatedText;