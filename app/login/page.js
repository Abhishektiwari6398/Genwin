"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        const newErrors = { email: !email, password: !password };
        setErrors(newErrors);

        // If any field is invalid, return early
        if (Object.values(newErrors).some((error) => error)) {
        return;
        }

        try {
        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            router.push("/admin");
            //alert("Login successful!");
        } else {
            console.error("Login failed:", data.error);
            alert("Login failed: " + data.error);
        }
        } catch (error) {
        console.error("Error:", error);
        //alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Admin Login
                </h2>
                <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary-300 focus:border-primary-300"
                    }`}
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">Email is required.</p>}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.password
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary-300 focus:border-primary-300"
                        }`}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                    >
                        {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                        <EyeIcon className="w-5 h-5" />
                        )}
                    </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">Password is required.</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    >
                    Login
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}
