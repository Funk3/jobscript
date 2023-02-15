//Reduces the nesting in AppPage.jsx

import { CustomToneProvider } from "./CustomToneProvider";
import { ResumeProvider } from "./ResumeProvider";
import { CoverLetterProvider } from "./CoverLetterProvider";
import { JobDescProvider } from "./JobDescProvider";
import { ManageCoverLetterProvider } from "./ManageCoverLetterProvider";

export default function AppPageProvider(props) {
  return (
    <CoverLetterProvider>
      <CustomToneProvider>
        <JobDescProvider>
          <ResumeProvider>
            <ManageCoverLetterProvider>
              {props.children}
            </ManageCoverLetterProvider>
          </ResumeProvider>
        </JobDescProvider>
      </CustomToneProvider>
    </CoverLetterProvider>
  );
}
