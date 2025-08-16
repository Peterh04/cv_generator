import { useState } from "react";
import FormInputs from "./FormInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "../styles/wrapper.css";
import "../styles/workExperience.css";

export default function WorkExperienceForm({ works, setWorks }) {
  const [work, setWork] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    jobStartDate: "",
    jobEndDate: "",
    id: "",
  });
  const handleCompanyName = (e) => {
    setWork({ ...work, companyName: e.target.value });
  };

  const handleJobTitle = (e) => {
    setWork({ ...work, jobTitle: e.target.value });
  };

  const handleJobDescription = (e) => {
    setWork({ ...work, jobDescription: e.target.value });
  };

  const handleJobStartDate = (e) => {
    setWork({ ...work, jobStartDate: e.target.value });
  };
  const handleJobEndDate = (e) => {
    setWork({ ...work, jobEndDate: e.target.value });
  };

  const addWork = (work) => {
    const newWork = {
      ...work,
      id: crypto.randomUUID(),
    };

    setWorks([...works, newWork]);
  };

  const deleteWork = (id) => {
    const newWorks = works.filter((work) => work.id !== id);
    setWorks(newWorks);
  };
  return (
    <form className="formWrapper">
      <h4>Experiences</h4>
      <h5>Add your work Experiences</h5>

      <div className="formInputs">
        <FormInputs
          idName={"company_name"}
          labelTitle={"Company Name"}
          inputType={"text"}
          change={handleCompanyName}
          value={work.companyName}
        />

        <FormInputs
          idName={"job_type"}
          labelTitle={"Job Title"}
          inputType={"text"}
          change={handleJobTitle}
          value={work.jobTitle}
        />

        <div className="job-description-label">
          <label htmlFor="job_description">Job Description</label>
          <textarea
            id="job_description"
            name="job_description"
            onChange={handleJobDescription}
            value={work.jobDescription}
          ></textarea>
        </div>

        <FormInputs
          idName={"job_startDate"}
          labelTitle={"Start Date"}
          inputType={"date"}
          change={handleJobStartDate}
          value={work.jobStartDate}
        />

        <FormInputs
          idName={"job_EndDate"}
          labelTitle={"End Date"}
          inputType={"date"}
          change={handleJobEndDate}
          value={work.jobEndDate}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          addWork(work);
        }}
      >
        Add
      </button>

      <div className="list-preview">
        {works.length == 0 ? (
          <p>No Work history...</p>
        ) : (
          works.map((work) => (
            <div className="individual-list-preview" key={work.id}>
              <h3>
                {work.companyName} - {work.jobTitle}
              </h3>
              <button>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="fa"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteWork(work.id);
                  }}
                />
              </button>
            </div>
          ))
        )}
      </div>
    </form>
  );
}
