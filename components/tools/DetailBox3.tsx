import React from 'react';
import { DetailBoxProps } from './types'


const DetailBox: React.FC<DetailBoxProps> = ({ logo }) => {
  if (!logo) {
    return <div>No logo selected</div>;
  }
  return (
    <div className="lg:w-1/2 p-4 text-black sm:text-xl md:text-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{logo.name}</h2>
      <p className="mb-2">
        <strong>{logo.descLabel}</strong> {logo.desc}
      </p>
      <p className="mb-2">
        <strong>{logo.useCaseLabel}</strong> {logo.useCase}
      </p>
      {logo.extra && typeof logo.extra === 'object' && (
        <p className="mb-2">
          <strong>{logo.extra.text}</strong>
          <a href={logo.extra.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {logo.extra.linkText}
          </a>
        </p>
      )}
    </div>
  );
};

export default DetailBox;

