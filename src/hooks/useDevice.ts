import { useEffect, useState } from 'react';
import { DEVICE, type DeviceType } from '../types/device.type';

export const useDevice = () => {
   const [device, setDevice] = useState<DeviceType>(DEVICE.DESKTOP);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setDevice(DEVICE.MOBILE);
         } else if (width >= 768 && width < 1024) {
            setDevice(DEVICE.TABLET);
         } else {
            setDevice(DEVICE.DESKTOP);
         }
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return device;
};
