import React, { useState } from 'react';
import AlarmDashboard from './components/AlarmDashboard';
import Checklists from './components/Checklists';
import Maintenance from './components/Maintenance';
import Troubleshooting from './components/Troubleshooting';
import Assets from './components/Assets';
import { Activity, CheckSquare, Wrench, AlertTriangle, Layers, Flame, Save } from 'lucide-react';

type Tab = 'alarm' | 'checklists' | 'maintenance' | 'troubleshooting' | 'assets';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('alarm');
  const [boilerName, setBoilerName] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveBoilerName = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const tabs = [
    { id: 'alarm', label: 'Cảnh Báo', icon: Activity },
    { id: 'checklists', label: 'Checklist', icon: CheckSquare },
    { id: 'maintenance', label: 'Bảo Trì', icon: Wrench },
    { id: 'troubleshooting', label: 'Sự Cố', icon: AlertTriangle },
    { id: 'assets', label: 'Thiết Bị', icon: Layers },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'alarm': return <AlarmDashboard />;
      case 'checklists': return <Checklists />;
      case 'maintenance': return <Maintenance />;
      case 'troubleshooting': return <Troubleshooting />;
      case 'assets': return <Assets />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen print:h-auto overflow-hidden print:overflow-visible font-sans bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 print:hidden">
        <div className="p-6 bg-slate-950 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-xl">
            B
          </div>
          <div className="leading-tight">
            <span className="block font-bold text-sm tracking-wide">BIOMAX</span>
            <span className="text-[10px] text-slate-400">BOILER SYSTEM v4.2</span>
          </div>
        </div>
        
        <nav className="flex-1 mt-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`w-full flex items-center px-6 py-3 text-sm transition-colors ${
                  isActive 
                    ? 'border-r-4 border-orange-500 bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {tab.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 text-xs text-slate-500 border-t border-slate-800">
          Trạm vận hành: Nhà máy 01<br />
          Người trực: Admin
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden print:overflow-visible">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm print:hidden">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-800 uppercase tracking-tight">
                Giám sát:
              </h1>
              <input 
                type="text" 
                value={boilerName}
                onChange={(e) => setBoilerName(e.target.value)}
                placeholder="Nhập tên lò hơi..."
                className="text-base font-bold text-orange-600 border-b-2 border-slate-200 bg-transparent focus:border-orange-500 focus:outline-none w-48 placeholder:text-slate-300 placeholder:font-normal"
              />
              <button 
                onClick={handleSaveBoilerName}
                className="bg-orange-100 hover:bg-orange-200 text-orange-700 p-1.5 rounded transition-colors"
                title="Lưu tên lò hơi"
              >
                <Save className="w-5 h-5" />
              </button>
              {isSaved && <span className="text-xs font-bold text-green-600">Đã lưu!</span>}
            </div>
            <span className="status-pill bg-green-100 text-green-700 border border-green-200 ml-4">
              ĐANG VẬN HÀNH
            </span>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded text-sm font-medium flex items-center gap-2">
              📷 Chụp Ảnh Báo Cáo
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2">
              📱 QUÉT MÃ QR
            </button>
          </div>
        </header>

        <div className="p-6 flex-1 overflow-y-auto print:overflow-visible print:p-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
