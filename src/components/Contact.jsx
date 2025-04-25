// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className=" bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Contáctame</h2>
        <ul className=" md:flex gap-4 md:items-start space-y-4 text-gray-300 text-justify">
          <li>
            <a
              href="https://www.instagram.com/r3y3x/"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <strong>Instagram:</strong> @r3y3x
            </a>
          </li>
          <li>
            <a
              href="mailto:luisreyes03094@gmail.com"
              className="hover:text-orange-500 transition"
            >
              <strong>Email:</strong> luisreyes03094@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@r3y3xx"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <strong>TikTok:</strong> @r3y3xx
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@R3Y3X"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <strong>YouTube:</strong> @R3Y3X
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
