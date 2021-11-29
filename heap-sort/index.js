// Sorts an array of numbers, using the heapsort algorithm.

/* 
1. Use recursion.
2. Use the spread operator (...) to clone the original array, arr.
3. Use closures to declare a variable, l, and a function heapify.
4. Use a for loop and Math.floor() in combination with heapify to create a max heap from the array.
5. Use a for loop to repeatedly narrow down the considered range, using heapify and swapping values as necessary in order to sort the cloned array.
*/

const heapsort = arr => {
  const a = [...arr];
  let l = a.length;

  const heapify = (a, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;
    if (max !== i) {
      [a[max], a[i]] = [a[i], a[max]];
      heapify(a, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    l--;
    heapify(a, 0);
  }
  return a;
};