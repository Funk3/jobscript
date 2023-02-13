import React from "react";

import { useCoverLetterContext } from "../../providers/CoverLetterProvider";
import ManageCoverLetter from "./ManageCoverLetter";

export default function CoverLetter() {
  const { coverLetterText, handleChange } = useCoverLetterContext();

  const handleCoverLetterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="rhs-cover-letter">
      {coverLetterText ? (
        <>
          <h3> Your AI Cover Letter: </h3>
          <form onSubmit={handleCoverLetterSubmit}>
            <textarea
              className="rhs-textarea"
              value={coverLetterText}
              onChange={(event) => handleChange(event.target.value)}
              rows="5"
              cols="33"
            ></textarea>
            <p>
              While this cover letter may have done 99% of the work for you, we
              cannot guarantee the accuracy of the AI response.
            </p>
            <p>
              We recommend taking the time to thoroughly check it for errors and
              reformat the letter as needed.
            </p>
           
              <ManageCoverLetter />
  
          </form>
        </>
      ) : (
        <>
          <h3>Your Cover Letter will appear here:</h3>
          <form>
            <textarea
              className="rhs-textarea"
              value=""
              onChange={(event) => handleChange(event.target.value)}
              rows="5"
              cols="33"
            ></textarea>
          </form>
        </>
      )}
    </div>
  );
}
