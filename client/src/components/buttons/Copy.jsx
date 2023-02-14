import { useManageCoverLetterContext } from "providers/ManageCoverLetterProvider";

export default function Copy() {
  const { handleCopy } = useManageCoverLetterContext();

  return (
    <>
      <button className="coverletter-btn" onClick={handleCopy}>
        <i className="fa-regular fa-copy"></i>
        Copy
      </button>
    </>
  );
}
