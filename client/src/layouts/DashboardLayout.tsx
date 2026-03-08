import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Share2,
  PlusCircle,
  Zap,
  Settings,
  LogOut,
  Cpu,
  Menu,
  X,
  Bell,
  User
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuItems = [
    { name: 'Վահանակ', icon: <LayoutDashboard className="h-5 w-5" />, path: '/dashboard' },
    { name: 'Աշխատանքային հոսքեր', icon: <Share2 className="h-5 w-5" />, path: '/dashboard/workflows' },
    { name: 'Ստեղծել նոր հոսք', icon: <PlusCircle className="h-5 w-5" />, path: '/dashboard/workflows/new' },
    { name: 'Ինտեգրումներ', icon: <Zap className="h-5 w-5" />, path: '/dashboard/integrations' },
    { name: 'Կարգավորումներ', icon: <Settings className="h-5 w-5" />, path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col z-30`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 overflow-hidden">
            <Cpu className="h-8 w-8 text-primary-500 flex-shrink-0" />
            {isSidebarOpen && <span className="text-xl font-bold whitespace-nowrap tracking-tight">Agent<span className="text-primary-500">TAU</span></span>}
          </Link>
        </div>

        <nav className="flex-grow mt-6 px-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-xl transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {isSidebarOpen && <span className="ml-4 font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-4 font-medium">Ելք</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-20">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-slate-500 hover:text-primary-600 focus:outline-none"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="flex items-center space-x-6">
            <button className="relative text-slate-500 hover:text-primary-600">
               <Bell className="h-6 w-6" />
               <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-200 pl-6">
               <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-900">{user?.fullName || 'Օգտատեր'}</p>
                  <p className="text-xs text-slate-500">Անվճար պլան</p>
               </div>
               <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <User className="h-6 w-6" />
               </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow overflow-auto p-8">
           {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
