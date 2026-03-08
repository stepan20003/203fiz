import React, { useEffect, useState } from 'react';
import { Plus, Share2, Activity, Zap, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchWorkflows(token);
  }, [navigate]);

  const fetchWorkflows = async (token: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/workflows', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setWorkflows(data);
      }
    } catch (error) {
      console.error('Error fetching workflows:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { name: 'Ակտիվ հոսքեր', value: workflows.filter(w => w.is_active).length.toString(), icon: <Share2 className="h-6 w-6" />, color: 'bg-blue-500' },
    { name: 'Կատարումներ (այս ամիս)', value: '0', icon: <Activity className="h-6 w-6" />, color: 'bg-purple-500' },
    { name: 'Ինտեգրումներ', value: '0', icon: <Zap className="h-6 w-6" />, color: 'bg-amber-500' },
  ];

  if (!user) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Բարի գալուստ, {user.fullName || 'Օգտատեր'}</h1>
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
              {loading ? (
                <tr><td colSpan={4} className="px-6 py-4 text-center text-slate-500">Բեռնում...</td></tr>
              ) : workflows.length === 0 ? (
                <tr><td colSpan={4} className="px-6 py-4 text-center text-slate-500">Աշխատանքային հոսքեր չեն գտնվել:</td></tr>
              ) : (
                workflows.map((workflow) => (
                  <tr
                    key={workflow.id}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/dashboard/workflows/${workflow.id}`)}
                  >
                    <td className="px-6 py-4 font-bold text-slate-900">{workflow.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        workflow.is_active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {workflow.is_active ? 'Ակտիվ' : 'Պասիվ'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {workflow.created_at ? new Date(workflow.created_at).toLocaleDateString('hy-AM') : '-'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary-600 font-bold text-sm transition-colors">Խմբագրել</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
