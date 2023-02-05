import React from "react";

export default function LandingPage() {
  return (
    <main>
      <header className="landing-page-header">Landing page Main banner</header>
      <section className="landing-page-instructional">
        <div>
          <h3>Text describing how to use</h3>
          <button>Sign Up!</button>
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

      <footer className="landing-page-footer">
        <a>FAQ</a>
        <a>Contact</a>
        <a>Other footer things</a>
      </footer>

    </main>
  );
}
