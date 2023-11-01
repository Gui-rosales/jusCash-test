import JusCashLogo from '../../../assets/logo-juscash';
import { useHomeController } from './useHomeController';

export default function Home() {
  const { users } = useHomeController();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/4 h-4/5 rounded-lg shadow-xl p-5 flex flex-col">
        <JusCashLogo properties="w-4/5 h-10 mx-auto" />
        <div className="w-full mt-4 flex-grow">
          <div className="w-full h-full gap-2">
            <div className="w-full h-full m-auto p-2 rounded-lg border-[1px]">
              <h3>Usuários cadastrados</h3>
              <ul className="flex-grow flex flex-col items-center p-2 gap-2">
                {users ? (
                  users.map((user, index) => (
                    <li
                      key={index}
                      className="w-full p-3 rounded-lg shadow-lg flex items-center"
                    >
                      {user.name}
                    </li>
                  ))
                ) : (
                  <li className="w-full p-3 rounded-lg shadow-lg flex items-center">
                    Nenhum Usuário cadastrado
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
