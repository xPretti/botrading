export const DEVICE = {
   MOBILE: 'mobile',
   TABLET: 'tablet',
   DESKTOP: 'desktop',
} as const;

export type DeviceType = (typeof DEVICE)[keyof typeof DEVICE];
