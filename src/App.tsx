import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import MainMenuPage from './pages/MainMenuPage';
import ScheduleMenuPage from './pages/ScheduleMenuPage';
import InfoPage from './pages/InfoPage';
import SchedulePage from './pages/SchedulePage';
import PhotoAlbumPage from './pages/PhotoAlbumPage';
import './App.css';

// 私有路由，保护需要登录才能访问的页面
const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* 以下为受保护的路由 */}
        <Route element={<PrivateRoutes />}>
          <Route path="/main-menu" element={<MainMenuPage />} />
          <Route path="/schedule-menu" element={<ScheduleMenuPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/schedule/:type" element={<SchedulePage />} />
          <Route path="/album" element={<PhotoAlbumPage />} />
          <Route path="/menu" element={<MainMenuPage />} />
        </Route>

        {/* 如果访问任何不存在的路径，可以重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
