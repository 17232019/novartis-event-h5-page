import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScheduleMenuPage.css';
import BackButton from '../components/BackButton';

const ScheduleMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <div className="page-wrap">
      <img
        src={process.env.PUBLIC_URL + '/images/诺华IMMU-h5_4五个按钮纵向（会议日程、7.10全体大会、7.11可善挺品牌日及培训日、7.11茁乐品牌日及培训日、7.12英雄演武场）4.jpg'}
        alt="会议日程菜单背景"
        className="schedule-menu-bg"
      />
      {/* 会议日程标题按钮 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-btn2.png'}
        alt="会议日程"
        className={`schedule-btn-img abs-title${activeBtn === 'title' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('title')}
        onMouseUp={() => setActiveBtn(null)}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ pointerEvents: 'none' }}
      />
      {/* 7.10 全体大会 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-all-btn.png'}
        alt="7.10 全体大会"
        className={`schedule-btn-img abs-all${activeBtn === 'all' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('all')}
        onMouseUp={() => { setActiveBtn(null); navigate('/schedule/7-10'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 7.11 可善挺品牌日及培训日 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-keshanting-btn.png'}
        alt="7.11 可善挺品牌日及培训日"
        className={`schedule-btn-img abs-keshanting${activeBtn === 'keshanting' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('keshanting')}
        onMouseUp={() => { setActiveBtn(null); navigate('/schedule/7-11-kst'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 7.11 茁乐品牌日及培训日 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-zhuole-btn.png'}
        alt="7.11 茁乐品牌日及培训日"
        className={`schedule-btn-img abs-zhuole${activeBtn === 'zhuole' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('zhuole')}
        onMouseUp={() => { setActiveBtn(null); navigate('/schedule/7-11-zl'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      {/* 7.12 英雄演武场 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/schedule-hero-btn.png'}
        alt="7.12 英雄演武场"
        className={`schedule-btn-img abs-hero${activeBtn === 'hero' ? ' active' : ''}`}
        onMouseDown={() => setActiveBtn('hero')}
        onMouseUp={() => { setActiveBtn(null); navigate('/schedule/7-12'); }}
        onMouseLeave={() => setActiveBtn(null)}
        style={{ cursor: 'pointer' }}
      />
      <BackButton />
    </div>
  );
};

export default ScheduleMenuPage;
