import React from "react";

export default function JobListItem() {
  //incomong props = jobTitle and companyName

  return (
    <section
    /* onClick = render cover letter on the right hand side.  */
    >
      <h3> props.jobTitle</h3>
      <h4> props.companyName</h4>

    </section>
  );
}
