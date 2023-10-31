import JusCashLogo from '../assets/logo-juscash';
import AddLeadModal from '../components/modals/addLeadModal';

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/4 h-4/5 rounded-lg shadow-xl p-5 flex flex-col">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <AddLeadModal />
        {/* <div className="w-full mt-4 flex justify-end items-center">
          <button className="bg-secondary text-white px-3 py-2 flex items-center justify-center gap-2">
            <AiOutlinePlus /> Novo Lead
          </button>
        </div> */}
        <div className="w-full mt-4 flex-grow">
          <div className="w-full h-full grid grid-cols-3 gap-2">
            <div>
              <h3>Cliente Potencial</h3>
            </div>
            <div>
              <h3>Dados Confirmados</h3>
            </div>
            <div>
              <h3>Analise do Lead</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
