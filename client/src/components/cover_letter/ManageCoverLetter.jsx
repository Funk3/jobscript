import React from "react";
import Save from "../buttons/Save";
import Download from "../buttons/Download";
import Copy from "../buttons/Copy";
import { useManageCoverLetterContext } from "providers/ManageCoverLetterProvider";

export default function ManageCoverLetter() {
  const {
    saveSuccess,
    saveFailure,
    saveStateClass,
    copyStateClass,
    copySuccess,
  } = useManageCoverLetterContext();

  return (
    <>
      {saveSuccess ? (
        <p className={saveStateClass}>{saveSuccess}</p>
      ) : (
        <p className={saveStateClass}>{saveFailure}</p>
      )}

      {copySuccess && <p className={copyStateClass}>{copySuccess}</p>}
      <section className="manage-cl-buttons">
        <Save />
        <Copy />
        <Download />
      </section>
    </>
  );
}
