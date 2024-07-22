import React from 'react';

const PdfButton = ({ pdf }) => {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 bg-green-600 text-white py-2 px-4 rounded"
    >
      Descargar PDF
    </a>
  );
};

export default PdfButton;