import React from "react";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-top">
        <div className="landing-top-left">
          <br/> 
          <h1>Don't waste your time writing cover letters,<br/>Let AI do it for you!</h1>
          <p>Did you know 48% of giant tech companies require cover letters?</p>
          <button>Get Started Now!</button>
        </div>
        <div className="screen-grab">Screen grab/video</div>
      </section>

      <section className="landing-mid">
        <div>
          <h1>Generate Your Cover Letter In Seconds</h1>
          <h3>It only takes three easy steps!</h3>
          </div>
        <div className="screen-grab">Screen grab/video</div>
          <button>Generate Now!</button>
      </section>

      <section className="landing-bottom">
        <div>Another engaging image</div>
        <div>Fake reviews?</div>
      </section>

    </main>
  );
}
