import React from "react";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const PdfButton = ({ href, text }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 bg-red-600 text-white flex items-center py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
      >
        <FaFilePdf className="mr-2" />
        {text}
      </a>
    </Link>
  );
};

export default PdfButton;
