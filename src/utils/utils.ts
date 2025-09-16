export interface IMonth {
  name: string;
  days: number;
  index: number;
}

export const monthMap: IMonth[] = [
  {
    name: 'January',
    days: 31,
    index: 0,
  },
  {
    name: 'February',
    days: 28,
    index: 1,
  },
  {
    name: 'March',
    days: 31,
    index: 2,
  },
  {
    name: 'April',
    days: 30,
    index: 3,
  },
  {
    name: 'May',
    days: 31,
    index: 4,
  },
  {
    name: 'June',
    days: 30,
    index: 5,
  },
  {
    name: 'July',
    days: 31,
    index: 6,
  },
  {
    name: 'August',
    days: 31,
    index: 7,
  },
  {
    name: 'September',
    days: 30,
    index: 8,
  },
  {
    name: 'October',
    days: 31,
    index: 9,
  },
  {
    name: 'November',
    days: 30,
    index: 10,
  },
  {
    name: 'December',
    days: 31,
    index: 11,
  },
];

export const generateDate = (year: number, monthIndex: number, day: number) => {
  return new Date(year, monthIndex, day);
};

export const isLeapYear = (year: number) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
};

export const generateGridForHeatmap = (year: number) => {
  const weeks = [];
  let currentWeek = [];
  const currentDate = new Date(year, 0, 1);

  while (currentDate.getFullYear() === year) {
    currentWeek.push(new Date(currentDate));
    if (currentDate.getDay() === 6) {
      //if first week does not start from the monday then
      if (currentWeek.length < 7) {
        const noOfEmptyFiller = 7 - currentWeek.length;
        [...Array(noOfEmptyFiller)].forEach(() => currentWeek.unshift(null));
      }
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // also need to fill the leftover days
  if (currentWeek.length > 0) weeks.push(currentWeek);

  return weeks;
};

export const getRandomTheme = () => {
  const themes = [
    'cupcake',
    'emerald',
    'corporate',
    'garden',
    'lofi',
    'pastel',
    'fantasy',
    'autumn',
    'winter',
    'acid',
    'nord',
  ];

  const min = 0;
  const max = Math.floor(themes.length - 1);

  return themes[Math.floor(Math.random() * (max - min + 1)) + min];
};
