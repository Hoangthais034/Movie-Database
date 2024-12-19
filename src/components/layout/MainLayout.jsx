import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

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