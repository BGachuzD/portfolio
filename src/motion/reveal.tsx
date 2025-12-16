'use client';

import {motion, useReducedMotion} from 'framer-motion';
import type {ReactNode} from 'react';
import type {Variants} from 'framer-motion';
import {fadeUp} from './variants';

export default function Reveal({
  children,
  variant = fadeUp,
  className
}: {
  children: ReactNode;
  variant?: Variants;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}
