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
  const primaryClasses = 'bg-black hover:bg-white ring-2 ring-black hover:text-black text-white';
  const secondaryClasses = 'bg-white hover:bg-black ring-2 ring-black hover:bg-black hover:text-white text-black';

  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}
