import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';

interface LeadData {
  fullname: string;
  email: string;
  phone: string;
  options: string[];
  onDragBeggining(event: React.DragEvent<HTMLLIElement>): void;
}

export default function LeadInformationModal(data: LeadData) {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <>
      <li
        onDragStart={(event) => data.onDragBeggining(event)}
        onClick={() => setModalState(true)}
        draggable
        className="w-full p-3 rounded-lg shadow-lg flex items-center hover:cursor-pointer max-[500px]:text-[0.8rem]"
      >
        {data.fullname}
      </li>

      <Transition show={modalState}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setModalState}
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
                      <h2 className="h-4/5">Lead</h2>
                      <button
                        className="group h-full rounded-[50%] hover:bg-slate-300 p-2 flex items-center justify-center transition-colors ease-in-out duration-300"
                        onClick={() => setModalState(false)}
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
                    <form className="mt-2 flex-grow flex flex-col items-center gap-3">
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label className="text-secondaryDarker">
                          Seu nome completo:{' '}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border-[1px] border-secondaryDarker p-2"
                          type="text"
                          placeholder={data.fullname}
                          disabled
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label className="text-secondaryDarker">
                          E-mail: <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border-[1px] border-secondaryDarker p-2"
                          type="text"
                          placeholder={data.email}
                          disabled
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label className="text-secondaryDarker">
                          Telefone: <span className="text-red-600">*</span>
                        </label>
                        <input
                          className="border-[1px] border-secondaryDarker p-2"
                          type="text"
                          placeholder={data.phone}
                          disabled
                        />
                      </fieldset>
                      <fieldset className="flex flex-col gap-1 w-4/5">
                        <label htmlFor="">Oportunidades</label>
                        {data.options.map((oportunity, index) => (
                          <div key={index}>
                            <input
                              type="checkbox"
                              id={oportunity}
                              name={oportunity}
                              value={oportunity}
                              checked
                              readOnly
                            />
                            <label>{oportunity}</label>
                          </div>
                        ))}
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
