import AddLeadModal from './modals/addLeadModal/addLeadModal';
import LeadInformationModal from './modals/leadInformationModal/leadInformationModal';
import JusCashLogo from '../../../assets/logo-juscash';
import { useDashboardController } from './useDashboardController';

export default function Dashboard() {
  const { leads, onDragBeggining, onDragOverFn, onDropFn } =
    useDashboardController();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/4 h-4/5 rounded-lg shadow-xl p-5 flex flex-col max-[500px]:w-[90%]">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <AddLeadModal />
        <div className="w-full mt-4 flex-grow">
          <div className="w-full h-full grid grid-cols-3 gap-2">
            <div
              onDragOver={(event) => onDragOverFn(event)}
              onDrop={(event) => onDropFn(event, 'client_in_potential')}
              className="w-full h-full p-2 rounded-lg border-[1px]"
            >
              <h3>Cliente Potencial</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                {leads &&
                  leads.map((lead, index) => {
                    if (lead.category === 'client_in_potential') {
                      return (
                        <LeadInformationModal
                          key={index}
                          fullname={lead.name}
                          email={lead.email}
                          phone={lead.phone}
                          options={lead.options}
                          onDragBeggining={(event) =>
                            onDragBeggining(event, lead.name, lead.category)
                          }
                        />
                      );
                    }
                  })}
              </ul>
            </div>
            <div
              onDragOver={(event) => onDragOverFn(event)}
              onDrop={(event) => onDropFn(event, 'data_confirmed')}
              className="w-full h-full p-2 rounded-lg border-[1px]"
            >
              <h3>Dados confirmados</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                {leads &&
                  leads.map((lead, index) => {
                    if (lead.category === 'data_confirmed') {
                      return (
                        <LeadInformationModal
                          key={index}
                          fullname={lead.name}
                          email={lead.email}
                          phone={lead.phone}
                          options={lead.options}
                          onDragBeggining={(event) =>
                            onDragBeggining(event, lead.name, lead.category)
                          }
                        />
                      );
                    }
                  })}
              </ul>
            </div>
            <div
              onDragOver={(event) => onDragOverFn(event)}
              onDrop={(event) => onDropFn(event, 'lead_analysis')}
              className="w-full h-full p-2 rounded-lg border-[1px]"
            >
              <h3>Análise do Lead</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                {leads &&
                  leads.map((lead, index) => {
                    if (lead.category === 'lead_analysis') {
                      return (
                        <LeadInformationModal
                          key={index}
                          fullname={lead.name}
                          email={lead.email}
                          phone={lead.phone}
                          options={lead.options}
                          onDragBeggining={(event) =>
                            onDragBeggining(event, lead.name, lead.category)
                          }
                        />
                      );
                    }
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
