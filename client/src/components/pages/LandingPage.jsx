import React from "react";

export default function LandingPage() {
  return (
    <main>
      <section className="landing-top">
        <div className="landing-top-left">
          <h1>Don't waste time writing cover letters,<br/>Let AI do it for you!</h1>
          <button>Get Started Now!</button>
        </div>
        <div className="screen-grab">Screen grab/video</div>
      </section>

      <section className="landing-page-instructional">
        <div>Screen grab/video</div>
        <div>
          <h3>Text describing how to use</h3>
          <button>Generate Now!</button>
          </div>
      </section>

      <section className="landing-page-instructional">
        <div>Other text</div>
        <div>Engaging Image</div>
      </section>

      <section className="landing-page-instructional">
        <div>Another engaging image</div>
        <div>Fake reviews?</div>
      </section>

    </main>
  );
}
