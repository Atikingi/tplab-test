import { CardProps } from '../../types/types';

export const sorting = (type: string, arr: CardProps[] | undefined) => {
  if (arr) {
    switch (type) {
      case 'name':
        return arr.sort((a, b) => {
          const nameA = a.name;
          const nameB = b.name;
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case 'name-reverse':
        return arr.sort((a, b) => {
          const nameA = a.name;
          const nameB = b.name;
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
      case 'category':
        return arr.sort((a, b) => {
          const nameA = a.category;
          const nameB = b.category;
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case 'category-reverse':
        return arr.sort((a, b) => {
          const nameA = a.category;
          const nameB = b.category;
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
      case 'views':
        return arr.sort((a, b) => {
          return a.views - b.views;
        });
      case 'views-reverse':
        return arr.sort((a, b) => {
          return b.views - a.views;
        });
      case 'start':
        return arr.sort((a, b) => {
          const parseA = a.start_date.replaceAll('/', '-');
          const parseB = b.start_date.replaceAll('/', '-');
          const startA = Date.parse(new Date(parseA).toISOString());
          const startB = Date.parse(new Date(parseB).toISOString());

          return startA - startB;
        });
      case 'start-reverse':
        return arr.sort((a, b) => {
          const parseA = a.start_date.replaceAll('/', '-');
          const parseB = b.start_date.replaceAll('/', '-');
          const startA = Date.parse(new Date(parseA).toISOString());
          const startB = Date.parse(new Date(parseB).toISOString());

          return startB - startA;
        });
      case 'end':
        return arr.sort((a, b) => {
          const parseA = a.end_date.replaceAll('/', '-');
          const parseB = b.end_date.replaceAll('/', '-');
          const startA = Date.parse(new Date(parseA).toISOString());
          const startB = Date.parse(new Date(parseB).toISOString());

          return startA - startB;
        });
      case 'end-reverse':
        return arr.sort((a, b) => {
          const parseA = a.end_date.replaceAll('/', '-');
          const parseB = b.end_date.replaceAll('/', '-');
          const startA = Date.parse(new Date(parseA).toISOString());
          const startB = Date.parse(new Date(parseB).toISOString());

          return startB - startA;
        });
      default:
        return arr;
    }
  }

  return;
};
