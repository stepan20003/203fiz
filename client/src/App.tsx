import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import WorkflowEditor from './pages/WorkflowEditor';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/features" element={<PublicLayout><Features /></PublicLayout>} />
        <Route path="/how-it-works" element={<PublicLayout><HowItWorks /></PublicLayout>} />
        <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />
        <Route path="/docs" element={<PublicLayout><Documentation /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* Auth Routes without common Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard/workflows" element={<DashboardLayout><div className="text-2xl font-bold">Աշխատանքային հոսքեր</div></DashboardLayout>} />
        <Route path="/dashboard/workflows/new" element={<DashboardLayout><WorkflowEditor /></DashboardLayout>} />
        <Route path="/dashboard/integrations" element={<DashboardLayout><div className="text-2xl font-bold">Ինտեգրումներ</div></DashboardLayout>} />
        <Route path="/dashboard/settings" element={<DashboardLayout><div className="text-2xl font-bold">Կարգավորումներ</div></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
