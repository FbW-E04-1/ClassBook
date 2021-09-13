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

// 1. Use the .map() function to transform the tracklist array: add a new property to each track called durationInSeconds, calculated from duration. Example: duration: 2:30 => durationInSeconds 150

let tracklistWithSeconds = album.tracklist.map((track) => {
    let trackClone = {...track};
    let splitDuration = track.duration.split(":");
    let minutes = parseInt(splitDuration[0]);
    let seconds = parseInt(splitDuration[1]);
    console.log(minutes, seconds);
    trackClone.durationInSeconds = minutes * 60 + seconds;
    return trackClone;
});
console.log(tracklistWithSeconds);

// 2. sort the tracks in descending order, from the one with longer duration the shortest one

let sortedTracklist = [...tracklistWithSeconds].sort((a, b) => b.durationInSeconds - a.durationInSeconds);
console.log(sortedTracklist);

// 3. add a new property "durationInSeconds" to the main "album" object adding the total duration of the album in seconds

let albumDurationInSeconds = tracklistWithSeconds.reduce((total, currentTrack) => {
    return total + currentTrack.durationInSeconds;
}, 0)
console.log(albumDurationInSeconds);

album.durationInSeconds = albumDurationInSeconds;

console.log(album);
// 4. add a new property "duration" to the main "album" object with the duration represented as a string. Example: duration: "35:53"

// 1500 seconds => "30:24"
// Math.floor(1500 / 60), to get the minutes 
//1500 % 60, to get the seconds
let albumMinutesDuration = `${Math.floor(album.durationInSeconds / 60)}`;
let albumSecondsDuration = `${album.durationInSeconds % 60}`;
// let displaySeconds = albumSecondsDuration.length === 1 ? "0" + albumSecondsDuration : albumSecondsDuration;
album.duration = `${albumMinutesDuration.padStart(2, 0)}:${albumSecondsDuration.padStart(2, 0)}`

console.log(album);