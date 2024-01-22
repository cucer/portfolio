import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
}

const SlideCard = ({ src, title }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
    </div>
  );
};

export default SlideCard;
