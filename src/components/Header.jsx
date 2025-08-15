import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { faHexagonNodesBolt, faPrint } from "@fortawesome/free-solid-svg-icons";

faHexagonNodesBolt;
export default function Header({ onFormChange }) {
  return (
    <div className="header">
      <h2>CV Generator</h2>
      <div className="headerBtns">
        <button onClick={() => onFormChange("personal")}>
          Personal information |
        </button>
        <button onClick={() => onFormChange("education")}>Education |</button>
        <button onClick={() => onFormChange("experience")}>Experience |</button>
        <button onClick={() => onFormChange("skills")}>Skills</button>
      </div>
      <div className="actionButtons">
        <button>
          <FontAwesomeIcon icon={faPrint} className="fa" />
        </button>
        <button>
          <FontAwesomeIcon icon={faHexagonNodesBolt} className="fa" />
        </button>
      </div>
    </div>
  );
}
