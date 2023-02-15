import { saveAs } from 'file-saver';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';

export default function Download() {
  const { coverLetterText } = useCoverLetterContext();

  const handleDownload = () => {
    const date = new Date();
    let blob = new Blob(
      [coverLetterText],
      {
        type: 'text/plain;charset=utf-8',
      },
      { autoBom: true }
    );
    saveAs(blob, `coverletter${date.toLocaleString()}`);
  };

  return (
    <button className='coverletter-btn' onClick={handleDownload}>
      <i className="fa-solid fa-download"></i>
      Download
    </button>
  );
}
