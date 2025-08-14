import { useState } from "react";
import FormPreview from "./components/FormPreview";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Wrapper from "./components/Wrapper";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    userEmail: "",
    userPhone: "",
    userAddress: "",
  });
  const [active, setActive] = useState(0);
  return (
    <div>
      <Header active={active} setActive={setActive} />
      <Wrapper>
        <PersonalInfoForm formData={formData} setFormData={setFormData} />
        <FormPreview formData={formData} />
      </Wrapper>
    </div>
  );
}
