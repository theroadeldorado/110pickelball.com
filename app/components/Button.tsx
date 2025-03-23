'use client';

import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
};

export default function Button({ href, children, primary = true, className = '' }: ButtonProps) {
  const baseClasses = 'font-medium rounded-full inline-flex items-center justify-center text-center px-6 py-3 transition-all duration-200 ease-in-out';
  const primaryClasses = 'bg-black hover:bg-gray-800 text-white';
  const secondaryClasses = 'bg-white hover:bg-gray-100 text-black border border-gray-300';

  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}
