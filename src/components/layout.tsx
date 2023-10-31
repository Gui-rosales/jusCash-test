import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import JusCashLogo from '../assets/logo-juscash';

const options = [
  {
    path: '/register',
    description: 'Criar usuário',
    icon: <AiOutlineUserAdd />,
  },
  {
    path: '/dashboard',
    description: 'Dashboard',
    icon: <HiOutlineSquares2X2 />,
  },
];

export default function Layout() {
  return (
    <div className="w-full h-screen flex">
      <aside className="h-full w-52 bg-secondaryDarker flex flex-col gap-5 p-3 items-center">
        <Link
          to={'/'}
          className="w-4/5 mb-5"
        >
          <JusCashLogo properties="w-full" />
        </Link>

        {options.map((option) => (
          <Link
            to={option.path}
            className="w-4/5 flex justify-around items-center text-white bg-primary p-2 rounded-sm transition-all ease-in-out hover:scale-105 duration-200"
          >
            {option.icon}
            {option.description}
          </Link>
        ))}
      </aside>
      <main className="flex-grow h-full">
        <Outlet />
      </main>
    </div>
  );
}
