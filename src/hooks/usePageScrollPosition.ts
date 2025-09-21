import { useEffect, useState } from 'react';

export function usePageScrollPosition(offset: number = 300) {
   const [passed, setPassed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > offset) {
            setPassed(true);
         } else {
            setPassed(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [offset]);

   return passed;
}
