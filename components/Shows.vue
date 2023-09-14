<template>
  <section id="shows">
    <h2>SHOWS</h2>
    <div id="calendar">
      <h4>{{ month }} {{ year }}</h4>
      <ol>
        <li v-for="show in shows" :key="show.day" class="show">
          <div class="day">
            {{ show.day }}
          </div>
          <div class="details">
            <div v-if="!show.url" class="venue">
              {{ show.venue.toUpperCase() }}
            </div>
            <a v-else :href="show.url" class="venue">{{ show.venue.toUpperCase() }}</a>
            <div>{{ show.band.toUpperCase() }}</div>
            <div>{{ show.time.toUpperCase() }}</div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Shows',
  data() {
    return {
      month: 'September',
      year: '2023',
      shows: [
        {
          day: 2,
          venue: 'The Wallace',
          url: '//thewallace.com/lounge',
          band: 'Steve Picataggio Trio',
          time: '7–11 PM'
        },
        {
          day: 3,
          venue: 'Church of the Ascension',
          url: '//ascensionchurchnyc.org',
          band: 'Jazz Vespers',
          time: '6–7 PM'
        },
        {
          day: 4,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 6,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 7,
          venue: 'The Wallace',
          url: '//thewallace.com/lounge',
          band: 'Duo with Jane Irving',
          time: '7–10 PM'
        },
        {
          day: 8,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:30–11:00 PM'
        },
        {
          day: 9,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '10:00–11:30 PM'
        },
        {
          day: 10,
          venue: 'Church of the Ascension',
          url: '//ascensionchurchnyc.org',
          band: 'Jazz Vespers',
          time: '6–7 PM'
        },
        {
          day: 11,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 13,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 15,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:30–11:00 PM'
        },
        {
          day: 16,
          venue: 'The Lotos Club',
          url: '//lotosclub.org',
          band: 'Private Event',
          time: '6:30–10:30 PM'
        },
        {
          day: 17,
          venue: 'Church of the Ascension',
          url: '//ascensionchurchnyc.org',
          band: 'Jazz Vespers',
          time: '6–7 PM'
        },
        {
          day: 20,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 21,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 22,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:30–11:00 PM'
        },
        {
          day: 24,
          venue: 'Church of the Ascension',
          url: '//ascensionchurchnyc.org',
          band: 'Jazz Vespers',
          time: '6–7 PM'
        },
        {
          day: 25,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 27,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: 28,
          venue: 'Sleep No More',
          url: '//mckittrickhotel.com',
          band: 'Manderley Bar House Band',
          time: '9:00–10:30 PM'
        },
        {
          day: '',
          venue: '',
          url: '',
          band: '',
          time: ''
        }
      ]
    }
  }
}
</script>

<style>
#shows {
  text-align: center;
}

#shows h3 {
  color: #bf9600;
}

#shows h4 {
  margin: 0 0 0.875em;
}
@media (max-width: 879px) {
  #shows h4 {
    font-size: 2.25em;
  }
}
@media (max-width: 599px) {
  #shows h4 {
    font-size: 1.5625em;
  }
}

#shows button {
  margin-top: 2.5em;
}
@media (min-width: 880px) {
  #shows button {
    margin-top: 4em;
  }
}

#calendar {
  margin: auto;
  text-align: center;
  max-width: 19em;
}
@media (min-width: 600px) {
  #calendar {
    max-width: 34em;
  }
}
@media (min-width: 880px) {
  #calendar {
    max-width: 51em;
  }
}

.show {
  display: inline-block;
  width: 16.5em;
  height: 15.375em;
  padding: 1.75em 0.5em;
  vertical-align: top;
  border-right: 0.15em solid #d6a929;
  text-align: center;
}
@media (max-width: 599px) {
  .show {
    font-size: 0.55rem;
  }
  .show:nth-of-type(2n) {
    border-right: none;
  }
  .show:nth-of-type(n + 3) {
    border-top: 0.15em solid #d6a929;
  }
}
@media (min-width: 600px) {
  .show {
    padding: 2.5em 0.5em;
  }
  .show:nth-of-type(3n) {
    border-right: none;
  }
  .show:nth-of-type(n + 4) {
    border-top: 0.15em solid #d6a929;
  }
}
@media (min-width: 600px) and (max-width: 879px) {
  .show {
    font-size: 0.675rem;
  }
}
@media (min-width: 880px) {
  .show {
    padding: 2em 0.5em;
  }
}

.day {
  font: 100 7em/0.9 'Futura Light', 'Futura Book', 'Futura', 'Futura Standard',
    'Trebuchet MS', sans-serif;
}
@media (min-width: 880px) {
  .day {
    font-size: 8em;
  }
}

.details {
  display: table-cell;
  vertical-align: middle;
  width: 25em;
  height: 7em;
  font-size: 0.75em;
  line-height: 1.5;
  letter-spacing: 0.1em;
}
.details a {
  display: inline-block;
}

.venue {
  display: block;
  padding: 0 3%;
  font: 1.7em/1.3 'Futura Book', 'Futura', 'Futura Standard', 'Trebuchet MS',
    sans-serif;
  color: #d6a929;
}

#shows .is-collapsed {
  max-height: 21em;
}
@media (min-width: 600px) {
  #shows .is-collapsed {
    max-height: 24.5em;
  }
}
@media (min-width: 880px) {
  #shows .is-collapsed {
    max-height: 37em;
  }
}

#shows .is-expanded {
  max-height: 56em;
}
@media (min-width: 880px) {
  #shows .is-expanded {
    max-height: 69em;
  }
}
</style>
