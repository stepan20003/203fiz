import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Database, Globe, Layers, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Ավտոմատացրեք Ձեր աշխատանքը <span className="text-primary-600">մեկ հարթակում</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Ստեղծեք աշխատանքային հոսքեր առանց ծրագրավորման: Միացրեք Ձեր սիրելի գործիքները և խնայեք ժամանակ:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Սկսել հիմա
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/features"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all flex items-center"
            >
              Դիտել հնարավորությունները
            </Link>
          </div>
        </div>

        {/* Hero Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ինչո՞ւ ընտրել մեզ</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Մեր հարթակը տալիս է Ձեզ բոլոր գործիքները՝ բարդ գործընթացները պարզեցնելու համար:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Արագ ավտոմատացում</h3>
              <p className="text-slate-600 text-sm">
                Ստեղծեք ավտոմատ աշխատանքային հոսքեր րոպեների ընթացքում՝ առանց կոդ գրելու:
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg w-fit mb-6">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Տվյալների ինտեգրում</h3>
              <p className="text-slate-600 text-sm">
                Միացրեք Google Sheets-ը, PostgreSQL-ը և այլ տվյալների բազաներ հեշտությամբ:
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-3 rounded-lg w-fit mb-6">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Համաշխարհային կապ</h3>
              <p className="text-slate-600 text-sm">
                Օգտագործեք Webhooks և HTTP Request-ներ ցանկացած արտաքին ծառայության հետ կապվելու համար:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workflow Preview (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Տեսողական խմբագիր</h2>
                <ul className="space-y-4">
                  {[
                    'Քաշել և թողնել (Drag & Drop) ֆունկցիոնալություն',
                    'Բարդ տրամաբանության աջակցություն',
                    'Իրական ժամանակում ստուգում',
                    'Ավելի քան 100 ինտեգրումներ'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                {/* Visual Representation of Workflow nodes */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg border-l-4 border-blue-500">
                      <span className="text-white text-sm font-medium">Գործարկիչ (Webhook)</span>
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="w-px h-8 bg-slate-600 mx-auto"></div>
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg border-l-4 border-purple-500">
                      <span className="text-white text-sm font-medium">HTTP Հարցում</span>
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    </div>
                    <div className="w-px h-8 bg-slate-600 mx-auto"></div>
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg border-l-4 border-green-500">
                      <span className="text-white text-sm font-medium">Էլ. հասցե ուղարկել</span>
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Պատրա՞ստ եք ավտոմատացնել Ձեր աշխատանքը:</h2>
          <p className="text-primary-100 text-lg mb-10">
            Միացեք հազարավոր մասնագետների, ովքեր արդեն խնայում են ժամանակ մեր հարթակի միջոցով:
          </p>
          <Link
            to="/register"
            className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Սկսել անվճար
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
