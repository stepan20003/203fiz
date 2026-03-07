import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Անվճար',
      price: '0',
      description: 'Լավագույնն է սկսնակների համար:',
      features: ['Ամսական 100 կատարում', '3 ակտիվ աշխատանքային հոսք', '7-օրյա կատարման պատմություն', 'Հիմնական մոդուլներ', 'Համայնքային աջակցություն']
    },
    {
      name: 'Մասնագիտական',
      price: '25',
      description: 'Աճող բիզնեսների և մասնագետների համար:',
      features: ['Ամսական 5,000 կատարում', 'Անսահմանափակ աշխատանքային հոսքեր', '30-օրյա կատարման պատմություն', 'Բոլոր պրեմիում մոդուլները', 'Արագ աջակցություն (Priority)'],
      isPopular: true
    },
    {
      name: 'Ձեռնարկություն',
      price: '99',
      description: 'Մեծ թիմերի և բարձր պահանջների համար:',
      features: ['Անսահմանափակ կատարումներ', 'Անսահմանափակ աշխատանքային հոսքեր', 'Անսահմանափակ պատմություն', 'Սեփական սերվերի տեղադրում (On-premise)', '24/7 անձնական աջակցություն']
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Գներ</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ընտրեք Ձեր կարիքներին համապատասխան փաթեթը և սկսեք ավտոմատացնել այսօր:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 rounded-3xl border ${plan.isPopular ? 'border-primary-500 shadow-xl ring-2 ring-primary-500 ring-opacity-10' : 'border-slate-100 shadow-sm'} flex flex-col relative bg-white`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Ամենահայտնի
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl font-extrabold text-slate-900">${plan.price}</span>
                <span className="text-slate-500 ml-2">/ ամիս</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Սկսել հիմա
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
           <div className="flex items-center mb-6 md:mb-0">
              <Info className="h-10 w-10 text-primary-500 mr-6" />
              <div>
                 <h4 className="text-xl font-bold text-slate-900 mb-1">Հարցե՞ր ունեք:</h4>
                 <p className="text-slate-600">Մեր թիմը պատրաստ է օգնել Ձեզ ճիշտ ընտրություն կատարել:</p>
              </div>
           </div>
           <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
              Կապվել մեզ հետ
           </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
