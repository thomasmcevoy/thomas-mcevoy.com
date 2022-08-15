<template>
  <section id="music">
    <h2>MUSIC</h2>
    <div id="player">
      <div id="playlist">
        <div class="album">
          <h3>STANDARDS</h3>
          <a
            :class="{ 'song--current': currentTrack === 0 }"
            class="song"
            @click="play(0)"
          >IF I LOVE AGAIN</a>
          <a
            :class="{ 'song--current': currentTrack === 1 }"
            class="song"
            @click="play(1)"
          >IT NEVER ENTERED MY MIND</a>
          <a
            :class="{ 'song--current': currentTrack === 2 }"
            class="song"
            @click="play(2)"
          >ALL THE THINGS YOU ARE</a>
        </div>
        <div class="album">
          <h3>COMPOSITIONS</h3>
          <a :class="{ 'song--current': currentTrack === 3 }" class="song" @click="play(3)">MANDJET</a>
          <a
            :class="{ 'song--current': currentTrack === 4 }"
            class="song"
            @click="play(4)"
          >BLACK HAT, BLACK GLOVES</a>
          <a
            :class="{ 'song--current': currentTrack === 5 }"
            class="song"
            @click="play(5)"
          >APRIL FOOL</a>
        </div>
        <audio
          ref="audio"
          @ended="next()"
          @loadedmetadata="() => {
            this.$refs.duration.innerHTML = formatTime(this.$refs.audio.duration)
            this.$refs.currentTime.innerHTML = formatTime(this.$refs.audio.currentTime)
          }"
          @timeupdate="() => {
            this.$refs.currentTime.innerHTML = formatTime(this.$refs.audio.currentTime)
            this.$refs.seekBar.style.width = (this.$refs.audio.currentTime / this.$refs.audio.duration * 100) + '%'
          }"
        />
      </div>
      <div id="controls">
        <div id="previous" class="controls__button controls__button--small" @click="previous()">
          <svg viewBox="0 0 213 132">
            <path
              fill="#414042"
              stroke="#bf9600"
              stroke-width="3.5"
              d="M108.418 66l99 61V5zM4 66l99.293 61V5zM108.418 66l99 61V5z"
            ></path>
          </svg>
        </div>
        <div
          v-if="!isPlaying"
          id="play"
          class="controls__button controls__button--large"
          @click="play()"
        >
          <svg viewBox="0 0 105.469 131.621">
            <path
              fill="#414042"
              stroke="#bf9600"
              stroke-width="2.5"
              d="M1.25 2.255V129.37l101.858-63.49z"
            ></path>
          </svg>
        </div>
        <div v-else id="pause" class="controls__button controls__button--large" @click="pause()">
          <svg viewBox="0 0 105.469 131.621">
            <path
              fill="#414042"
              stroke="#bf9600"
              stroke-width="2.5"
              d="M13.25 1.25h23.652V131.46H13.25zM68.132 1.25h23.652V131.46H68.132z"
            ></path>
          </svg>
        </div>
        <div id="next" class="controls__button controls__button--small" @click="next()">
          <svg viewBox="0 0 213 132">
            <path
              fill="#414042"
              stroke="#bf9600"
              stroke-width="3.5"
              d="M4 5v122l99-61zM108.125 5v122l99.292-61zM4 5v122l99-61z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="progress">
        <div id="current-time" ref="currentTime"/>
        <div id="progress-bar">
          <div id="seekBar" ref="seekBar"/>
        </div>
        <div id="duration" ref="duration"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Music',
  data() {
    return {
      isPlaying: false,
      currentTrack: undefined,
      playlist: [
        'If I Love Again.mp3',
        'It Never Entered My Mind.mp3',
        'All the Things You Are.mp3',
        'Mandjet.mp3',
        'Black Hat.mp3',
        'April Fool.mp3'
      ]
    }
  },
  methods: {
    formatTime(seconds) {
      const m = Math.floor(seconds / 60)
      let ss = Math.floor(seconds - m * 60)
      if (ss < 10) ss = '0' + ss
      return m.toString(10) + ':' + ss.toString(10)
    },
    setTrack(track) {
      this.currentTrack = track
      this.$refs.audio.setAttribute('src', this.playlist[track])
    },
    play(track) {
      if (track !== undefined) this.setTrack(track)
      else if (this.currentTrack === undefined) this.setTrack(0)
      this.$refs.audio.play()
      this.isPlaying = true
    },
    pause() {
      this.$refs.audio.pause()
      this.isPlaying = false
    },
    previous() {
      if (this.currentTrack === undefined) return
      this.setTrack(this.currentTrack === 0 ? 5 : (this.currentTrack -= 1))
      if (this.isPlaying) this.play()
    },
    next() {
      if (this.currentTrack === undefined) return
      this.setTrack(this.currentTrack === 5 ? 0 : (this.currentTrack += 1))
      if (this.isPlaying) this.play()
    }
  }
}
</script>

<style>
#music {
  background-color: #414042;
}

#music h2 {
  color: #d9d9d9;
}

#music h3 {
  color: #bf9600;
  margin: 2em 0 1.25em;
}

#player {
  font-size: 0.875em;
}
@media (min-width: 880px) {
  #player {
    font-size: 1.25em;
  }
}

.album {
  margin-bottom: 1.25em;
}

.album h3 {
  margin-bottom: 0.875em;
  color: #bf9600;
  font-size: inherit;
}

.song {
  display: block;
  letter-spacing: 0.1875em;
  color: #d9d9d9;
  padding: 0.25em;
}
@media (min-width: 750px) {
  .song {
    padding: 0.375em;
  }
}

@media (min-width: 1000px) {
  .song {
    display: inline-block;
    padding: 0.375em 0.125em 0.375em 0;
  }
  .song:before {
    content: ' / ';
    color: #bf9600;
  }
  .song:first-of-type:before {
    content: '';
  }
}

.song:hover {
  color: #fff;
  cursor: pointer;
}

.song--current,
.song--current:hover {
  color: #808184;
}

#controls {
  margin: 2.375em 0 0.625em;
}
@media (min-width: 750px) {
  #controls {
    margin: 2.75em 0 1.875em;
  }
}

.controls__button {
  z-index: 2;
  display: inline-block;
  cursor: pointer;
  margin: 0 1em;
}
@media (min-width: 750px) {
  .controls__button {
    margin: 0 5.5%;
  }
}

.controls__button--large {
  height: 4em;
  width: 4em;
}
@media (min-width: 750px) {
  .controls__button--large {
    height: 5.1875em;
    width: 5.1875em;
  }
}
@media (min-width: 1300px) {
  .controls__button--large {
    height: 6em;
    width: 6em;
  }
}

.controls__button--small {
  position: relative;
  height: 2.5em;
  width: 4.1667em;
  bottom: 0.6667em;
}
@media (min-width: 750px) {
  .controls__button--small {
    height: 3.4583em;
    width: 5.7638em;
    bottom: 0.8646em;
  }
}
@media (min-width: 1300px) {
  .controls__button--small {
    height: 4em;
    width: 6.6667em;
    bottom: 1em;
  }
}

#progress {
  margin: auto;
  min-width: 315px;
  width: 55%;
}
@media (min-width: 750px) {
  #progress {
    width: 68%;
  }
}
@media (min-width: 880px) {
  #progress {
    width: 73%;
  }
}
@media (min-width: 1000px) {
  #progress {
    width: 82%;
  }
}
@media (min-width: 1200px) {
  .progress {
    width: 73%;
  }
}

#progress-bar {
  display: inline-block;
  margin: auto;
  width: 80%;
  width: calc(100% - 5.5em);
  height: 0.1em;
  background-color: #48484a;
}

#seek-bar {
  height: 100%;
  float: left;
  background-color: #777;
}

#current-time,
#duration {
  display: inline-block;
  width: 3.125em;
  font: 0.625em 'Futura Book', 'Futura', 'Futura Standard', 'Trebuchet MS',
    sans-serif;
  color: #d9d9d9;
  letter-spacing: 0.2em;
  position: relative;
  top: 0.25em;
}

#current-time {
  text-align: left;
}

#duration {
  text-align: right;
  left: 0.3333em;
}
</style>
