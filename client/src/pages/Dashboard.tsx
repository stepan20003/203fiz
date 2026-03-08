import React from 'react';
import { Plus, Share2, Activity, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { name: 'Ակտիվ հոսքեր', value: '12', icon: <Share2 className="h-6 w-6" />, color: 'bg-blue-500' },
    { name: 'Կատարումներ (այս ամիս)', value: '1,284', icon: <Activity className="h-6 w-6" />, color: 'bg-purple-500' },
    { name: 'Ինտեգրումներ', value: '8', icon: <Zap className="h-6 w-6" />, color: 'bg-amber-500' },
  ];

  const recentWorkflows = [
    { id: 1, name: 'Shopify-ից Telegram ծանուցում', status: 'Ակտիվ', lastRun: '2 րոպե առաջ' },
    { id: 2, name: 'Google Sheets տվյալների սինխրոնիզացիա', status: 'Ակտիվ', lastRun: '1 ժամ առաջ' },
    { id: 3, name: 'Webhook տվյալների մշակում', status: 'Պասիվ', lastRun: 'երեկ' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Բարի գալուստ, Արմեն</h1>
          <p className="text-slate-500 text-sm">Ահա թե ինչ է կատարվում Ձեր ավտոմատացումների հետ այսօր:</p>
        </div>
        <Link
          to="/dashboard/workflows/new"
          className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center shadow-lg w-fit"
        >
          <Plus className="mr-2 h-5 w-5" />
          Նոր աշխատանքային հոսք
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                {stat.icon}
              </div>
              <span className="text-green-500 text-sm font-bold flex items-center">
                +12% <ArrowUpRight className="ml-1 h-4 w-4" />
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.name}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-slate-900 text-lg">Վերջին աշխատանքային հոսքերը</h2>
          <button className="text-primary-600 text-sm font-bold hover:underline">Դիտել բոլորը</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Անվանում</th>
                <th className="px-6 py-4 font-semibold">Կարգավիճակ</th>
                <th className="px-6 py-4 font-semibold">Վերջին գործարկում</th>
                <th className="px-6 py-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentWorkflows.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 font-bold text-slate-900">{workflow.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      workflow.status === 'Ակտիվ' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {workflow.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{workflow.lastRun}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary-600 font-bold text-sm transition-colors">Խմբագրել</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
