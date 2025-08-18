import { useRef, useState } from "react";
import FormPreview from "./components/FormPreview";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Wrapper from "./components/Wrapper";
import EducationForm from "./components/EducationForm";
import initailSchools from "./schools";
import initalWork from "./work";
import WorkExperienceForm from "./components/WorkExperienceForm";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    userEmail: "",
    userPhone: "",
    userAddress: "",
  });

  const [currentForm, setCurrentForm] = useState("personal");
  const [schools, setSchools] = useState(initailSchools);
  const [works, setWorks] = useState(initalWork);

  const cvRef = useRef();

  const getCvText = () => {
    let text = `
    Name: ${formData.firstName} ${formData.lastName}
    Job Title: ${formData.jobTitle}
    Email: ${formData.userEmail}
    Phone: ${formData.userPhone}
    Address: ${formData.userAddress}
    
    Education:
    ${schools
      .map((s) => `${s.name}, ${s.degree}, ${s.startDate} - ${s.endDate}`)
      .join("\n")}
    
    Work Experience:
    ${works
      .map(
        (w) =>
          `${w.company}, ${w.position}, ${w.startDate} - ${w.endDate}\n${w.description}`
      )
      .join("\n")}
  `;
    return text;
  };

  return (
    <div>
      <Header onFormChange={setCurrentForm} cvRef={cvRef} />
      <Wrapper>
        {currentForm === "personal" && (
          <PersonalInfoForm formData={formData} setFormData={setFormData} />
        )}
        {currentForm === "education" && (
          <EducationForm schools={schools} setSchools={setSchools} />
        )}
        {currentForm === "experience" && (
          <WorkExperienceForm works={works} setWorks={setWorks} />
        )}

        <div ref={cvRef}>
          <FormPreview formData={formData} schools={schools} works={works} />
        </div>
      </Wrapper>
    </div>
  );
}
``;
