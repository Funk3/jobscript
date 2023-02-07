import React from "react";

export default function CustomLength() {
  return (
    <section className="custom-length">
      <h3>How long should it be?</h3>
      <form>
        <select>
          <option>Default</option>
          <option>Short</option>
          <option>Long</option>
        </select>
      </form>
    </section>
  );
}
