import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {
  CreateLeadParams,
  createLeadFn,
} from '../../../../../app/services/leadsService';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  options: z.array(z.string()),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const oportunitiesOptions: string[] = [
  'Honorários Sucumbenciais',
  'Honorários Contratuais',
  'Honorários Dativos',
  'Créditos do Autor',
];

export function useAddLeadModalController() {
  const [modalState, setModalState] = useState<boolean>(false);
  const [allOptionsMarked, setAllOptionsMarked] = useState<boolean | undefined>(
    undefined
  );
  const [arrayOfOptions, setArrayOfOptions] = useState<Array<string>>([]);
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: 'client_in_potential',
    },
  });
  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  const handleSubmit = hookFormSubmit((data: CreateLeadParams) => {
    arrayOfOptions ? (data.options = arrayOfOptions) : (data.options = ['']);
    createLeadFn(data);
    window.location.reload();
  });

  function handleCheckboxCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked === true) {
      //lógica para adicionar os dados no array
      setArrayOfOptions((prev) => [...prev, event.target.value]);
      setValue('options', arrayOfOptions);
    } else {
      //lógica para retirar os dados do array
      const tempArray = arrayOfOptions;
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === event.target.value) {
          tempArray.splice(i);
          setArrayOfOptions(tempArray);
          return setValue('options', arrayOfOptions);
        }
      }
    }
  }

  function onChangeAllOptionsInputCheckbox(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.checked === true) {
      setAllOptionsMarked(true);
      setArrayOfOptions(oportunitiesOptions);
      return setValue('options', arrayOfOptions);
    }
    setAllOptionsMarked(undefined);
    setArrayOfOptions([]);
    setValue('options', []);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Usuário cadastrado com sucesso!');
      reset();
      setModalState(false);
    }
  }, [isSubmitSuccessful, reset]);

  return {
    register,
    errors,
    handleSubmit,
    modalState,
    closeModal,
    openModal,
    allOptionsMarked,
    setAllOptionsMarked,
    handleCheckboxCheck,
    onChangeAllOptionsInputCheckbox,
  };
}
