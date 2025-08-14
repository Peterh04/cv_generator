import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/formPreview.css";

export default function FormPreview({ formData }) {
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
        </div>
        <div className="cv-work-experience"></div>
      </div>
    </div>
  );
}
