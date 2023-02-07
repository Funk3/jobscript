import React, { useState } from "react";
import axios from "axios"

export default function InputResume() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({})
    
    const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath})
      
      console.log('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };


  return (
    <section className="rhs-input-resume-section">
      <h3>Upload your CV here</h3>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>

      <div>
       <form>
        <textarea placeholder="Or Copy and paste the contents of your resume here" rows="5" cols="33"></textarea>
       </form>
      </div>
    </section>
  );
};