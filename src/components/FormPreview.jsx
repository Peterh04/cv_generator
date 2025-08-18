import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doe from "../assets/doe.jpg";
import { useRef, useState } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/formPreview.css";
import { forwardRef } from "react";

faPlus;

const FormPreview = forwardRef(({ formData, schools, works }, ref) => {
  const [currentImage, setCurrentImage] = useState(doe);
  const fileInput = useRef(null);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCurrentImage(url);
    }
  };
  return (
    <div ref={ref}>
      <div className="previewFormContainer">
        <div className="cv-profileSection">
          <div className="cv-header">
            <h1 className="firstName">{formData.firstName.toUpperCase()}</h1>
            <h1 className="lastName">{formData.lastName.toUpperCase()}</h1>
          </div>
          <div className="cv-job-header">
            <h3 className="jobTitle">{formData.jobTitle}</h3>
          </div>
          <div className="cv-contacts">
            {formData.userEmail && (
              <h3 className="userEmail contact">
                <span className="fa-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} className="fa" />
                </span>
                {formData.userEmail}
              </h3>
            )}
            {formData.userPhone && (
              <h3 className="userPhone contact">
                <span className="fa-wrapper">
                  <FontAwesomeIcon icon={faPhone} className="fa" />
                </span>
                {formData.userPhone}
              </h3>
            )}
            {formData.userAddress && (
              <h3 className="userAddress contact">
                <span className="fa-wrapper">
                  <FontAwesomeIcon icon={faLocationDot} className="fa" />
                </span>
                {formData.userAddress}
              </h3>
            )}
          </div>

          <div className="cv-education">
            {schools.length > 0 && (
              <>
                <h3 className="snuggly-header">Education</h3>

                <ul className="list school-list">
                  {schools.map((school) => (
                    <li key={school.id}>
                      <h3>
                        {new Date(school.schoolStartDate).getFullYear()} -{" "}
                        {new Date(school.schoolEndDate).getFullYear()}
                      </h3>
                      <h3>{school.schoolName}</h3>
                      <h3 className="fieldStudy">{school.fieldStudyName}</h3>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="cv-work-experience">
          <div className="profile-container">
            <img src={currentImage} alt="resume_img" className="resume_img" />
            <button className="imageBtn" onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faPlus} />
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleFileChange}
            ></input>
          </div>
          <div className="timeline-container">
            {works.length > 0 && (
              <h2 className="snuggly-header">Experiences</h2>
            )}

            {works.map((work) => (
              <div key={work.id} className="timeline-item">
                <div className="timeline-column">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>

                <div className="content">
                  <h3 className="date">
                    {new Date(work.jobStartDate).getFullYear()} -{" "}
                    {new Date(work.jobEndDate).getFullYear()}
                  </h3>
                  <h3>{work.companyName}</h3>
                  <h3>{work.jobTitle}</h3>
                  <h3 className="jobDescription">{work.jobDescription}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormPreview;
