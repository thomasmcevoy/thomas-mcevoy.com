<script>
  export function resetForm() {
    this.name = "";
    this.email = "";
    this.message = "";
  }
</script>

<section id="contact">
  <h2>CONTACT</h2>
  <h3>GOT QUESTIONS / COMMENTS?</h3>
  <h3>INQUIRE BELOW</h3>
  <form action="//formspree.io/tmcevoy213@gmail.com" method="POST">
    <input id="name" type="text" name="name" placeholder="NAME" />
    <input id="email" type="email" name="_replyto" placeholder="EMAIL" />
    <textarea id="message" name="message" placeholder="MESSAGE" />
    <input id="submit" type="submit" value="SEND" />
  </form>
</section>

<style>
  #contact {
    color: #67686a;
    background-color: #e6e7e9;
    padding-bottom: 0.5em;
  }
  @media (min-width: 750px) {
    #contact {
      padding-bottom: 1em;
    }
  }

  #contact h3 {
    color: #d6a929;
    letter-spacing: 0.15em;
  }
  @media (max-width: 749px) {
    #contact h3 {
      font-size: 1em;
      letter-spacing: 0.075em;
    }
  }

  form {
    margin: 1.875rem auto 0;
    padding: 0 1rem;
    max-width: 45rem;
  }
  @media (min-width: 750px) {
    form {
      margin-top: 2.8125rem;
    }
  }

  input,
  textarea {
    margin: 0 0 0.375rem;
    border: none;
    padding: 0.5rem 0.5rem 0.25rem;
    width: 100%;
    font: 0.875rem "Futura Book", "Futura", "Futura Standard", "Trebuchet MS",
      sans-serif;
    letter-spacing: 0.1rem;
  }
  @media (min-width: 750px) {
    input,
    textarea {
      margin-bottom: 0.5rem;
      padding: 0.6rem 0.5rem 0.375rem;
    }
  }
  @media (min-width: 880px) {
    input,
    textarea {
      margin-bottom: 0.75rem;
      padding: 0.75rem 0.5rem 0.5rem;
    }
  }

  @media (min-width: 750px) {
    input {
      width: 49%;
      width: calc(50% - 0.375rem);
    }
    #name {
      float: left;
    }
    #email {
      float: right;
    }
  }
  textarea {
    resize: none;
    height: 11rem;
  }
  @media (min-width: 750px) {
    textarea {
      height: 17rem;
    }
  }

  #submit {
    margin: 1.5em auto 3em;
    padding: 0.8125em 3.75em 0.6125em;
    width: auto;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    font-size: 0.67rem;
  }
  @media (min-width: 880px) {
    #submit {
      font-size: 0.75rem;
    }
  }
  #submit:hover {
    cursor: pointer;
  }

  ::-webkit-input-placeholder {
    color: #d0d0d0;
  }
  :-moz-placeholder {
    color: #d0d0d0;
  }
  ::-moz-placeholder {
    color: #d0d0d0;
  }
  :-ms-input-placeholder {
    color: #d0d0d0;
  }
</style>
