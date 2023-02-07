import { createContext, useState } from "react";
import axios from "axios";

export const ResumeContext = createContext();

export default function ResumeProvider(props) {
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

  const providerData = { file, filename, uploadedFile, onChange, onSubmit };

  return (
    <ResumeContext.Provider value={providerData}>
      {props.children}
    </ResumeContext.Provider>
  );
}
