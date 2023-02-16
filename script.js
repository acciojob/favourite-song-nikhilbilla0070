//your code here
const songName = "Enoo ratrulosthayi";
const videoUrl = `https://www.youtube.com/watch?v=9esI5PpvY2Q`;
const favoriteSongDiv = document.getElementById("favorite-song");
favoriteSongDiv.innerHTML = `My current favorite song is <a href="${videoUrl}" target="_blank">${songName}</a>.`;
