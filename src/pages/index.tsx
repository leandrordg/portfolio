import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#537FE7]/80">
      <Head>
        <title>Leandro Portfolio</title>
        <meta name="description" content="Web Developer Frontend" />
        <meta name="author" content="Leandro Rodrigues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className='flex items-center justify-center'>
            <img
              src="https://avatars.githubusercontent.com/u/81198533?v=4"
              alt="Voltar"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
