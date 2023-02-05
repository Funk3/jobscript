import React from "react";

export default function CoverLetter() {

  //helper function (here or in app.js and pass as prop?) getCoverLetterByJobAppId(jobAppId) that takes in job_app id  and returns string with job_app.cover_letter_text
  // returnedCoverLetterText = getCoverLetterByJobAppId(state.jobappid or props.jobappid?)


  //edit buttons might need to be their own components as they do different things? or helpers to direct onClick
  return (
    <div className="rhs-cover-letter">
      <textarea defaultValue="returnedCoverLetterText"></textarea>

      <section className="manage-cl-buttons">
      <button> Edit</button>
      <button> Save</button>
      <button> Regenerate</button>
      <button> Copy</button>
      <button> Download/Save to FS </button>
      </section>
      
    </div>
  );
}
