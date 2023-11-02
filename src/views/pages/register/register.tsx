import { Link } from 'react-router-dom';
import JusCashLogo from '../../../assets/logo-juscash';
import { useRegisterController } from './useRegisterController';
import { Input } from '../../components/input';
import { PasswordInput } from '../../components/passwordInput';

export default function Register() {
  const { register, errors, handleSubmit } = useRegisterController();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/5 h-3/4 rounded-lg shadow-xl p-5 flex flex-col max-[500px]:w-[90%]">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex-grow flex flex-col items-center gap-5"
        >
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Seu nome completo: <span className="text-red-600">*</span>
            </label>
            <Input
              error={errors.name?.message}
              {...register('name')}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              E-mail: <span className="text-red-600">*</span>
            </label>
            <Input
              error={errors.email?.message}
              {...register('email')}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Senha: <span className="text-red-600">*</span>
            </label>
            <PasswordInput
              //type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1 w-4/5">
            <label className="text-secondaryDarker">
              Confirme sua senha: <span className="text-red-600">*</span>
            </label>
            <PasswordInput
              error={errors.passwordConfirmation?.message}
              {...register('passwordConfirmation')}
            />
          </fieldset>
          <fieldset className="w-4/5 flex justify-end items-center">
            <Link
              to={'/'}
              className="text-secondaryDarker"
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
