import "../styles/form.css";
import "../styles/PersonalInfo.css";
import FormInputs from "../components/FormInputs";
export default function PersonalInfoForm({ formData, setFormData }) {
  const handleFirstName = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };

  const handleJobTitle = (e) => {
    setFormData({ ...formData, jobTitle: e.target.value });
  };

  const handleEmail = (e) => {
    setFormData({ ...formData, userEmail: e.target.value });
  };

  const handlePhone = (e) => {
    setFormData({ ...formData, userPhone: e.target.value });
  };

  const handleAddress = (e) => {
    setFormData({ ...formData, userAddress: e.target.value });
  };
  return (
    <form className="formWrapper">
      <h4>Personal Information</h4>
      <h5>About you</h5>

      <div className="formInputs">
        <FormInputs
          idName={"first_name"}
          labelTitle={"First Name"}
          inputType={"text"}
          placeHolder={"John"}
          change={handleFirstName}
          value={formData.firstName}
        />

        <FormInputs
          idName={"last_name"}
          labelTitle={"Last Name"}
          inputType={"text"}
          placeHolder={"Doe"}
          change={handleLastName}
          value={formData.lastName}
        />

        <FormInputs
          idName={"job_title"}
          labelTitle={"Job Title"}
          inputType={"text"}
          placeHolder={"Software developer"}
          change={handleJobTitle}
          value={formData.jobTitle}
        />

        <FormInputs
          idName={"user_email"}
          labelTitle={"Email"}
          inputType={"email"}
          placeHolder={""}
          change={handleEmail}
          value={formData.userEmail}
        />

        <FormInputs
          idName={"user_phone"}
          labelTitle={"Phone Number"}
          inputType={"tel"}
          placeHolder={""}
          change={handlePhone}
          value={formData.userPhone}
        />

        <FormInputs
          idName={"user_address"}
          labelTitle={"Address"}
          inputType={"text"}
          placeHolder={""}
          change={handleAddress}
          value={formData.userAddress}
        />
      </div>
    </form>
  );
}
