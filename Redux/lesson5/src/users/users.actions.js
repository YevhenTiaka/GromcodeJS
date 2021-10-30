export const PREV_PAGE = 'PAGE/PREV_PAGE';
export const NEXT_PAGE = 'PAGE/NEXT_PAGE';

export const goPrev = () => ({
  type: PREV_PAGE,
});

export const goNext = () => ({
  type: NEXT_PAGE,
});
