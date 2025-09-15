export const DEVICE = {
   MOBILE: 'mobile',
   TABLET: 'tablet',
   DESKTOP: 'desktop',
} as const; // Trata como constante literal

export type DeviceType = (typeof DEVICE)[keyof typeof DEVICE];
