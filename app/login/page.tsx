"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-white-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-md min-w-[300px]"
      >
        <h2 className="text-2xl font-bold text-center">เข้าสู่ระบบ</h2>
        <input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-primary-blue text-white p-2 rounded"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
