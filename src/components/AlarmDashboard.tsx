import React, { useState } from 'react';
import { AlarmStatus } from '../types';
import { AlertTriangle, AlertCircle, CheckCircle, Bell } from 'lucide-react';

export default function AlarmDashboard() {
  const [tSmoke, setTSmoke] = useState<number>(150);
  const [pChamber, setPChamber] = useState<number>(-20);
  const [tds, setTds] = useState<number>(3000);

  const getTSmokeStatus = (val: number): AlarmStatus => {
    if (val < 170) return { level: 'green', message: 'Hoạt động tốt' };
    if (val <= 220) return { level: 'yellow', message: 'Cảnh báo hiệu suất giảm. Nhắc nhở lên lịch thổi bụi ống lửa/ống nước' };
    return { level: 'red', message: 'Nguy cơ tổn hao nhiệt lượng nghiêm trọng. Kiểm tra ngay hệ thống thổi tro hoặc dừng lò vệ sinh' };
  };

  const getPChamberStatus = (val: number): AlarmStatus => {
    if (val >= -50 && val <= -10) return { level: 'green', message: 'Buồng đốt hút âm tốt' };
    return { level: 'red', message: 'Cảnh báo áp suất buồng đốt chuyển dương. Kiểm tra ngay Quạt hút khói (ID Fan) hoặc bộ lọc bụi túi vải/cyclone bị nghẹt' };
  };

  const getTdsStatus = (val: number): AlarmStatus => {
    if (val <= 3500) return { level: 'green', message: 'Hoạt động tốt' };
    if (val <= 4500) return { level: 'yellow', message: 'Yêu cầu thực hiện xả đáy (Blowdown) liên tục trong 15 giây' };
    return { level: 'red', message: 'Chất lượng nước vượt ngưỡng nguy hiểm. Nguy cơ đóng cặn nhanh. Gọi đội xử lý hóa chất nước cấp' };
  };

  const renderStatusCard = (title: string, val: number, unit: string, status: AlarmStatus) => {
    const isRed = status.level === 'red';
    const isYellow = status.level === 'yellow';
    
    let borderColor = 'border-l-4 border-green-500';
    let statusText = 'Bình Thường';
    let statusColor = 'text-green-600';
    
    if (isRed) {
      borderColor = 'border-l-4 border-red-500';
      statusText = 'Nguy Hiểm';
      statusColor = 'text-red-600';
    } else if (isYellow) {
      borderColor = 'border-l-4 border-yellow-500';
      statusText = 'Cảnh Báo';
      statusColor = 'text-yellow-600';
    }

    return (
      <div className={`card p-4 ${borderColor} flex flex-col gap-3 transition-colors duration-300`}>
        <div className="metric-label">{title}</div>
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold text-slate-800">
            {val} <span className="text-sm font-normal">{unit}</span>
          </span>
          <span className={`${statusColor} text-sm font-bold uppercase`}>{statusText}</span>
        </div>
        <p className={`text-[10px] font-medium mt-1 ${isRed ? 'text-red-700' : isYellow ? 'text-yellow-700' : 'text-emerald-700'}`}>
          {isRed || isYellow ? '⚠️' : '✅'} {status.message}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Thuật toán cảnh báo tự động</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Simulators */}
        <div className="md:col-span-1 space-y-6 card p-6">
          <h3 className="font-bold text-sm text-slate-800 border-b pb-2">NHẬP LIỆU CẢM BIẾN</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nhiệt độ khói thải (°C)</label>
              <input 
                type="range" min="100" max="300" 
                value={tSmoke} onChange={(e) => setTSmoke(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-right text-xs text-gray-500">{tSmoke}°C</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Áp suất buồng đốt (Pa)</label>
              <input 
                type="range" min="-100" max="10" 
                value={pChamber} onChange={(e) => setPChamber(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-right text-xs text-gray-500">{pChamber} Pa</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chỉ số TDS (mg/L)</label>
              <input 
                type="range" min="2000" max="6000" step="100"
                value={tds} onChange={(e) => setTds(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-right text-xs text-gray-500">{tds} mg/L</div>
            </div>
          </div>
        </div>

        {/* Dashboards */}
        <div className="md:col-span-2 space-y-4">
          {renderStatusCard('Nhiệt độ khói thải (T_smoke)', tSmoke, '°C', getTSmokeStatus(tSmoke))}
          {renderStatusCard('Áp suất buồng đốt (P_chamber)', pChamber, 'Pa', getPChamberStatus(pChamber))}
          {renderStatusCard('Chất lượng nước cấp (TDS)', tds, 'mg/L', getTdsStatus(tds))}
        </div>
      </div>
    </div>
  );
}
