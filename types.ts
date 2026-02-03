
export interface PrayerTimes {
  imsak: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface RamadanDay {
  ramadanDay: number;
  gregorianDate: string;
  dayName: string;
  times: PrayerTimes;
}

// Fix: Use keyof operator instead of key-of
export type PrayerName = keyof PrayerTimes;