
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // 热区样式，您可以微调 top, left, width, height 来精确定位
  const hotspotStyle: React.CSSProperties = {
    position: 'absolute',
    cursor: 'pointer',
    // backgroundColor: 'rgba(255, 0, 0, 0.3)', // 打开此行可看到热区位置，方便调试
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <img src="/images/诺华IMMU-h5_2.jpg" alt="Home Page" style={{ width: '100%', height: '100%' }} />

      {/* 大会日程按钮热区 */}
      <div
        onClick={() => navigate('/schedule/main')}
        style={{ ...hotspotStyle, top: '30%', left: '20%', width: '60%', height: '10%' }}
      ></div>

      {/* 晚宴日程按钮热区 */}
      <div
        onClick={() => navigate('/schedule/dinner')}
        style={{ ...hotspotStyle, top: '45%', left: '20%', width: '60%', height: '10%' }}
      ></div>

      {/* 分会场日程按钮热区 */}
      <div
        onClick={() => navigate('/schedule/breakout')}
        style={{ ...hotspotStyle, top: '60%', left: '20%', width: '60%', height: '10%' }}
      ></div>

      {/* 云相册按钮热区 */}
      <div
        onClick={() => navigate('/photo-album')}
        style={{ ...hotspotStyle, top: '75%', left: '20%', width: '60%', height: '10%' }}
      ></div>
    </div>
  );
};

export default HomePage;
