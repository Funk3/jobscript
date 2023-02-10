import React from "react";
import Save from "./buttons/Save";
import {useCoverLetterContext} from "../providers/CoverLetterProvider";

export default function CoverLetter() {

  const {coverLetterText, handleChange} = useCoverLetterContext()

  return (
    <div className="rhs-cover-letter">
      {coverLetterText && 
        <form>
          <textarea
            className="rhs-textarea"
            value={coverLetterText}
            onChange={(event) => handleChange(event.target.value)}
            rows="5"
            cols="33"
          ></textarea>

          <section className="manage-cl-buttons">
            <Save/>
            <button> Edit </button>
            <button> Copy</button>
            <button> Download/Save to FS </button>
          </section>
        </form>
        }
    </div>
  );
}
