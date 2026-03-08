import React from 'react';
import { Users, Target, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Մեր մասին</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Մենք հայկական տեխնոլոգիական ընկերություն ենք, որի նպատակն է հասանելի դարձնել ավտոմատացումը բոլորի համար:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
           <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Մեր առաքելությունը</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Մենք հավատում ենք, որ մարդիկ պետք է կենտրոնանան ստեղծագործական աշխատանքի վրա, այլ ոչ թե միօրինակ գործողությունների: Մեր հարթակը օգնում է ազատվել ձանձրալի աշխատանքից՝ վստահելով այն ավտոմատ համակարգերին:
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-slate-50 rounded-2xl">
                    <Users className="h-8 w-8 text-primary-500 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Թիմային աշխատանք</h4>
                    <p className="text-sm text-slate-500">Միասնական ուժերով ստեղծում ենք լավագույնը:</p>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl">
                    <Target className="h-8 w-8 text-primary-500 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Ճշգրտություն</h4>
                    <p className="text-sm text-slate-500">Յուրաքանչյուր մանրուք կարևոր է մեզ համար:</p>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-slate-900/40"></div>
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white text-center">
           <h2 className="text-3xl lg:text-4xl font-bold mb-12">Մեր արժեքները</h2>
           <div className="grid md:grid-cols-3 gap-12">
              <div>
                 <Rocket className="h-12 w-12 text-primary-500 mx-auto mb-6" />
                 <h3 className="text-xl font-bold mb-4">Նորարարություն</h3>
                 <p className="text-slate-400">Միշտ փնտրում ենք նոր և ավելի արդյունավետ լուծումներ:</p>
              </div>
              <div>
                 <Award className="h-12 w-12 text-primary-500 mx-auto mb-6" />
                 <h3 className="text-xl font-bold mb-4">Որակ</h3>
                 <p className="text-slate-400">Բարձրագույն ստանդարտներ ծրագրային ապահովման մեջ:</p>
              </div>
              <div>
                 <Users className="h-12 w-12 text-primary-500 mx-auto mb-6" />
                 <h3 className="text-xl font-bold mb-4">Հասանելիություն</h3>
                 <p className="text-slate-400">Պարզ և հասկանալի ինտերֆեյս յուրաքանչյուրի համար:</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
