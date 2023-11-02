import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { JusCashLogoWhite } from '../../assets/logo-juscash';
import { IoReorderThree } from 'react-icons/io5';
import { useState } from 'react';

const options = [
  {
    path: '/',
    description: 'home',
    icon: <AiOutlineHome />,
  },
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
  const [collapsedMenuState, setCollapsedMenuState] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex">
      <aside
        className={`h-full w-52 bg-secondaryDarker flex flex-col gap-5 p-3 items-center max-[500px]:w-24 ${
          collapsedMenuState === true && 'hidden'
        }`}
      >
        <Link
          to={'/'}
          className="w-4/5 mb-5"
        >
          <JusCashLogoWhite properties="w-full" />
        </Link>

        {options.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            className="w-4/5 max-[500px]:w-full max-[500px]:text-[0.9rem] flex justify-around items-center text-white bg-primary p-2 rounded-sm transition-all ease-in-out hover:scale-105 duration-200"
          >
            <span className="max-[500px]:hidden">{option.icon}</span>
            {option.description}
          </Link>
        ))}
      </aside>
      <div>
        <button
          onClick={() => setCollapsedMenuState(!collapsedMenuState)}
          className={`text-primary absolute bottom-10 left-6 sm:hidden ${
            collapsedMenuState === true && 'top-4 left-2 text-primary flex'
          }`}
        >
          <IoReorderThree className="w-12 h-12" />
        </button>
      </div>
      <main className="flex-grow h-full">
        <Outlet />
      </main>
    </div>
  );
}
