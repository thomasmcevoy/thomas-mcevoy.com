<script>
  import calendar from "./calendar.js";
</script>

<section id="shows">
  <h2>SHOWS</h2>
  <div id="calendar">
    <h4>{calendar.month} {calendar.year}</h4>
    <div class="container">
      <ol>
        {#each calendar.shows as show}
          <li class="show">
            <div class="day">
              {show.day}
            </div>
            <div class="details">
              {#if !show.url}
                <div class="venue">
                  {show.venue.toUpperCase()}
                </div>
              {:else}
                <a href={show.url} class="venue">
                  {show.venue.toUpperCase()}
                </a>
              {/if}
              <div>{show.band.toUpperCase()}</div>
              <div>{show.time.toUpperCase()}</div>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>

<style>
  #shows {
    text-align: center;
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

  .container {
    text-align: left;
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
  @media (min-width: 600px) {
    .show:nth-last-child(3) {
      position: relative;
    }
    .show:nth-last-child(3)::after {
      content: "";
      position: absolute;
      bottom: -0.14em;
      left: 0;
      width: 100%;
      height: .14em;
      background-color: #d6a929;
    }
  }

  .day {
    font: 100 7em/0.9 "Futura Light", "Futura Book", "Futura", "Futura Standard",
      "Trebuchet MS", sans-serif;
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
    font: 1.7em/1.3 "Futura Book", "Futura", "Futura Standard", "Trebuchet MS",
      sans-serif;
    color: #d6a929;
  }
</style>
