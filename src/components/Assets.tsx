import React, { useState } from 'react';
import { assetChecklistData } from '../data';
import { Layers, QrCode, CheckSquare, Square, Camera, Upload, Save, FileText } from 'lucide-react';

export default function Assets() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [maintenanceDates, setMaintenanceDates] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [checkerName, setCheckerName] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveChecker = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const handleDateChange = (id: string, date: string) => {
    setMaintenanceDates(prev => ({ ...prev, [id]: date }));
  };

  const handleNoteChange = (id: string, note: string) => {
    setNotes(prev => ({ ...prev, [id]: note }));
  };

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages(prev => ({
          ...prev,
          [id]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Danh Mục Thiết Bị Cần Quản Lý</h2>
            <p className="text-sm text-gray-500">Quản lý tài sản (Asset Management) toàn diện.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-wrap justify-end print:hidden">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Người kiểm tra:</label>
            <input 
              type="text" 
              value={checkerName}
              onChange={(e) => setCheckerName(e.target.value)}
              placeholder="Nhập tên..."
              className="text-sm border-none bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1 w-32 md:w-40 font-medium text-slate-800 transition-colors"
            />
            <button 
              onClick={handleSaveChecker}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 p-1.5 rounded transition-colors"
              title="Lưu người kiểm tra"
            >
              <Save className="w-4 h-4" />
            </button>
            {isSaved && <span className="text-xs font-bold text-green-600">Đã lưu!</span>}
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <QrCode className="w-4 h-4" />
            Quét mã QR
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <FileText className="w-4 h-4" />
            Xuất PDF
          </button>
        </div>
      </div>

      <div className="pt-2">
        <h3 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-tight">Chi Tiết Bảo Trì Theo Danh Mục</h3>
        
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 w-16 text-center">STT</th>
                  <th className="px-6 py-4">Tên Thiết Bị</th>
                  <th className="px-6 py-4">Các Hoạt Động Bảo Trì</th>
                  <th className="px-6 py-4">Thời Gian</th>
                  <th className="px-6 py-4">Ngày BT Gần Nhất</th>
                  <th className="px-6 py-4 text-center w-28">Hình Ảnh</th>
                  <th className="px-6 py-4 text-center w-24">Hoàn Thành</th>
                  <th className="px-6 py-4">Ghi Chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assetChecklistData.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-slate-100">
                      <td colSpan={8} className="px-6 py-3 font-bold text-slate-800 uppercase text-xs">
                        {category.category}
                      </td>
                    </tr>
                    {category.groups.map((group) => (
                      <React.Fragment key={`${category.category}-${group.name}`}>
                        <tr className="bg-slate-50/50">
                          <td colSpan={8} className="px-6 py-2 font-bold text-slate-700 text-xs text-blue-600">
                            {group.name}
                          </td>
                        </tr>
                        {group.items.map((item, itemIdx) => {
                          const uniqueId = `${category.category}-${group.name}-${itemIdx}`;
                          const isChecked = checkedItems.has(uniqueId);
                          return (
                            <tr key={itemIdx} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-3 text-center text-slate-500 font-mono text-xs">{itemIdx + 1}</td>
                              <td className="px-6 py-3 font-medium text-slate-800">{item.name}</td>
                              <td className="px-6 py-3 text-slate-600">{item.action}</td>
                              <td className="px-6 py-3 text-slate-600">
                                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                                  {item.frequency}
                                </span>
                              </td>
                              <td className="px-6 py-3">
                                <input 
                                  type="date"
                                  value={maintenanceDates[uniqueId] || ''}
                                  onChange={(e) => handleDateChange(uniqueId, e.target.value)}
                                  className="text-xs bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                              </td>
                              <td className="px-6 py-3 text-center">
                                {uploadedImages[uniqueId] ? (
                                  <div className="relative group inline-block">
                                    <img src={uploadedImages[uniqueId]} alt="Uploaded" className="w-8 h-8 object-cover rounded cursor-pointer border border-slate-200" />
                                    <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded cursor-pointer">
                                      <Upload className="w-3 h-3 text-white" />
                                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(uniqueId, e)} />
                                    </label>
                                  </div>
                                ) : (
                                  <label className="cursor-pointer text-slate-400 hover:text-blue-500 transition-colors inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-50">
                                    <Camera className="w-4 h-4" />
                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(uniqueId, e)} />
                                  </label>
                                )}
                              </td>
                              <td className="px-6 py-3 text-center">
                                <button onClick={() => toggleCheck(uniqueId)} className="focus:outline-none flex justify-center w-full">
                                  {isChecked ? (
                                    <CheckSquare className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                                  )}
                                </button>
                              </td>
                              <td className="px-6 py-3">
                                <input
                                  type="text"
                                  placeholder="Ghi chú..."
                                  value={notes[uniqueId] || ''}
                                  onChange={(e) => handleNoteChange(uniqueId, e.target.value)}
                                  className="text-xs bg-white border border-slate-200 rounded px-2 py-1 w-full text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
