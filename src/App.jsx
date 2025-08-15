import { useState } from "react";
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

  return (
    <div>
      <Header onFormChange={setCurrentForm} />
      <Wrapper>
        {currentForm === "personal" && (
          <PersonalInfoForm formData={formData} setFormData={setFormData} />
        )}
        {currentForm === "education" && (
          <EducationForm schools={schools} setSchools={setSchools} />
        )}
        {currentForm === "work" && (
          <WorkExperienceForm works={works} setWorks={setWorks} />
        )}
        <FormPreview formData={formData} schools={schools} />
      </Wrapper>
    </div>
  );
}
