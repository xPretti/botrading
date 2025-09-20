import { useEffect, useState } from 'react';

export const usePageScrollLock = () => {
   const [locked, setLocked] = useState(false);

   useEffect(() => {
      if (locked) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
   }, [locked]);

   return { locked, setLocked };
};
