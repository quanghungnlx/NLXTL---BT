import { Equipment, Troubleshooting, ChecklistCategory } from './types';

export const equipmentList: Equipment[] = [
  {
    id: 'e1',
    category: 'Thân lò hơi',
    items: ['Buồng đốt', 'Ống vách chất lỏng', 'Trống hơi (bao hơi)', 'Ống lửa / ống nước']
  },
  {
    id: 'e2',
    category: 'Hệ thống đốt nhiên liệu',
    items: ['Đầu đốt (Gas/Dầu)', 'Ghi xích (Than/Biomass)', 'Hệ thống cấp nhiên liệu']
  },
  {
    id: 'e3',
    category: 'Hệ thống gió - khói',
    items: ['Quạt cấp gió tươi (F.D Fan)', 'Quạt hút khói (I.D Fan)', 'Bộ sấy không khí', 'Ống khói']
  },
  {
    id: 'e4',
    category: 'Hệ thống nước cấp',
    items: ['Bơm nước cao áp', 'Bộ hâm nước (Economizer)', 'Bình khử khí', 'Hệ thống xử lý nước (Làm mềm/RO)']
  },
  {
    id: 'e5',
    category: 'Hệ thống an toàn & đo lường',
    items: ['Van an toàn', 'Kính thủy hiển thị mức nước', 'Cảm biến áp suất', 'Cảm biến nhiệt độ']
  }
];

export const troubleshootingGuide: Troubleshooting[] = [
  {
    issue: 'Cạn nước nghiêm trọng',
    cause: 'Bơm hỏng, van cấp nước kẹt, hỏng cảm biến mức nước.',
    action: 'Tuyệt đối không cấp nước vào ngay (gây nổ lò). Lập tức ngắt nhiên liệu, tắt đầu đốt, đóng van hơi chính và để lò nguội tự nhiên.'
  },
  {
    issue: 'Áp suất tăng quá mức',
    cause: 'Van an toàn bị kẹt, hệ thống tự động ngắt đầu đốt bị hỏng.',
    action: 'Giảm tải/ngắt đầu đốt thủ công. Kiểm tra van an toàn.'
  },
  {
    issue: 'Khói đen dày đặc',
    cause: 'Thiếu gió, nhiên liệu đốt không hết, béc phun dầu bị bẩn.',
    action: 'Kiểm tra lại quạt cấp gió, vệ sinh béc phun hoặc điều chỉnh lại tỷ lệ gió/nhiên liệu.'
  },
  {
    issue: 'Nhiệt độ khói thải quá cao',
    cause: 'Lò bị bám cáu cặn dày hoặc bám mụi than nhiều, làm giảm khả năng trao đổi nhiệt.',
    action: 'Lên lịch dừng lò để vệ sinh mặt trong (cáu nước) và mặt ngoài (mụi than) của ống.'
  }
];

export const maintenanceSchedules = {
  monthly: [
    'Kiểm tra và vệ sinh bộ lọc nhiên liệu, lọc nước.',
    'Kiểm tra độ rơ, bôi trơn vòng bi của quạt hút, quạt thổi và bơm nước.',
    'Kiểm tra hoạt động của các van an toàn (thử nghiệm giật tay).',
    'Kiểm tra hệ thống điện điều khiển và các đầu nối cảm biến.'
  ],
  yearly: [
    'Vệ sinh cáu cặn: Tẩy rửa cáu cặn bên trong ống vách, trống hơi bằng hóa chất chuyên dụng.',
    'Vệ sinh đường khói: Quét dọn mụi than ở các ống lửa/ống nước phía đường khói để tăng hiệu suất truyền nhiệt.',
    'Kiểm định an toàn: Phối hợp với cơ quan chức năng kiểm định lại van an toàn, áp kế và thử áp lực thủy lực (nếu cần).',
    'Thay thế vật liệu tiêu hao: Thay thế các gioăng phớt bị lão hóa, gạch chịu lửa bị nứt vỡ trong buồng đốt.'
  ]
};

export const dailyChecklist: ChecklistCategory[] = [
  {
    title: 'Kiểm tra chung',
    items: [
      { id: 'dc1', text: 'Mức nước trong bình trống hơi (không cạn/quá đầy)' },
      { id: 'dc2', text: 'Chất lượng nước (độ pH, TDS)' },
      { id: 'dc3', text: 'Áp suất làm việc hiện tại, nhiệt độ khói thải' },
      { id: 'dc4', text: 'Đầu đốt/buồng đốt (ngọn lửa, mụi than)' },
      { id: 'dc5', text: 'Thực hiện xả đáy (Blowdown) định kỳ' },
      { id: 'dc6', text: 'Kiểm tra rò rỉ (van, mặt bích, đường ống)' }
    ]
  },
  {
    title: 'Dạng 1: Lò Ống Nước (Biomass công suất lớn)',
    items: [
      { id: 'wt1', text: 'Kiểm tra vách ướt (Vách màng nước) xem có bám xỉ không' },
      { id: 'wt2', text: 'Hệ thống thổi tro (Soot blower) vận hành tốt' },
      { id: 'wt3', text: 'Kiểm tra rò rỉ bộ hâm nước (Economizer)' }
    ]
  },
  {
    title: 'Dạng 2: Lò Ống Lửa (Tầng sôi / Ghi xích nhỏ)',
    items: [
      { id: 'ft1', text: 'Kiểm tra hộp khói trước/sau không rò rỉ khói, tro' },
      { id: 'ft2', text: 'Kiểm tra xả đáy định kỳ cặn lắng' }
    ]
  },
  {
    title: 'Cụm thiết bị đặc thù Biomass',
    items: [
      { id: 'bm1', text: 'Hệ thống cấp liệu (kẹt liệu, độ căng xích, van quay)' },
      { id: 'bm2', text: 'Ghi lò (thanh ghi, bôi trơn, tốc độ ghi)' },
      { id: 'bm3', text: 'Hệ thống cào xỉ (kẹt vít tải, mực nước bể dập xỉ)' },
      { id: 'bm4', text: 'Bộ lọc bụi (chênh áp lọc túi, van giũ bụi)' }
    ]
  }
];

export const assetChecklistData = [
  {
    category: 'LÒ HƠI',
    groups: [
      {
        name: '1. Bản thể nồi hơi',
        items: [
          { name: 'Van an toàn.', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Mặt bích của cụm điện cực.', action: 'Vệ sinh điện cực', frequency: '4 tháng/ 1 lần' },
          { name: 'Cụm van xả đáy kính thủy.', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Cửa balong', action: 'Kiểm tra', frequency: '4 tháng/ 1 lần' },
          { name: 'Vệ sinh balong', action: 'Vệ sinh balong, ống sinh hơi, ống chia nước', frequency: '4 tháng/ 1 lần' },
          { name: 'Van xả khí (xả air).', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Van xả nhanh,', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Van xả chậm của balong.', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Van xả đáy ống góp.', action: 'Kiểm tra hoặc sửa chữa', frequency: '4 tháng/ 1 lần' },
          { name: 'Tường lò xung quanh, đầu lò.', action: 'Kiểm tra', frequency: '4 tháng/ 1 lần' },
          { name: 'Các khoang đóng mở cấp gió.', action: 'Kiểm tra', frequency: '4 tháng/ 1 lần' },
        ]
      },
      {
        name: '2. Hệ thống ghi đẩy ghi lò',
        items: [
          { name: 'Motor', action: 'Kẹp dòng, kiểm tra', frequency: '1 tháng/ lần' },
          { name: 'Motor', action: 'Tra dầu GLP90', frequency: '9 tháng / 1 lần' },
          { name: 'Hộp truyền động', action: 'Thay dầu GLP90', frequency: '9 tháng / 1 lần' },
          { name: 'Tay biên', action: 'Kiểm tra, bơm mỡ', frequency: '1 tháng/ 1 lần' },
          { name: 'Hệ thống truyền động ghi lò', action: 'Kiểm tra khi dừng lò', frequency: '4 tháng/ 1 lần' },
          { name: 'Dây curoa', action: 'Kiểm tra thay thế', frequency: '6 tháng/ 1 lần' },
        ]
      },
      {
        name: '3. Hệ thống cấp liệu đầu lò, Vit tro gầm lò',
        items: [
          { name: 'Motor', action: 'Vệ sinh kiểm tra', frequency: 'Hằng ngày' },
          { name: 'Vít', action: 'Vệ sinh kiểm tra', frequency: 'Hằng ngày' },
          { name: 'Xích', action: 'Kiểm tra thay thế', frequency: '4 tháng/ 1 lần' },
          { name: 'Nhông, then', action: 'Kiểm tra thay thế', frequency: '4 tháng/ 1 lần' },
          { name: 'Bu lông', action: 'Kiểm tra thay thế', frequency: '4 tháng/ 1 lần' },
          { name: 'Gối đỡ', action: 'Kiểm tra bơm mỡ', frequency: '2 tuần/ 1 lần' },
        ]
      },
      {
        name: '4. Băng tải liệu',
        items: [
          { name: 'Băng tải liệu', action: 'Kiểm tra', frequency: '4 tháng/ 1 lần' },
          { name: 'Con lăn', action: 'Kiểm tra, tra mỡ,', frequency: '4 tháng/ 1 lần' },
        ]
      },
      {
        name: '5. Hệ thống bơm nước',
        items: [
          { name: 'Hệ thống bơm nước', action: 'Kiểm tra, có thể sửa chữa', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '6. Bộ hâm nước',
        items: [
          { name: 'Bộ hâm nước', action: 'Kiểm tra, có thể sửa chữa', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '7. Bộ sấy không khí',
        items: [
          { name: 'Bộ sấy không khí', action: 'Kiểm tra, có thể sửa chữa', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '8. Các bồn nước',
        items: [
          { name: 'Các bồn nước', action: 'Vệ sinh kiểm tra', frequency: '4 tháng/1 lần' },
          { name: 'Các bồn nước', action: 'Kiểm tra điều khiển', frequency: '4 tháng/1 lần' }
        ]
      },
      {
        name: '9. Bộ xử lý nước',
        items: [
          { name: 'Bộ xử lý nước', action: 'Vệ sinh, kiểm tra', frequency: '1 ca / 2 lần' },
          { name: 'Bộ xử lý nước', action: 'Tháo vệ sinh hệ thống', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '10. Quạt hút, Quạt đẩy',
        items: [
          { name: 'Motor', action: 'Tra mỡ vòng bi', frequency: '6 tháng/ 1 lần' },
          { name: 'Cánh quạt', action: 'Kiểm tra', frequency: '4 tháng / 1 lần' },
          { name: 'Bạc đạn ổ đỡ', action: 'Kiểm tra', frequency: '4 tháng / 1 lần' },
          { name: 'Nhớt làm mát', action: 'Thay dầu GLP90', frequency: '9 tháng/ 1 lần' },
          { name: 'Hệ thống chuyền động', action: 'Kiểm tra, thay thế', frequency: '4 tháng/ 1 lần' },
          { name: 'Hệ thống bơm nước làm mát', action: 'Vệ sinh, kiểm tra', frequency: '1 ca/ 1 lần' },
          { name: 'Hệ thống giá đỡ và bu lông', action: 'Vệ sinh, kiểm tra', frequency: '1 ca/ 1 lần' },
        ]
      },
      {
        name: '11. Xyclone',
        items: [
          { name: 'Xyclone', action: 'Vệ sinh kiểm tra', frequency: '1 ca/ 4 lần' }
        ]
      },
      {
        name: '12. Lọc bụi túi',
        items: [
          { name: 'Lọc bụi túi', action: 'Vệ sinh kiểm tra túi', frequency: '4 tháng/ 1 lần' },
          { name: 'Lọc bụi túi', action: 'Kiểm tra hằng ngày', frequency: '1 ca/ 2 lần' },
          { name: 'Lọc bụi túi', action: 'Kiểm tra, sửa chữa', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '13. Máy nén khí',
        items: [
          { name: 'Máy nén khí', action: 'Vệ sinh kiểm tra', frequency: '4 tháng/ 1 lần' },
          { name: 'Màng lọc khí nén, cốc lọc dầu', action: 'Kiểm tra, vệ sinh', frequency: '2 ngày/ 1 lần' },
          { name: 'Máy nén khí', action: 'Thay dầu 40', frequency: '6 tháng/ 1 lần' }
        ]
      },
      {
        name: '14. Các hệ thống khác: đường ống, bình góp....',
        items: [
          { name: 'Các hệ thống khác', action: 'Vệ sinh kiểm tra', frequency: '1 ca / 2 lần' },
          { name: 'Hệ thống cóc ngưng, van trên đường ống, giá đỡ', action: 'Kiểm tra vệ sinh, sửa chữa', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '15. Máy phát điện',
        items: [
          { name: 'Máy phát điện', action: 'Chạy thử', frequency: '1 tuần/ 1 lần' }
        ]
      }
    ]
  },
  {
    category: 'PHÒNG ĐIỀU KHIỂN – HỆ THỐNG PHỤ TRỢ',
    groups: [
      {
        name: '1. Hệ thống tủ điều khiển',
        items: [
          { name: 'Hệ thống tủ điều khiển', action: 'Vệ sinh kiểm tra', frequency: '4 tháng/1 lần' }
        ]
      },
      {
        name: '2. Các máy điều hòa',
        items: [
          { name: 'Các máy điều hòa', action: 'Vệ sinh kiểm tra', frequency: '3 tháng/ 1 lần' }
        ]
      },
      {
        name: '3. Bóng đèn các loại',
        items: [
          { name: 'Bóng đèn các loại', action: 'Vệ sinh kiểm tra', frequency: '6 tháng/ 1 lần' }
        ]
      },
      {
        name: '4. Hệ thống máy bơm PCCC',
        items: [
          { name: 'Hệ thống máy bơm PCCC', action: 'Vệ sinh kiểm tra chạy thử', frequency: '1 tháng / 1 lần' }
        ]
      },
      {
        name: '5. Các tủ điện',
        items: [
          { name: 'Các tủ điện', action: 'Vệ sinh kiểm tra', frequency: '4 tháng/ 1 lần' }
        ]
      },
      {
        name: '6. Hệ thống xư lý nước thải',
        items: [
          { name: 'Hệ thống xư lý nước thải', action: 'Vệ sinh kiểm tra', frequency: '1 ca/ 1 lần' }
        ]
      },
      {
        name: '7. Các máy biến thế',
        items: [
          { name: 'Các máy biến thế', action: 'Vệ sinh, châm dầu', frequency: '1 năm/ 1 lần' }
        ]
      }
    ]
  }
];
