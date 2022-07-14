// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  // add your code here...
  let total = 0;
  // let count = 0;
  //find the index when the total is over 60, return index-1
  return (
    arr
      .sort((a, b) => a - b)
      .findIndex((el, index, arr) => {
        if (total > 60 || index === arr.length - 1) {
          return true;
        }
        total += el;
      }) - 1
  );
};

console.log(mostSongsInPlaylist([1, 3, 2, 3, 1, 1, 14, 231, 41, 41, 14]));
