"use client"; // <-- Add this at the top
import { FaLinkedin, FaGithub, FaTelegram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons
import { useState } from 'react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaLinkedin size={20} />, // Set icon size to 20
      link: 'https://www.linkedin.com/in/meron-asnake-4425b2264', // LinkedIn link
    },
    {
      icon: <FaGithub size={20} />, // Set icon size to 20
      link: 'https://github.com/meriasnake', // GitHub Account 
      
    },
    {
      icon: <FaTelegram size={20} />, // Set icon size to 20
      link: 'https://t.me/Merimerryy', // Telegram link
    },
    {
      icon: <FaPhoneAlt size={20} />, // Set icon size to 20
      link: 'tel:+251947081044', // Phone link
    },
    {
      icon: <FaEnvelope size={20} />, // Set icon size to 20
      link: 'mailto:meronasnake384@gmail.com', // Email link
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mb-6">Contact Me</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`p-4 rounded-full bg-gray-200 hover:bg-blue-600 transition-all ease-in-out duration-300 ${
                hoveredIndex === index ? 'scale-110' : ''
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`absolute text-sm w-max ml-2 top-0 left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
     
    </div>
  );
}
