"use client";

export default function Header() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
    };
    return (
        <header className="flex items-center justify-between bg-primary text-white px-6 py-4 shadow-md">
        <div className="text-lg font-bold">Admin Dashboard</div>
        <div className="flex items-center gap-4">
            <span>Welcome, Admin</span>
            <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
            Logout
            </button>
        </div>
        </header>
    );
}

