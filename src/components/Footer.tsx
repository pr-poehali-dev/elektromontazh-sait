
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Электрик в Колпино</h3>
            <p className="text-sm">Профессиональные электромонтажные работы в Колпино и Колпинском районе.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/services/electrical-wiring" className="text-sm hover:underline">Электропроводка</Link></li>
              <li><Link to="/services/electrical-panels" className="text-sm hover:underline">Электрощиты</Link></li>
              <li><Link to="/services/lighting" className="text-sm hover:underline">Освещение</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Связаться</h3>
            <p className="text-sm">Телефон: 8 950 030 88 30</p>
            <p className="text-sm">WhatsApp, Telegram: 8 950 030 88 30</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-sm text-center">
          <p>© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
