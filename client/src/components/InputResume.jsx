import React, { useState } from "react";
import axios from "axios";

export default function InputResume() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState();

  // user selects file state for setFile & setFilename are updated with file name
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // user submits then axios post req is sent to backend
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // returned data is saved as resume & update uploadedFile state
      const resume = res.data;
      setUploadedFile(resume.trim());

      console.log("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  console.log(uploadedFile);

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
          ) : 
          <textarea
          id="pasted-resume"
          placeholder="Or Copy and paste the contents of your resume here"
          rows="5"
          cols="33"
        ></textarea>}
        </form>
      </div>
    </section>
  );
}
