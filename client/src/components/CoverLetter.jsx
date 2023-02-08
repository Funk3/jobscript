import React, { useContext } from "react";

import {CoverLetterContext} from "../providers/CoverLetterProvider";

export default function CoverLetter() {

  const {coverLetterText, handleChange} = useContext(CoverLetterContext)


  // const [coverLetterText, setCoverLetterText] = useState(
  //   "Default cover letter textfrom state"
  // );

  // const handleChange = (newCoverLetterText) => {
  //   setCoverLetterText(newCoverLetterText);
  // };
  //edit buttons might need to be their own components as they do different things? or helpers to direct onClick
  return (
    <div className="rhs-cover-letter">
      {coverLetterText ? (
        <form>
          <textarea
            defaultValue={coverLetterText}
            onChange={(event) => handleChange(event.target.value)}
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
      ) : (
        <p>Cover letter not loaded</p>
      )}
    </div>
  );
}
