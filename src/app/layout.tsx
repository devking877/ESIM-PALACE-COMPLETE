'use client'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "@/components/elements/common/Footer";
import { ToastContainer } from 'react-toastify';
import useParticipantStore from "@/store/use-participant";
import { SideBar } from "@/components/elements/SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { is_sidebar } = useParticipantStore((state) => state);
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-screen" style={is_sidebar?{overflow: 'hidden'}: {overflow: 'auto'}}>
        <ToastContainer />
        {children}
        <Footer />
        {is_sidebar?<SideBar/>:''}
      </body>
    </html>
  );
};

export default Layout;