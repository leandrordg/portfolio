import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'Olá, eu sou o Leandro Rodrigues',
      'Web Developer',
      'Front-end Designer',
      '<Bora codar dev/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://avatars.githubusercontent.com/u/81198533?v=4"
        alt="Leandro Rodrigues"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Computer Science
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#537FE7" />
        </h1>

        <div className="pt-5 flex items-center justify-center flex-wrap gap-2 md:gap-6">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
