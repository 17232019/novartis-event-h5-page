import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenuPage.css';

const MainMenuPage: React.FC = () => {
  const navigate = useNavigate();
  // 按钮按下状态
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <div className="main-menu-page">
      <img
        src={process.env.PUBLIC_URL + '/images/诺华IMMU-h5_4五个按钮纵向（会议日程、7.10全体大会、7.11可善挺品牌日及培训日、7.11茁乐品牌日及培训日、7.12英雄演武场）4.jpg'}
        alt="主菜单背景"
        className="menu-bg"
      />
      {/* 大会信息按钮 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/info-btn.png'}
        alt="大会信息"
        className={`menu-btn-img abs-info${activeBtn === 'info' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('info')}
        onMouseUp={() => { setActiveBtn(null); navigate('/info'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 会议日程按钮 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-btn.png'}
        alt="会议日程"
        className={`menu-btn-img abs-schedule${activeBtn === 'schedule' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('schedule')}
        onMouseUp={() => { setActiveBtn(null); navigate('/schedule-menu'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 照片直播按钮 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/album-btn.png'}
        alt="照片直播"
        className={`menu-btn-img abs-album${activeBtn === 'album' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('album')}
        onMouseUp={() => { setActiveBtn(null); navigate('/album'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 返回按钮 */}
      <button className="back-btn" onClick={() => window.history.back()}>
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
          <circle cx="42" cy="42" r="42" fill="#FFD700"/>
          <path d="M49.5 27L36 42L49.5 57" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default MainMenuPage;
