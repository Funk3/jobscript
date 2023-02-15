import { useState } from "react";

//Components
import JobList from "./JobList";
import CoverLetter from "./cover_letter/CoverLetter";
import InputResume from "./InputResume";
import InputJobDesc from "./InputJobDesc";
import CustomTone from "./CustomTone";
import GenerateCoverLetter from "./buttons/GenerateCoverLetter";
import Loading from "./Loading";

//Providers
import AppPageProvider from "providers/AppPageProvider";

export default function AppPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AppPageProvider>
        <main className="cards">
          <JobList />
          <div className="center-sections">
            <InputResume />

            <InputJobDesc />

            <CustomTone />

            <GenerateCoverLetter setLoading={setLoading} />
          </div>
          {loading ? <Loading /> : <CoverLetter />}
        </main>
      </AppPageProvider>
    </>
  );
}