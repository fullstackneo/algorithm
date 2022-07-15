const peakFinder = function (arr) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  let min = 0;
  let max = arr.length - 1;
  let mid = parseInt((max + min) / 2);
  if (arr[0] > arr[1]) return arr[0];
  if (arr[arr[max] > arr[max - 1]]) return arr[max];

  while (true) {
    // if arr[mid]>arr[mid-1], <arr[mid+1] return arr[mid]

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    }
    // if arr[mid]<arr[mid+1], min=mid, mid=parseInt((min+max)/2)
    else if (arr[mid] < arr[mid + 1]) {
      min = mid;
    } else if (arr[mid] < arr[mid - 1]) {
      max = mid;
    }
    mid = parseInt((max + min) / 2);
    // if arr[mid]<arr[mid-1],max=mid, mid=parseInt((min+max)/2)
  }
};

console.log(peakFinder([104, 3, 2, 1]));
