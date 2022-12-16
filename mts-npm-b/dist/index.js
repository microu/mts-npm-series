function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function randomSelection(arr, n) {
    if (n >= arr.length) {
        return arr;
    }
    const indexes = Array.from(new Array(arr.length), (_v, i) => i);
    const selectIndexes = [];
    while (selectIndexes.length < n) {
        const ii = Math.floor(Math.random() * indexes.length);
        selectIndexes.push(indexes[ii]);
        indexes.splice(ii, 1);
    }
    return selectIndexes.map((index) => arr[index]);
}
function shuffle(arr) {
    return arr
        .map((item) => ({ sortValue: Math.random(), value: item }))
        .sort((a, b) => a.sortValue - b.sortValue)
        .map((item) => item.value);
}

export { randomChoice, randomSelection, shuffle };
