"use client"; // <-- Add this at the top
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleDateString();
    setCurrentDate(date);
  }, []);

  return (
    <footer className="bg-[#011806] text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">© 2025 Meron Asnake. All Rights Reserved.</p>
        <p className="text-sm mb-4">Your trusted partner for high-quality services and products.</p>
        <p className="text-sm">Current Date: {currentDate}</p>
      </div>
    </footer>
  );
}
