console.log("Welcome to Beat Buzz");
let songCovers = [
    "images/alexander-shatov-JlO3-oY5ZlQ-unsplash.png"];
// Variables
const playButton = document.querySelector(".icons span[title='Play']");
const pauseButton = document.querySelector(".icons span[title='Pause']");
const backwardButton = document.querySelector(".icons span[title='Backward']");
const forwardButton = document.querySelector(".icons span[title='Forward']");
const progressBar = document.getElementById("myProgressBar");
const songInfo = document.querySelector(".songInfo img");
const songTitle = document.querySelector(".songInfo");
const songItems = document.querySelectorAll(".songItem");

// Simulate songs (replace with actual audio files)
let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
];
let currentSongIndex = 0;

// Create audio element
let audio = new Audio(songs[currentSongIndex]);

// Play song
const playSong = () => {
    audio.play();
    songInfo.style.opacity = "1";
    playButton.style.color = "green";
    pauseButton.style.color = "white";
    songTitle.innerText = "Playing: " + songs[currentSongIndex].split(".")[0];
};

// Pause song
const pauseSong = () => {
    audio.pause();
    songInfo.style.opacity = "0";
    playButton.style.color = "white";
    pauseButton.style.color = "red";
};

// Forward song
const forwardSong = () => {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0;
    }
    audio.src = songs[currentSongIndex];
    playSong();
};

// Backward song
const backwardSong = () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1;
    }
    audio.src = songs[currentSongIndex];
    playSong();
};

// Update progress bar
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Change song position
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Event Listeners
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
forwardButton.addEventListener("click", forwardSong);
backwardButton.addEventListener("click", backwardSong);

// Play song on clicking the song item
songItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentSongIndex = index;
        audio.src = songs[currentSongIndex];
        playSong();
    });
});
