import React, {useState} from "react";

export default function CoverLetter() {

const [coverLetterText, setCoverLetterText] = useState("Default cover letter text");


  //edit buttons might need to be their own components as they do different things? or helpers to direct onClick
  return (
    <div className="rhs-cover-letter">
      <form>
        <textarea
          defaultValue={coverLetterText}
          rows="5"
          cols="33"
        ></textarea>

        <section className="manage-cl-buttons">
          <button> Save</button>
          <button> Regenerate</button>
          <button> Copy</button>
          <button> Download/Save to FS </button>
        </section>
      </form>
    </div>
  );
}
