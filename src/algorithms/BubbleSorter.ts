// TODO: Optimize
export class BubbleSorter {
  sort = function sort(items: number[]): number[] {
    if (items.length < 2) return items;

    for (let i = 0; i < items.length - 1; ++i) {
      const leftItem = items[i];
      const rightItem = items[i + 1];
      if (leftItem > rightItem) {
        const temp = rightItem;
        items[i + 1] = leftItem;
        items[i] = temp;
      }
    }

    return items;
  };
}
