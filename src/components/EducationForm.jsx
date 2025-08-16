import { useState } from "react";
import FormInputs from "./FormInputs";

import "../styles/educationForm.css";
import "../styles/wrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function EducationForm({ schools, setSchools }) {
  const [school, setSchool] = useState({
    schoolName: "",
    fieldStudyName: "",
    schoolStartDate: "",
    schoolEndDate: "",
    id: "",
  });

  const handleSchoolName = (e) => {
    setSchool({ ...school, schoolName: e.target.value });
  };

  const handleFieldStudyName = (e) => {
    setSchool({ ...school, fieldStudyName: e.target.value });
  };

  const handleSchoolStartDate = (e) => {
    setSchool({ ...school, schoolStartDate: e.target.value });
  };

  const handleSchoolEndDate = (e) => {
    setSchool({ ...school, schoolEndDate: e.target.value });
  };

  const addSchool = (school) => {
    const newSchool = {
      ...school,
      id: crypto.randomUUID(),
    };
    setSchools([...schools, newSchool]);
  };

  const deleteSchool = (id) => {
    const newSchools = schools.filter((school) => school.id !== id);
    setSchools(newSchools);
  };

  return (
    <form className="formWrapper">
      <h4>Education</h4>
      <h5>Add your Education History</h5>

      <div className="formInputs">
        <FormInputs
          idName={"school_name"}
          labelTitle={"School Name"}
          inputType={"text"}
          change={handleSchoolName}
          value={school.schoolName}
        />

        <FormInputs
          idName={"field_study_name"}
          labelTitle={"Field of Study"}
          inputType={"text"}
          change={handleFieldStudyName}
          value={school.fieldStudyName}
        />

        <FormInputs
          idName={"school_startDate"}
          labelTitle={"Start Date"}
          inputType={"date"}
          change={handleSchoolStartDate}
          value={school.schoolStartDate}
        />

        <FormInputs
          idName={"school_EndDate"}
          labelTitle={"End Date"}
          inputType={"date"}
          change={handleSchoolEndDate}
          value={school.schoolEndDate}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          addSchool(school);
        }}
      >
        Add
      </button>

      <div className="list-preview">
        {schools.length == 0 ? (
          <p>No school history...</p>
        ) : (
          schools.map((school) => (
            <div className="individual-list-preview" key={school.id}>
              <h3>{school.schoolName}</h3>
              <button>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="fa"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteSchool(school.id);
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
