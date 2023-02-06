import React from "react";

export default function InputResume() {
  return (
    <section className="rhs-input-resume-section">
      <h3>Upload your CV here</h3>
      <button>Upload</button>
      <div>
       <form>
        <textarea placeholder="Or Copy and paste the contents of your resume here" rows="5" cols="33"></textarea>
       </form>
      </div>
    </section>
  );
}
