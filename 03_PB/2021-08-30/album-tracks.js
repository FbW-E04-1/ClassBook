let album = {
  artist: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
};

/**
 *
 * 1. Use the .map() function to transform the tracklist array: add a new property to each track called durationInSeconds,
 * calculated from duration. Example: duration: 2:30 => durationInSeconds 150
 * 2. sort the tracks in descending order, from the one with longer duration the shortest one
 * 3. add a new property "durationInSeconds" to the main "album" object adding the total duration of the album in seconds
 * 4. add a new property "duration" to the main "album" object with the duration represented as a string. Example: duration: "35:53"
 */

let durationsInSecond = album.tracklist.map((track) => {
  let trackClone = { ...track };
  let splitDuration = track.duration.split(":");
  let durationInSecond =
    parseInt(splitDuration[0]) * 60 + parseInt(splitDuration[1]);
  trackClone.durationInSecond = durationInSecond;
  return trackClone;
});
console.log(durationsInSecond);

let sorted = [...durationsInSecond].sort((trackA, trackB) => trackA.durationInSecond - trackB.durationInSecond);
console.log(sorted);


let albumLength = durationsInSecond.reduce((acc, currentItem) => acc + currentItem.durationInSecond, 0);
console.log(albumLength);