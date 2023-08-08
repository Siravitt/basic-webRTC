const video = document.getElementById("video");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

const hasGetUserMedia = () => {
  return !!(
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );
};

const successHandler = (stream) => {
  video.srcObject = stream;

  stream.getVideoTracks()[0].addEventListener('ended', () => {
    alert('User has ended sharing the screen')
  })
};

const errorHandler = (error) => {
  console.log(error);
};

start.addEventListener("click", async () => {
    try {
        if (hasGetUserMedia()) {
          const options = { audio: true, video: true };
          const res = await navigator.mediaDevices.getDisplayMedia(options);
          successHandler(res)
        } else {
          alert("Cannot use getUserMedia");
        }
    } catch (error) {
        errorHandler(error)
    }
  }
);
