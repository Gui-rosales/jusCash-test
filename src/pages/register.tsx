import { Link } from 'react-router-dom';
import JusCashLogo from '../assets/logo-juscash';

export default function Register() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/5 h-3/4 rounded-lg shadow-xl p-5 flex flex-col">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <form className="mt-8 flex-grow flex flex-col items-center gap-5">
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Seu nome completo: <span className="text-red-600">*</span>
            </label>
            <input
              className="border-[1px] border-secondaryDarker p-2"
              type="text"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Seu nome completo: <span className="text-red-600">*</span>
            </label>
            <input
              className="border-[1px] border-secondaryDarker p-2"
              type="text"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Seu nome completo: <span className="text-red-600">*</span>
            </label>
            <input
              className="border-[1px] border-secondaryDarker p-2"
              type="text"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Seu nome completo: <span className="text-red-600">*</span>
            </label>
            <input
              className="border-[1px] border-secondaryDarker p-2"
              type="text"
            />
          </fieldset>
          <fieldset className="w-4/5 flex justify-end items-center">
            <Link
              to={'/login'}
              className=""
            >
              Já possui uma conta? Fazer login
            </Link>
          </fieldset>
          <fieldset className="mt-5 w-4/5 flex justify-center items-center">
            <button className="py-2 px-6 bg-primary rounded-lg min-w-fit">
              Criar conta
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
