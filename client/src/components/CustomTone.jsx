import React, { useContext } from "react";

import { CustomToneContext } from "../providers/CustomToneProvider";
export default function CustomTone() {

  const { customTone, handleChange } = useContext(CustomToneContext)

  return (
    <section className="custom-tone">
      <h3>What should the tone be? </h3>
      <form>
        <select
          onChange={(event) => handleChange(event.target.value)}
          defaultValue={customTone}
        >
          <option value="Default">Default</option>
          <option value="Friendly">Friendly</option>
          <option value="Professional">Professional</option>
        </select>
        <h4> Selected Tone: {customTone}</h4>
      </form>
    </section>
  );
}