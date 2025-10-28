import React from 'react';
import { CERTIFICATES } from '../constants';
import { Certificate } from '../types';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Courses & Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((certificate: Certificate, index: number) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">{certificate.name}</h3>
              <p className="text-gray-300 text-base mb-3">Issued by: {certificate.issuer}</p>
              {certificate.url && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors duration-300"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;