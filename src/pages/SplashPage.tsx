import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashPage.css';

const SplashPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-page" onClick={() => navigate('/login')} style={{cursor: 'pointer'}}>
      <img
        src={process.env.PUBLIC_URL + '/images/诺华IMMU-h5_首页1.jpg'}
        alt="大会封面"
        className="splash-bg"
      />
    </div>
  );
};

export default SplashPage;