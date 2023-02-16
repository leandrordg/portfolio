import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#202020] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://esmtcc.vercel.app/esm.png"
        alt="ESM"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO da ESM</h4>
        <p className="font-bold text-2xl mt-1">ESM (Etec Social Media)</p>

        <div className="flex space-x-2 my-2">
          <img
            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            alt="Linguagem"
            className="h-10 w-10 rounded-full bg-white border"
          />
          <img
            src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
            alt="Linguagem"
            className="h-10 w-10 rounded-full "
          />
          <img
            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            alt="Linguagem"
            className="h-10 w-10 rounded-full bg-white border"
          />
          <img
            src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
            alt="Linguagem"
            className="h-10 w-10 rounded-full "
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Quando comecou... Terminou...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumários</li>
          <li>Sumários</li>
          <li>Sumários</li>
          <li>Sumários</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
