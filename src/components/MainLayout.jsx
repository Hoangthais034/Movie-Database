import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
} 