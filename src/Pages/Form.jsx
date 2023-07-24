import { useState } from "react";
import { Review } from "../components";
const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <div></div>;
      case 2:
        return <div></div>;
      case 3:
        return <div></div>;
      case 4:
        return <div></div>;
      case 5:
        return <div></div>;
    }
  };
  return (
    <section className="w-full sm:px-20 px-6 flex flex-col justify-center items-center bg-background_grey_color">
      <form className="flex flex-col items-center justify-center mt-[11.5rem] mb-[27rem] w-full">
        {/* {renderForm()} */}
        <Review />
        <div className="w-full max-w-[66rem] mt-14 flex items-center justify-between">
          <button className="rounded-[0.5rem] border border-border_color py-4 px-6 bg-white font-inter text-[1rem] font-[500] text-light_gray_color leading-normal w-28">
            Previous
          </button>
          <button className="rounded-[0.5rem] border bg-purple_color border-border_color py-4 px-6 font-inter text-[1rem] font-[500] text-white leading-normal w-28">
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
