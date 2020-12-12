export const parseSearchParamsToObject = <T extends object>(searchStr: string): T =>  {
  return searchStr
    .slice(1)
    .split('&')
    .reduce<T>((res: T, keyVal: string) => {
      const index = keyVal.indexOf('=');
      const [key, val] = [keyVal.slice(0, index), keyVal.slice(index + 1)];
      return Object.assign(res, { [key]: val });
    }, {} as T);
}
