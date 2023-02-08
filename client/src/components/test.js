{<main>
<Header />
<section>
  {/* render landing page if user is not logged in */}
  {/* eg !currentUser && */} <LandingPage />
  </section>

  <main>
    <JobList />
    <div className="rhs-sections">
      <div className="rhs-user-inputs">
        <ResumeProvider>
          <InputResume />
        </ResumeProvider>
  
        <JobDescProvider>
          <InputJobDesc />
        </JobDescProvider>
  
        <CustomToneProvider>
          <CustomTone />
        </CustomToneProvider>
  
        <CustomLengthProvider>
          <CustomLength />
        </CustomLengthProvider>
      </div>
  
      <Button>Generate Cover Letter</Button>
  
      <CoverLetterProvider>
        <CoverLetter />
      </CoverLetterProvider>
    </div>
  </main>
  
  
  
  
  <Footer />
  </main>}