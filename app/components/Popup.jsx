"use client";

import { useState, useEffect } from 'react';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative bg-blue-600 p-8 rounded-lg text-white max-w-lg mx-auto font-poppins">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              &#x2715;
            </button>
            <h2 className="text-3xl font-semibold mb-4 leading-tight">
              Con esfuerzo,<br />nos levantamos<br />y avanzamos.
            </h2>
            <p className="mb-4">
              Nos transformamos para mejorar, para tener mejores beneficios,
              empresas sólidas y más convenios.
            </p>
            <p className="mb-4">Juntos siempre seremos más fuertes.</p>
            <p>Martín Campos<br />Gerente General</p>
          </div>
        </div>
      )}
    </>
  );
}
