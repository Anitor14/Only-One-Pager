import { useState } from "react";
import { Geography, Design, Communication, Business } from "../components";
import { useNavigate } from "react-router-dom";
import motivationImage1 from "../assets/images/motivationImageOne.png";
import motivationImage2 from "../assets/images/motivation-image-five.png";
import motivationImage3 from "../assets/images/motivation-image-three.png";
import motivationImage4 from "../assets/images/motivation-image-seven.png";
import Motivation from "../components/Form/Motivation";

const motivationData = [
  {
    image: motivationImage1,
    quote: "Keep going, you're on the right track!",
  },
  {
    image: motivationImage2,
    quote: "Let's journey together, step by step",
  },
  {
    image: motivationImage3,
    quote: "Keep the momentum, great things are ahead.",
  },
  {
    image: motivationImage4,
    quote: "Almost there! The cookies are just a click away",
  },
];
const Form = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    business_details: "",
    logo: "",
    color: "",
    font: "",
    email: "",
    social: "",
    language: "",
    map: "",
    domain: "",
  });

  const [nameIsValid, setNameIsValid] = useState(true);
  const [businessDetailsIsValid, setBusinessDetailsIsValid] = useState(true);
  const [languageIsValid, setLanguageIsValid] = useState(true);

  const motivationDatum = motivationData[currentStep - 1];
  const isStep2Valid =
    formData.logo.trim() !== "" &&
    formData.color.trim() !== "" &&
    formData.font.trim() !== "";
  const isStep3Valid =
    formData.email.trim() !== "" && formData.social.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 4) {
      const isLanguageValid = formData.language.trim() !== "";
      if (!isLanguageValid) {
        setLanguageIsValid(isLanguageValid);
      } else {
        console.log(formData);
        navigate("/payment");
      }
    }
  };

  const handleSelectLanguage = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      language: value,
    }));
    setLanguageIsValid(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "name") {
      setNameIsValid(true);
    }
    if (name === "business_details") {
      setBusinessDetailsIsValid(true);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      const isNameValid = formData.name.trim() !== "";
      const isBusinessDetailsValid = formData.business_details.trim() !== "";
      if (isNameValid && isBusinessDetailsValid) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        setNameIsValid(isNameValid);
        setBusinessDetailsIsValid(isBusinessDetailsValid);
      }
    } else if (
      (currentStep === 2 && isStep2Valid) ||
      (currentStep === 3 && isStep3Valid)
    ) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <Business
            handleInputChange={handleInputChange}
            formData={formData}
            nameIsValid={nameIsValid}
            businessDetailsIsValid={businessDetailsIsValid}
          />
        );
      case 2:
        return (
          <Design handleInputChange={handleInputChange} formData={formData} />
        );
      case 3:
        return (
          <Communication
            handleInputChange={handleInputChange}
            formData={formData}
          />
        );
      case 4:
        return (
          <Geography
            handleInputChange={handleInputChange}
            formData={formData}
            handleSelectLanguage={handleSelectLanguage}
            languageIsValid={languageIsValid}
          />
        );
    }
  };
  return (
    <section className="w-full px-20 max-sm:px-6 flex flex-col justify-center items-center bg-background_grey_color">
      <Motivation {...motivationDatum} />
      <form className="flex flex-col items-center justify-center mt-[11.5rem] mb-[12rem] sm:mb-[24rem] w-full">
        {renderForm()}
        <div className="w-full max-w-[55rem] mt-6 flex items-center justify-between">
          <button
            className={` ${
              currentStep === 1 ? "invisible" : "block"
            } rounded-[0.5rem] border border-border_color py-2 px-6 bg-white font-inter text-[1rem] font-[500] text-purple_color leading-normal w-28 `}
            onClick={handlePrevious}
          >
            Previous
          </button>
          {currentStep == 4 ? (
            <button
              className={`hover:bg-[#fff] transform transition-[all_0.25s] active:translate-y-[-0.25em] active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] hover:text-[#7a5af8] hover:border-[1.5px] hover:border-purple_color rounded-[0.5rem] border bg-purple_color border-border_color py-2 px-6 font-inter text-[1rem] font-[500] text-white leading-normal w-28   `}
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="hover:bg-[#fff] transform transition-[all_0.25s] active:translate-y-[-0.25em] active:shadow-[0_0.5em_0.5em_-0.4em_#7a5af8] hover:text-[#7a5af8] hover:border-[1.5px] hover:border-purple_color rounded-[0.5rem] border bg-purple_color border-border_color py-2 px-6 font-inter text-[1rem] font-[500] text-white leading-normal w-28 "
              onClick={handleNext}
            >
              Continue
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
