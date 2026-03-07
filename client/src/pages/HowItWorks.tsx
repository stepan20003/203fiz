import React from 'react';
import { MousePointer2, Settings2, PlayCircle, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: '1. Ընտրեք Գործարկիչը (Trigger)',
      description: 'Որոշեք, թե որ իրադարձությունն է սկսելու Ձեր աշխատանքային հոսքը: Օրինակ՝ նոր HTTP հարցում կամ նոր տող Google Sheets-ում:',
      icon: <MousePointer2 className="h-8 w-8 text-blue-500" />
    },
    {
      title: '2. Ավելացրեք Մոդուլներ (Nodes)',
      description: 'Քաշեք և թողեք անհրաժեշտ մոդուլները կտավի վրա: Յուրաքանչյուր մոդուլ կատարում է կոնկրետ գործողություն՝ տվյալների մշակում կամ ծանուցում:',
      icon: <Settings2 className="h-8 w-8 text-purple-500" />
    },
    {
      title: '3. Կարգավորեք Տրամաբանությունը',
      description: 'Միացրեք մոդուլները գծերով՝ սահմանելով տվյալների հոսքի հերթականությունը: Կարող եք ավելացնել պայմաններ և ֆիլտրեր:',
      icon: <Share2 className="h-8 w-8 text-green-500" />
    },
    {
      title: '4. Գործարկեք և Հետևեք',
      description: 'Ակտիվացրեք աշխատանքային հոսքը: Այն կաշխատի ավտոմատ՝ 24/7, իսկ Դուք կկարողանաք տեսնել կատարման պատմությունը մեր վահանակում:',
      icon: <PlayCircle className="h-8 w-8 text-primary-500" />
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Ինչպես է աշխատում</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Պարզ 4 քայլով Դուք կարող եք ստեղծել ցանկացած բարդության ավտոմատացում:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col space-y-6">
              <div className="bg-slate-50 p-4 rounded-2xl w-fit">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-600 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto shadow-2xl">
           <h2 className="text-3xl font-bold mb-6 italic">«Այնքան պարզ է, որ նույնիսկ ոչ մասնագետները կարող են կառուցել բարդ համակարգեր:»</h2>
           <p className="text-primary-100">– Մեր օգտատերերից մեկը</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
