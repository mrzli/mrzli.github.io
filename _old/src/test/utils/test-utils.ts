import mediaQuery from 'css-mediaquery';
import { Fn1 } from '../../types/generic/generic-types';
import { emptyFn } from '../../utils/generic-function-utils';

export function createMatchMedia(width: number): Fn1<string, MediaQueryList> {
  return (query) => {
    const mediaQueryList: MediaQueryList = {
      matches: mediaQuery.match(query, { width }),
      addListener: emptyFn,
      removeListener: emptyFn,
    } as unknown as MediaQueryList;
    return mediaQueryList;
  };
}
