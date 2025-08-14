import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { faHexagonNodesBolt, faPrint } from "@fortawesome/free-solid-svg-icons";

faHexagonNodesBolt;
export default function Header({ active, setActive }) {
  return (
    <div className="header">
      <h2>CV Generator</h2>
      <div className="headerBtns">
        <button>Personal information |</button>
        <button>Education |</button>
        <button>Experience |</button>
        <button>Skills</button>
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
