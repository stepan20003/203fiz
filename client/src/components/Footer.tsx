import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-bold text-slate-900">Agent<span className="text-primary-600">TAU</span></span>
            </Link>
            <p className="text-slate-500 text-sm">
              Ավտոմատացրեք Ձեր աշխատանքը մեկ հարթակում: Ստեղծեք աշխատանքային հոսքեր առանց ծրագրավորման:
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Հարթակ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-slate-500 hover:text-primary-600">Հնարավորություններ</Link></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-primary-600">Գներ</Link></li>
              <li><Link to="/how-it-works" className="text-slate-500 hover:text-primary-600">Ինչպես է աշխատում</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Ռեսուրսներ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs" className="text-slate-500 hover:text-primary-600">Փաստաթղթեր</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-primary-600">Կապ</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-primary-600">Մեր մասին</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Հետևեք մեզ</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-600"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-600"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-600"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} AgentTAU: Բոլոր իրավունքները պաշտպանված են:</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-600">Գաղտնիության քաղաքականություն</a>
            <a href="#" className="hover:text-primary-600">Օգտագործման պայմաններ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
