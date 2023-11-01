import React from 'react';
import AddLeadModal from '../../components/modals/addLeadModal';
import LeadInformationModal from '../../components/modals/leadInformationModal';
import JusCashLogo from '../../../assets/logo-juscash';

export default function Dashboard() {
  function onDragFinish(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function onDragBeggining(e: React.DragEvent<HTMLLIElement>, id: string) {
    console.log(e);
    e.dataTransfer.setData('id', id);
    return;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/4 h-4/5 rounded-lg shadow-xl p-5 flex flex-col">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <AddLeadModal />
        <div className="w-full mt-4 flex-grow">
          <div className="w-full h-full grid grid-cols-3 gap-2">
            <div className="w-full h-full p-2 rounded-lg border-[1px]">
              <h3>Cliente Potencial</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                  onDragBeggining={(event) =>
                    onDragBeggining(event, 'guilherme')
                  }
                />
                {/* <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                  onDragBeggining={onDragBeggining}
                />
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                  onDragBeggining={onDragBeggining}
                /> */}
                <li
                  draggable
                  className="w-full p-3 rounded-lg shadow-lg flex items-center"
                >
                  item 1
                </li>
              </ul>
            </div>
            <div
              onDragOver={(event) => onDragFinish(event)}
              // onDrop={(event) => }
              className="w-full h-full p-2 rounded-lg border-[1px]"
            >
              <h3>Dados confirmados</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                  onDragBeggining={(event) =>
                    onDragBeggining(event, 'guilherme')
                  }
                />
                {/* <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                />
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                /> */}
                <li
                  draggable
                  className="w-full p-3 rounded-lg shadow-lg flex items-center"
                >
                  item 1
                </li>
              </ul>
            </div>
            <div className="w-full h-full p-2 rounded-lg border-[1px]">
              <h3>Análise do Lead</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                  onDragBeggining={(event) =>
                    onDragBeggining(event, 'guilherme')
                  }
                />
                {/* <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                />
                <LeadInformationModal
                  fullname="Guilherme Rosales"
                  email="guilherme@gmail.com"
                  phone="(65) 99999-8000"
                />
                <li
                  draggable
                  className="w-full p-3 rounded-lg shadow-lg flex items-center"
                >
                  item 1
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
