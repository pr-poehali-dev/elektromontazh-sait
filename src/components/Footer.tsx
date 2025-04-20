
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-4">Электрик в Колпино</h4>
            <h5 className="text-lg mt-0 mb-2">
              Качественные электромонтажные работы в Колпино и Колпинском районе
            </h5>
            <div className="mt-6">
              <p className="text-sm">Телефон: 8 950 030 88 30</p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2">
                  Услуги
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/services/electrical-wiring" className="hover:text-gray-200 block pb-2 text-sm">Электропроводка</Link>
                  </li>
                  <li>
                    <Link to="/services/electrical-panels" className="hover:text-gray-200 block pb-2 text-sm">Электрощиты</Link>
                  </li>
                  <li>
                    <Link to="/services/lighting" className="hover:text-gray-200 block pb-2 text-sm">Освещение</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm font-semibold mb-2">
                  Информация
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/contacts" className="hover:text-gray-200 block pb-2 text-sm">Контакты</Link>
                  </li>
                  <li>
                    <Link to="/links" className="hover:text-gray-200 block pb-2 text-sm">Мои сайты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary-foreground/20" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Электрик Колпино © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
