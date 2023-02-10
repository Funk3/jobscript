import { createContext, useState, useContext } from "react";
import axios from "axios";

export const ResumeContext = createContext();

export function ResumeProvider(props) {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState();

  // user selects file. state for setFile & setFilename are updated with file name
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
        `api/pdf/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // returned data is saved as resume & updates uploadedFile state
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

  const providerData = { file, filename, uploadedFile, onChange, onSubmit, setUploadedFile };

  return (
    <ResumeContext.Provider value={providerData}>
      {props.children}
    </ResumeContext.Provider>
  );
}

export const useResumeContext = () => useContext(ResumeContext);