
import { RamadanDay } from './types';

// تەخمینا دەمێن نڤێژان بۆ ٣٠ رۆژێن رەمەزانا ٢٠٢٦ (١٤٤٧ مشختی)
// دەسپێک ١٨ێ شواتێ یە
const generateRamadanDays = (): RamadanDay[] => {
  const days: RamadanDay[] = [];
  const dayNames = ["چارشەمبی", "پێنجشەمبی", "ئەینی", "شەمبی", "ئێکشەمبی", "دووشەمبی", "سێشەمبی"];
  
  // دەمێن دەسپێکێ (١ رەمەزان)
  let imsakMin = 4 * 60 + 56;
  let fajrMin = 5 * 60 + 6;
  let sunriseMin = 6 * 60 + 29;
  let dhuhrMin = 12 * 60 + 15;
  let asrMin = 15 * 60 + 31;
  let maghribMin = 18 * 60 + 1;
  let ishaMin = 19 * 60 + 14;

  for (let i = 1; i <= 30; i++) {
    const date = new Date(2026, 1, 17 + i); // 1 is February (0-indexed)
    const dayName = dayNames[(date.getDay() + 1) % 7]; // Adjustment for Kurdish week start
    
    // هەر رۆژ دەم کێمەکێ دهێتە گوهورین (بۆ تەخمینی)
    const format = (m: number) => {
      const h = Math.floor(m / 60);
      const min = m % 60;
      return `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
    };

    days.push({
      ramadanDay: i,
      gregorianDate: `${date.getDate()} ${date.getMonth() === 1 ? 'شوات' : 'ئادار'} ٢٠٢٦`,
      dayName: dayName,
      times: {
        imsak: format(imsakMin),
        fajr: format(fajrMin),
        sunrise: format(sunriseMin),
        dhuhr: format(dhuhrMin),
        asr: format(asrMin),
        maghrib: format(maghribMin),
        isha: format(ishaMin)
      }
    });

    // گوهورینا دەمان (رۆژ درێژتر لێ دهێن)
    imsakMin -= 1;
    fajrMin -= 1;
    sunriseMin -= 1;
    asrMin += 1;
    maghribMin += 1;
    ishaMin += 1;
  }
  return days;
};

export const RAMADAN_DAYS: RamadanDay[] = generateRamadanDays();

export const PRAYER_LABELS = {
  imsak: "پاشیڤ",
  fajr: "سپێدە",
  sunrise: "ڕۆژهەلات",
  dhuhr: "نیڤڕۆ",
  asr: "ئێڤاری",
  maghrib: "مەغریب",
  isha: "خەفتان"
};
