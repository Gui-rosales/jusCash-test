import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateUserParams,
  createUserFn,
} from '../../../app/services/usersService';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const schema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'),
        'A senha deve conter pelo menos 8 caracteres, um caracter especial, um alfanumérico e um numérico'
      ),
    passwordConfirmation: z
      .string()
      .regex(
        new RegExp('(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'),
        'A senha deve conter pelo menos 8 caracteres, um caracter especial, um alfanumérico e um numérico'
      )
      .min(1, { message: 'senha de confirmação é necessária' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'As senhas devem ser iguais',
  });

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit((data: CreateUserParams) => {
    delete data.passwordConfirmation;
    createUserFn(data);
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Usuário cadastrado com sucesso!');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return { register, errors, handleSubmit };
}
