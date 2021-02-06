export const formatTime = (time) =>
  Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

export const playAudio = (isPlaying, songRef) => {
  if (isPlaying) {
    const playPromise = songRef.current.play();
    if (playPromise) {
      playPromise.then((audio) => {
        songRef.current.play();
      });
    }
  }
};
