import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.weaCap',
  appName: 'wea-cap',
  webDir: 'dist/wea-cap',
  server: {
    url: 'http://192.168.1.10:4200',
    cleartext: true,
    androidScheme: 'https',
  },
};

export default config;
