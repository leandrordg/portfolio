import { motion } from 'framer-motion';

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#537FE7]/80">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://uploaddeimagens.com.br/images/004/355/702/original/Captura_de_tela_2023-02-16_081332.jpg?1676546182"
              alt="Project"
              className="max-w-xl w-full"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#537FE7]/50">
                  Estudo de caso {index + 1} de {projects.length}:
                </span>{' '}
                ESM
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt error illum blanditiis, exercitationem, delectus
                architecto voluptatibus mollitia adipisci dignissimos ut
                reiciendis obcaecati nulla quo minima quis quia nemo sint
                molestias.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#537FE7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
