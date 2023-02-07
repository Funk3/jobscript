import React, {useState} from "react";

export default function CustomTone() {
  //deconstruct provider data here

  //move this logic into the provider
  const [customTone, setCustomLength] = useState("Default");

  const handleChange = (newLength) => {
    setCustomLength(newLength);
  };

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
