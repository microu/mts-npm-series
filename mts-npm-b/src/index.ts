export function randomChoice<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function randomSelection<T>(arr: Array<T>, n: number): T[] {
  if (n >= arr.length) {
    return arr;
  }
  const indexes = Array.from(new Array(arr.length), (_v, i) => i);
  const selectIndexes = [] as number[];
  while (selectIndexes.length < n) {
    const ii = Math.floor(Math.random() * indexes.length);
    selectIndexes.push(indexes[ii]);
    indexes.splice(ii, 1);
  }
  return selectIndexes.map((index) => arr[index]);
}

export function shuffle<T>(arr: Array<T>): Array<T> {
  return arr
    .map((item) => ({ sortValue: Math.random(), value: item }))
    .sort((a, b) => a.sortValue - b.sortValue)
    .map((item) => item.value);
}
