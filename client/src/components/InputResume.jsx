import React, { useContext } from "react";

import { ResumeContext } from "../providers/ResumeProvider";

export default function InputResume() {
  const { file, filename, uploadedFile, onChange, onSubmit } =
    useContext(ResumeContext);

  return (
    <section className="rhs-input-resume-section">
      <h3>Upload your resume here</h3>
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block"
        />
      </form>

      <div>
        <form>
          {/* if file is uploaded then file is placed in text area if no file then sets empty text area  */}
          {uploadedFile ? (
            <textarea
              id="uploaded-resume"
              defaultValue={uploadedFile}
              rows="5"
              cols="33"
            ></textarea>
          ) : (
            <textarea
              id="pasted-resume"
              placeholder="Or Copy and paste the contents of your resume here"
              rows="5"
              cols="33"
            ></textarea>
          )}
        </form>
      </div>
    </section>
  );
}
