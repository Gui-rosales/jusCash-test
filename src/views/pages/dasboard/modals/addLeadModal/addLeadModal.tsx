import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { useAddLeadModalController } from './useAddLeadModalController';
import { Input } from '../../../../components/input';

export default function AddLeadModal() {
  const {
    register,
    errors,
    handleSubmit,
    modalState,
    closeModal,
    openModal,
    handleCheckboxCheck,
    onChangeAllOptionsInputCheckbox,
    allOptionsMarked,
  } = useAddLeadModalController();

  return (
    <>
      <div className="w-full mt-4 flex justify-end items-center">
        <button
          onClick={openModal}
          className="bg-secondary text-white px-3 py-2 flex items-center justify-center gap-2 rounded-md"
        >
          <AiOutlinePlus /> Novo Lead
        </button>
      </div>
      <Transition show={modalState}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div
              className="fixed inset-0 bg-black/30"
              aria-hidden="true"
            />
          </Transition.Child>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            as={Fragment}
          >
            <div className="fixed inset-0 w-full h-screen flex justify-center items-center">
              <div
                className={`bg-white w-4/5 md:w-2/5 rounded-xl z-20 min-h-fit p-3`}
              >
                <Dialog.Panel className="w-full h-full">
                  <div className="w-full h-full flex flex-col">
                    <div className="text-black h-16 flex justify-between items-center p-4">
                      <h2 className="h-4/5">Novo lead</h2>
                      <button
                        className="group h-full rounded-[50%] hover:bg-slate-300 p-2 flex items-center justify-center transition-colors ease-in-out duration-300"
                        onClick={closeModal}
                      >
                        <IconContext.Provider
                          value={{
                            className: 'fill-black',
                          }}
                        >
                          <React.Fragment>
                            {' '}
                            <AiOutlineClose />
                          </React.Fragment>
                        </IconContext.Provider>
                      </button>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="mt-2 flex-grow flex flex-col items-center gap-3"
                    >
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label
                          htmlFor="name"
                          className="text-secondaryDarker"
                        >
                          Nome Completo: <span className="text-red-600">*</span>
                        </label>
                        <Input
                          {...register('name')}
                          error={errors.name?.message}
                          type="text"
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label
                          htmlFor="email"
                          className="text-secondaryDarker"
                        >
                          E-mail: <span className="text-red-600">*</span>
                        </label>
                        <Input
                          {...register('email')}
                          error={errors.email?.message}
                          type="text"
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label
                          htmlFor="phone"
                          className="text-secondaryDarker"
                        >
                          Telefone: <span className="text-red-600">*</span>
                        </label>
                        <Input
                          {...register('phone')}
                          error={errors.phone?.message}
                          type="text"
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <p>Oportunidades</p>
                        <span>{errors.options?.message}</span>
                        <fieldset className="flex gap-1">
                          <input
                            type="checkbox"
                            value="true"
                            id="checkAll"
                            onChange={(event) =>
                              onChangeAllOptionsInputCheckbox(event)
                            }
                          />
                          <p>Todos</p>
                        </fieldset>
                        <fieldset className="flex gap-1">
                          <input
                            type="checkbox"
                            value="Honorários Sucumbenciais"
                            onChange={(event) => handleCheckboxCheck(event)}
                            //{...register('options')}

                            checked={allOptionsMarked}
                            name="options"
                          />
                          <p>Honorários Sucumbenciais</p>
                        </fieldset>
                        <fieldset className="flex gap-1">
                          <input
                            type="checkbox"
                            value="Honorários Contratuais"
                            onChange={(event) => handleCheckboxCheck(event)}
                            // {...register('options')}
                            checked={allOptionsMarked}
                            name="options"
                          />
                          <p>Honorários Contratuais</p>
                        </fieldset>
                        <fieldset className="flex gap-1">
                          <input
                            type="checkbox"
                            value="Honorários Dativos"
                            onChange={(event) => handleCheckboxCheck(event)}
                            // {...register('options')}
                            checked={allOptionsMarked}
                            name="options"
                          />
                          <p>Honorários Dativos</p>
                        </fieldset>
                        <fieldset className="flex gap-1">
                          <input
                            type="checkbox"
                            value="Créditos do Autor"
                            onChange={(event) => handleCheckboxCheck(event)}
                            //   {...register('options')}
                            checked={allOptionsMarked}
                            name="options"
                          />
                          <p>Créditos do Autor</p>
                        </fieldset>
                      </fieldset>
                      <fieldset className="flex justify-end items-center gap-6 w-4/5">
                        <button
                          onClick={closeModal}
                          type="button"
                          className="w-20 flex items-center justify-center text-black py-1 px-4 border-[1px] border-secondaryDarker rounded-sm"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="w-20 flex items-center justify-center text-white py-1 px-4 bg-secondary rounded-sm"
                        >
                          salvar
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
