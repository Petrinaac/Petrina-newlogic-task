import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function List() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveItem('Moje objednávky');
        break;
      case '/invoice':
        setActiveItem('Faktury');
        break;
      case '/user':
        setActiveItem('Nastavení účtu');
        break;
      default:
        setActiveItem('');
    }
  }, [location.pathname]);

  return (
    <div className="box bg-[#ffffff] rounded-md p-8 2xl:w-auto w-full mb-10">
      <div className="name mb-5">
        <div className="text-xl font-bold text-center">Daniil Filatov</div>
        <div className="text-sm text-center text-[#737373]">daniil.filatov@newlogic.cz</div>
      </div>
      <div className="list">
        <ul>
          <li className={`${activeItem === 'Moje objednávky' ? 'bg-[#3a83f6]' : 'bg-[#f3f4f6]'} rounded-md`}>
            <Link
              to="/"
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
              <i className={`fa-regular fa-file ${activeItem === 'Moje objednávky' ? 'text-white' : ''}`}></i>
                <span className={`mr-5 ml-2 ${activeItem === 'Moje objednávky' ? 'text-white' : ''}`}>Moje objednávky</span>
              </div>
              <i className={`fa-solid fa-chevron-right ${activeItem === 'Moje objednávky' ? 'text-white' : ''}`}></i>
            </Link>
          </li>
          <li className={`${activeItem === 'Faktury' ? 'bg-[#3a83f6]' : 'bg-[#f3f4f6]'} rounded-md`}>
            <Link
              to="/invoice"
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
              <i className={`fa-regular fa-file-lines ${activeItem === 'Faktury' ? 'text-white' : ''}`}></i>
                <span className={`mr-5 ml-2 ${activeItem === 'Faktury' ? 'text-white' : ''}`}>Faktury</span>
              </div>
              <i className={`fa-solid fa-chevron-right ${activeItem === 'Faktury' ? 'text-white' : ''}`}></i>
            </Link>
          </li>
          <li className="bg-[#f3f4f6]">
            <Link
              to=""
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
                <i className="fa-regular fa-heart"></i>
                <span className="mr-5 ml-2">Seznam přání</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </li>
          <li className="bg-[#f3f4f6]">
            <Link
              to=""
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
                <i className="fa-regular fa-heart"></i>
                <span className="mr-5 ml-2">Slevové kódy</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </li>
          <li className="bg-[#f3f4f6]">
            <Link
              to=""
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
                <i className="fa-regular fa-heart"></i>
                <span className="mr-5 ml-2">Věrnostní program</span>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </li>
          <li className={`${activeItem === 'Nastavení účtu' ? 'bg-[#3a83f6]' : 'bg-[#f3f4f6]'} rounded-md`}>
            <Link
              to="/user"
              className="list-item text-sm font-bold rounded-md p-4 my-3"
            >
              <div>
                <i className={`fa-solid fa-gear ${activeItem === 'Nastavení účtu' ? 'text-white' : ''}`}></i>
                <span className={`mr-5 ml-2 ${activeItem === 'Nastavení účtu' ? 'text-white' : ''}`}>Nastavení účtu</span>
              </div>
              <i className={`fa-solid fa-chevron-right ${activeItem === 'Nastavení účtu' ? 'text-white' : ''}`}></i>
            </Link>
          </li>
          <li>
            <Link to="" className="list-item text-sm font-bold rounded-md p-4 my-3">
              <div>
              <i className="fa-solid fa-door-open"></i><span className="ml-2">Odhlasit se</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;