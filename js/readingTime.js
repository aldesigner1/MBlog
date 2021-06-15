function readingTime() {
  const text = document.getElementById("articleZone").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  if(time<10)
  document.getElementById("time").innerText = '0'+ time;
  else {
    document.getElementById("time").innerText = time;
  }
}
readingTime();
