import Header from "../../components/AdminHeader";
import Sidebar from "../../components/AdminSidebar";
import Footer from "../../components/AdminFooter";

export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
