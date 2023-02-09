import React from "react";

export default function LandingPage() {
  return (
    <main>
      <header className="landing-page-header">Landing page Main banner</header>
      <section className="landing-page-instructional">
        <div>
          <h3>Text describing how to use</h3>
          <button>Log in!</button>
        </div>
        <div>Screen grab/video</div>
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
