import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNewId } from '../services/idService';

export default function Menu({
  StablishmentName = 'Nome do estabelecimento',
  Links = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(Links);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-900 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <div
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
                >
                  {StablishmentName}
                </div>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div
                className={
                  'lg:flex flex-grow items-center' +
                  (menuOpen ? ' flex' : ' hidden')
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  {Links.map((link) => {
                    console.log(link);
                    return (
                      <li className="nav-item" key={getNewId()}>
                        <NavLink
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          activeClassName="text-yellow-300"
                          to={link.linkTo}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
