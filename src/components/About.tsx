import { motion } from 'framer-motion';

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/vLlM_fXxT6z-uuzXVk1J5ym-isz_wdoOWr94-Rx4MLiRJYBvYFUQ-av2eRuw4iwDbHTe3BKkZ75KmkMF6Tg3VR0bD4lQEWjXXUnhFbRnoXgPpdj-rE4kSmcEBLecZsvmG9G-3Uevfb9mbQTWGsenUPMekLuRvIrIhh2esD-UiA2k7fjkE0XJx9SrkUKRuNiSOMl2_CzPQGs7nC30gf5Uez1vyF8cGVXrjz3TqCp1irRt9UzRf6q5jqNrJslBO8XaX022J6t2HRNHHFm24M5j7Dx1vDDCHusZYsNSKNZmxWsgBXBw0tKbouA6UhFhr1qmGu0JWmhRWNpkrY9hkIGDw1jhUu30v75WR5VZz3EoTU_Yok2GoTXkQB5qXgTlXidfV_QrMqazPCTJ2cafBlOjL4TryM4iIpzveB0Tpnn5wZ07OviWI2QiS1H0jSG64a0_66fH_VK3GLCrjcyvF9JF7yQoKEPRmhp5q8GBn6y7Pte2M_IbBaE4LeWxfnk2kDK8QOd7J5zGhRDuNzNdvO72wCHkuCaDgMI-DfaH0JkY9O_uWWRFqIPQNA7RQvgQ7u_U81cmBmWj2KJU65j2TuSNqf0qCWAf4RNly77HnfSkj_93Hz0v_vwZ_90laPEcLmhN43XCqKhHlxuurdzkG5rSpdAOznwlh4GqBUa--QFRFpoQKthcDocGFvkwHI520UAGFiKw6hBzzPsKpEq01hCBJOYmqzWQIy69BuXlLVqEE8xzrPF5n0_zvHGuJxzi4TnGojQeq3jVqQHofw6CaTckh6WVboziM1cCvCmzViWihqKwVqXnpXJkMQ5fVJmJcnrKL7xsR-0NfS8CJu1V1x_cFy4JhFp_4aSNYz1s_3xqtML9eB48Ov89ZhDh16wWFqgJhh1rMNmMltHEnMNOEH4Slv_M1vC4i5RUcD2b_QH8umdG7tq99TzAHJ6WAThsgS3_a3UEJHHgnuPI73ZO-lpYWIQlHDd4fCVPi6NgNOXh35823W-hBRHJXxE=s500-no?authuser=0"
        alt="Foto do perfil"
        className="-mb-2 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Um <span className="underline decoration-[#537FE7]">pouco</span> sobre
          mim
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est pariatur
          eum voluptatum asperiores perferendis eligendi nesciunt! Cupiditate
          qui porro quaerat eius repellat nesciunt saepe nostrum sequi
          perferendis minima ullam, recusandae praesentium est quo pariatur
          voluptates aliquid, distinctio accusamus id. Nisi repellendus
          provident non blanditiis ducimus illum impedit sit! Adipisci, sit.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
