import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import BackButton from '../components/BackButton';

const LoginPage: React.FC = () => {
  const [workerId, setWorkerId] = useState('');
  const [error, setError] = useState('');
  const [loginBtnActive, setLoginBtnActive] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (/^\d{3}$/.test(workerId)) {
      setError('');
      navigate('/menu');
    } else {
      setError('请输入3位工号（001-999）');
    }
  };

  return (
    <div className="login-page">
      <img
        src={process.env.PUBLIC_URL + '/images/诺华IMMU-h5_工号输入页2.jpg'}
        alt="工号输入背景"
        className="login-bg"
      />
      {/* 工号标签图片 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/id-label-btn.png'}
        alt="工号"
        className="id-label-img"
      />
      {/* 输入框透明叠加在工号图片上 */}
      <input
        id="workerId"
        type="text"
        maxLength={3}
        value={workerId}
        onChange={e => setWorkerId(e.target.value)}
        placeholder="请输入工号"
        className="id-input-on-img"
        autoComplete="off"
      />
      {/* 登录按钮图片 */}
      <img
        src={process.env.PUBLIC_URL + '/images/buttons/4x/login-btn.png'}
        alt="登录"
        className={`login-btn-img${loginBtnActive ? ' active' : ''}`}
        onMouseDown={() => setLoginBtnActive(true)}
        onMouseUp={() => { setLoginBtnActive(false); handleLogin(); }}
        onMouseLeave={() => setLoginBtnActive(false)}
        style={{ cursor: 'pointer' }}
      />
      {error && <div className="error-tip">{error}</div>}
      <BackButton />
    </div>
  );
};

export default LoginPage;