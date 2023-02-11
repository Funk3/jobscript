import React from "react";

import { useResumeContext } from "../providers/ResumeProvider";

export default function InputResume() {
  const { filename, uploadedFile, onChange, onSubmit } = useResumeContext();

  return (
    <section className="rhs-input-resume-section">
      <h3>1. Upload resume PDF </h3>
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          {!filename ? (
            <>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile"> Choose file</label>
            </>
          ) : (
            <>
              {filename}
            </>
          )}
          <input type="submit" value="Upload" className="upload" />
        </div>
      </form>

      <div>
        {/* if file is uploaded then file is placed in text area if no file then sets empty text area  */}
        {uploadedFile ? (
          <textarea
            id="uploaded-resume"
            defaultValue={uploadedFile}
      
          ></textarea>
        ) : (
          <textarea
            id="pasted-resume"
            defaultValue=""
            placeholder="Or Copy and paste the contents of your resume here"
  
          ></textarea>
        )}
      </div>
    </section>
  );
}
