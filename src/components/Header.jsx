import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { faHexagonNodesBolt, faPrint } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useReactToPrint } from "react-to-print";

import { CohereClient } from "cohere-ai";
import API_KEY from "../Api";
const cohere = new CohereClient({ token: API_KEY });

export default function Header({ onFormChange, cvRef }) {
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
  });

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
        <button
          onClick={() => {
            handlePrint();
          }}
        >
          <FontAwesomeIcon icon={faPrint} className="fa" />
        </button>
        <button>
          <FontAwesomeIcon icon={faHexagonNodesBolt} className="fa" />
        </button>
      </div>
    </div>
  );
}
