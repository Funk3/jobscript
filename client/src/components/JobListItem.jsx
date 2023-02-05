import React from "react";

export default function JobListItem() {
  //incomong props = jobTitle and companyName

  return (
    <section
    /* onClick = render cover letter on the right hand side.  */
    >
      <h2> props.jobTitle</h2>
      <h3> props.companyName</h3>

    </section>
  );
}
