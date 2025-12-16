'use client';

import type {ReactNode} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import {container} from './variants';
import {motionTokens} from './tokens';

export default function Stagger({
  children,
  className,
  amount = 'some',
  once = true,
  stagger = motionTokens.stagger.normal
}: {
  children: ReactNode;
  className?: string;
  amount?: 'some' | 'all';
  once?: boolean;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{once, amount}}
    >
      {children}
    </motion.div>
  );
}
