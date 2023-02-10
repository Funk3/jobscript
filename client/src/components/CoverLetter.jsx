import React from "react";
import Save from "./buttons/Save";
import Download from "./buttons/Download";
import { useCoverLetterContext } from "../providers/CoverLetterProvider";

export default function CoverLetter({fetchJobData}) {
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

            <section className="manage-cl-buttons">
              <Save fetchJobData={fetchJobData} />
              <button> Copy</button>
              <Download />
            </section>
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
