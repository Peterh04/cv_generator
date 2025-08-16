import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doe from "../assets/doe.jpg";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/formPreview.css";

export default function FormPreview({ formData, schools, works }) {
  return (
    <div>
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
                <h2 className="snuggly-header">Education</h2>

                <ul className="list school-list">
                  {schools.map((school) => (
                    <li key={school.id}>
                      <h3>
                        {new Date(school.schoolStartDate).getFullYear()}{" "}
                        <span>-</span>{" "}
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
            <img src={doe} alt="resume_img" className="resume_img" />
          </div>
          <div className="timeline-container">
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
}
