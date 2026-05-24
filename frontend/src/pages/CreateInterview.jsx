import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

function CreateInterview() {

  const [jobDescription, setJobDescription] = useState("");

  const [resume, setResume] = useState("");

  const [selfDescription, setSelfDescription] = useState("");



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log({
      jobDescription,
      resume,
      selfDescription
    });

  };



  return (

    <DashboardLayout>

      <h1>Create Interview</h1>



      <form onSubmit={handleSubmit}>

        <textarea
          placeholder="Paste Job Description"
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        />



        <br />
        <br />



        <textarea
          placeholder="Paste Resume"
          value={resume}
          onChange={(e) =>
            setResume(e.target.value)
          }
        />



        <br />
        <br />



        <textarea
          placeholder="Tell About Yourself"
          value={selfDescription}
          onChange={(e) =>
            setSelfDescription(e.target.value)
          }
        />



        <br />
        <br />



        <button type="submit">
          Generate Interview
        </button>

      </form>

    </DashboardLayout>

  );

}

export default CreateInterview;