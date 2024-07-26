"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center space-x-4">
          <img
            src="/logo_alaspe.png"
            alt="Logo"
            className="h-20"
          />
          <h1 className="text-white text-xl font-bold">
            Cooperativa de Alas Peruanas
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center flex-grow justify-end">
          <nav className="flex space-x-6">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Inicio</a>
            </Link>
            <Link href="/servicios" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Servicios</a>
            </Link>
            <Link href="/beneficios" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Beneficios</a>
            </Link>
            <Link href="/convenios" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Convenios</a>
            </Link>
            <Link href="/nosotros" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Nosotros</a>
            </Link>
            <Link href="/asociados" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Asociados</a>
            </Link>
            <Link href="/comunicados" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Comunicados</a>
            </Link>
            <Link href="/contacto" legacyBehavior>
              <a className="text-white hover:text-gray-200 transition duration-300">Contacto</a>
            </Link>
          </nav>
          <Link href="http://190.12.83.18/portal/ConsulNet/default.aspx" legacyBehavior>
            <a className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300">Intranet</a>
          </Link>
        </div>
        <div className="md:hidden flex items-center ml-auto">
          <Link href="http://190.12.83.18/portal/ConsulNet/default.aspx" legacyBehavior>
            <a className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300 mr-4">Intranet</a>
          </Link>
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="bg-green-700 p-4">
            <Link href="/" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Inicio</a>
            </Link>
            <Link href="/servicios" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Servicios</a>
            </Link>
            <Link href="/beneficios" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Beneficios</a>
            </Link>
            <Link href="/convenios" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Convenios</a>
            </Link>
            <Link href="/nosotros" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Nosotros</a>
            </Link>
            <Link href="/asociados" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Asociados</a>
            </Link>
            <Link href="/comunicados" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Comunicados</a>
            </Link>
            <Link href="/contacto" legacyBehavior>
              <a className="block text-white hover:text-gray-200 py-2 transition duration-300">Contacto</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}