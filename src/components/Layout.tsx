import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Receipt, FileText, Globe, RefreshCw, Bell, LogOut, User, Wifi } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

export default function Layout() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user: userData } }) => {
      setUser(userData);
    });

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">PJB TRANZ</h2>
                <p className="text-sm text-gray-600">Welcome back, ODirector</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Wifi className="w-4 h-4 text-green-500" />
              <span>Network Connected</span>
            </div>

            <div className="text-sm text-gray-600">{formatTime(currentTime)}</div>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200 px-6">
        <div className="flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'nav-tab-active' : ''}`
            }
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'nav-tab-active' : ''}`
            }
          >
            <Receipt className="w-5 h-5" />
            <span>Transactions</span>
          </NavLink>

          <NavLink
            to="/invoices"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'nav-tab-active' : ''}`
            }
          >
            <FileText className="w-5 h-5" />
            <span>Invoices</span>
          </NavLink>

          <NavLink
            to="/countries"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'nav-tab-active' : ''}`
            }
          >
            <Globe className="w-5 h-5" />
            <span>Countries</span>
          </NavLink>

          <NavLink
            to="/converter"
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'nav-tab-active' : ''}`
            }
          >
            <RefreshCw className="w-5 h-5" />
            <span>Converter</span>
          </NavLink>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
