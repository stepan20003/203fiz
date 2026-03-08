import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Կապ մեզ հետ</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ունեք հարցե՞ր կամ առաջարկնե՞ր: Մենք սիրով կպատասխանենք Ձեզ:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
           <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start">
                 <div className="bg-primary-100 p-4 rounded-2xl mr-6 text-primary-600">
                    <Mail className="h-6 w-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-1">Էլ. հասցե</h4>
                    <p className="text-slate-500">support@agenttau.com</p>
                    <p className="text-slate-500">info@agenttau.com</p>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="bg-primary-100 p-4 rounded-2xl mr-6 text-primary-600">
                    <Phone className="h-6 w-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-1">Հեռախոս</h4>
                    <p className="text-slate-500">+374 (10) 00-00-00</p>
                    <p className="text-slate-500">+374 (99) 00-00-00</p>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="bg-primary-100 p-4 rounded-2xl mr-6 text-primary-600">
                    <MapPin className="h-6 w-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 mb-1">Հասցե</h4>
                    <p className="text-slate-500">Արշակունյաց պողոտա 1, Երևան, Հայաստան</p>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-2">
              <form className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-2">Անուն</label>
                       <input
                         type="text"
                         className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                         placeholder="Ձեր անունը"
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-2">Էլ. հասցե</label>
                       <input
                         type="email"
                         className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                         placeholder="Ձեր էլ. հասցեն"
                       />
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Թեմա</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Հարցի թեման"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Հաղորդագրություն</label>
                    <textarea
                      rows={5}
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Ինչպե՞ս կարող ենք օգնել Ձեզ:"
                    ></textarea>
                 </div>
                 <button className="bg-primary-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg flex items-center justify-center w-full md:w-auto">
                    Ուղարկել
                    <Send className="ml-2 h-5 w-5" />
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
