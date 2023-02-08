import React, { useContext } from "react";

import { CustomLengthContext } from "../providers/CustomLengthProvider";

export default function CustomLength() {
  
  //decontruct the providerData
  const { customLength, handleChange } = useContext(CustomLengthContext);

  return (
    <section className="custom-length">
      <h3>How long should it be?</h3>
      <form>
        <select
          onChange={(event) => handleChange(event.target.value)}
          defaultValue={{ customLength }}
        >
          <option value="Default">Default</option>
          <option value="Short">Short</option>
          <option value="Long">Long</option>
        </select>
        <h4> Selected Length: {customLength}</h4>
      </form>
    </section>
  );
}
