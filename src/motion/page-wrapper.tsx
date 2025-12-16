'use client';

import {motion} from 'framer-motion';
import {fade} from './variants';

export default function PageWrapper({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
