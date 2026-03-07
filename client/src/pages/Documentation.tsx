import React from 'react';
import { Search, Book, Code, Terminal, HelpCircle } from 'lucide-react';

const Documentation = () => {
  const categories = [
    {
       title: 'Սկսել հիմա',
       description: 'Ինչպես արագ ստեղծել Ձեր առաջին աշխատանքային հոսքը:',
       icon: <Book className="h-6 w-6 text-primary-500" />,
       links: ['Տեղադրում', 'Առաջին քայլեր', 'Հիմնական հասկացություններ']
    },
    {
       title: 'Մոդուլների ցանկ',
       description: 'Յուրաքանչյուր մոդուլի մանրամասն նկարագրությունը և կարգավորումները:',
       icon: <Code className="h-6 w-6 text-blue-500" />,
       links: ['Triggers (Գործարկիչներ)', 'Actions (Գործողություններ)', 'Filters (Ֆիլտրեր)']
    },
    {
       title: 'API և Ինտեգրում',
       description: 'Աշխատանք արտաքին համակարգերի և API-ների հետ:',
       icon: <Terminal className="h-6 w-6 text-purple-500" />,
       links: ['Authentication', 'Webhooks API', 'Custom Nodes']
    },
    {
       title: 'Անսարքությունների վերացում',
       description: 'Հաճախ տրվող հարցեր և խնդիրների լուծումներ:',
       icon: <HelpCircle className="h-6 w-6 text-green-500" />,
       links: ['Debugging', 'Logs', 'Error handling']
    }
  ];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
           <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Փաստաթղթեր</h1>
              <p className="text-xl text-slate-600">Ամեն ինչ Ձեր աշխատանքը ավտոմատացնելու համար:</p>
           </div>
           <div className="mt-8 md:mt-0 relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Որոնել..."
                className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
              />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {categories.map((category, index) => (
             <div key={index} className="p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm inline-block">
                   {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                   {category.links.map((link, i) => (
                     <li key={i} className="flex items-center group cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-primary-600 font-medium group-hover:underline">{link}</span>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
