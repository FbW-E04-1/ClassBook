let airBalloonPhoto =
  "https://i.picsum.photos/id/791/5000/5000.jp?hmac=Pm85WV0dOG6AfpkWUxLtiYIoW1AFhe2zXEaerucqK0c";
let mountainRiverPhoto =
  "https://i.picsum.photos/id/1015/4000/4000.jpg?hmac=ErEYyuA0jJbCWmnNQL4YdlD48Lr_R6RUc9W908F2hTs";
let skyGrassPhoto =
  "https://i.picsum.photos/id/542/3000/3000.jpg?hmac=bcPw5ilvTPOP0HeiNdfZ_b5ZvWDmPlCwOSCb51dW3Gc";

/**
 * Create a function that takes in the url of an image and appends the image to the page
 *
 * The images should be displayed in the order they have been loaded
 *
 * .onload: event that gets triggered when an images is loaded successfully
 * .onerror:
 */

let imgList = document.querySelector(".uploaded-photos");
function loadPhoto(url) {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = url;
    imgList.appendChild(img);
    img.onload = () => resolve();
    img.onerror = () => reject(img);
  });
}

function failed(img) {
  console.log("error: " + img.src);
  img.remove();
}

loadPhoto(airBalloonPhoto)
  .then(
    () => loadPhoto(mountainRiverPhoto),
    (img) => failed(img)
  )
  .then(
    () => loadPhoto(skyGrassPhoto),
    (img) => failed(img)
  );
// .catch((img) => {
//   console.log("error");
//   img.remove();
// });
// .then(loadPhoto(mountainRiverPhoto))
// .then(loadPhoto(skyGrassPhoto));
