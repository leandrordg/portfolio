import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lj251004@gmail.com?subject=${formData.subject}&body=Olá, meu nome é ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Eu tenho o que voce precisa.{' '}
          <span className="underline decoration-[#537FE7]/50">
            Vamos conversar.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#537FE7] animate-pulse" />
            <p className="text-2xl">+55 (19) 99127-9634</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#537FE7] animate-pulse" />
            <p className="text-2xl">lj251004@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#537FE7] animate-pulse" />
            <p className="text-2xl">São Paulo, Brasil</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              type="text"
              placeholder="Digite o seu nome"
              className="contactInput"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="E-mail"
              className="contactInput"
            />
          </div>

          <input
            {...register('subject')}
            type="text"
            placeholder="Assunto"
            className="contactInput"
          />

          <textarea
            {...register('message')}
            placeholder="Mensagem"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#537FE7] hover:bg-[#537FE7]/70 transition py-5 px-10 rounded-md font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
