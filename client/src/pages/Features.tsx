import React from 'react';
import { Mail, MessageSquare, Table, Globe, Code, Cloud, Server, ShieldCheck } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      title: 'Webhooks (Վեբհուքներ)',
      description: 'Միացրեք ցանկացած արտաքին համակարգ, որն աջակցում է HTTP հարցումներ:',
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Էլ. հասցե (Email)',
      description: 'Ավտոմատ ուղարկեք ծանուցումներ և նամակներ Ձեր աշխատանքային հոսքերից:',
      icon: <Mail className="h-6 w-6 text-red-600" />
    },
    {
      title: 'Telegram Բոտ',
      description: 'Կառավարեք Ձեր աշխատանքը և ստացեք ծանուցումներ Telegram-ի միջոցով:',
      icon: <MessageSquare className="h-6 w-6 text-sky-500" />
    },
    {
      title: 'Google Sheets',
      description: 'Կարդացեք և գրեք տվյալներ Google-ի աղյուսակներում առանց դժվարության:',
      icon: <Table className="h-6 w-6 text-green-600" />
    },
    {
      title: 'HTTP Հարցումներ',
      description: 'Լիարժեք վերահսկողություն GET, POST, PUT և DELETE հարցումների նկատմամբ:',
      icon: <Code className="h-6 w-6 text-slate-600" />
    },
    {
      title: 'Ամպային պահեստավորում',
      description: 'Ձեր բոլոր աշխատանքային հոսքերը ապահով պահվում են մեր ամպային համակարգում:',
      icon: <Cloud className="h-6 w-6 text-indigo-600" />
    },
    {
      title: 'Սեփական Սերվեր',
      description: 'Հնարավորություն տեղադրելու հարթակը Ձեր սեփական սերվերների վրա:',
      icon: <Server className="h-6 w-6 text-slate-700" />
    },
    {
      title: 'Անվտանգություն',
      description: 'Բոլոր տվյալները կոդավորված են և պաշտպանված բարձրակարգ ստանդարտներով:',
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Հզոր Հնարավորություններ</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Մենք առաջարկում ենք ճկուն գործիքներ, որոնք թույլ են տալիս ավտոմատացնել ցանկացած գործընթաց:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm group-hover:bg-slate-50 transition-colors inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual representation - Node System detail */}
      <section className="mt-32 py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Ինտուիտիվ Մոդուլային Համակարգ</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Յուրաքանչյուր ավտոմատացում կազմված է "մոդուլներից" (Nodes): Դուք պարզապես միացնում եք դրանք՝ կառուցելով Ձեր տրամաբանությունը:
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Գործարկիչներ (Triggers)</h4>
                    <p className="text-slate-400 text-sm">Որոշեք, թե երբ պետք է սկսվի աշխատանքային հոսքը:</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Գործողություններ (Actions)</h4>
                    <p className="text-slate-400 text-sm">Ինչ պետք է արվի տվյալների հետ:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
               {/* Illustration of nodes and connections */}
               <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl">
                  <div className="flex justify-between items-center space-x-4">
                    <div className="bg-blue-600/20 border border-blue-500/50 p-4 rounded-xl text-center flex-1">
                       <p className="text-blue-400 font-bold mb-1">Webhook</p>
                       <div className="text-[10px] text-blue-200/50">HTTP POST /webhook</div>
                    </div>
                    <div className="h-px bg-slate-700 flex-1"></div>
                    <div className="bg-purple-600/20 border border-purple-500/50 p-4 rounded-xl text-center flex-1">
                       <p className="text-purple-400 font-bold mb-1">Filter</p>
                       <div className="text-[10px] text-purple-200/50">price &gt; 1000</div>
                    </div>
                    <div className="h-px bg-slate-700 flex-1"></div>
                    <div className="bg-green-600/20 border border-green-500/50 p-4 rounded-xl text-center flex-1">
                       <p className="text-green-400 font-bold mb-1">Telegram</p>
                       <div className="text-[10px] text-green-200/50">Send Alert</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle = ({ className, ...props }: any) => (
  <svg
    {...props}
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export default Features;
