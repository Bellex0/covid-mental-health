import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import Confirm from "./Confirm";
import Success from "./Success";

export default function StepForm() {
// const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/);
// const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);
// Step titles
const labels = [
  "Interest",
  "Second Step",
  "Third Step",
  "Fourth Step",
  "Fifth Step",
  "Confirmation"
];

// const StepForm = () => {
  const [steps, setSteps] = useState(0);
  // const [fields, setFields] = useState(""); 

const [answer, setAnswer] = useState("")
  // interest: "",
  // depression: "", )


// const [interestAnswer, setInterestAnswer] = useState("")

const handleChange = (evt, value) => {
    setAnswer(value)
  }
  // const handleChange = (input) => ({target: {value}}) => {
  //   console.log(value)
  //   setAnswer({
  //     ...answer,
  //     [input]: value
  //   })
  // }
          const quesAnswers = [
              { "interest": answer }
          ]

          console.log(quesAnswers[0])

  // const handleInterestCommited = (evt, val) => {
  //   setAnswer(val)
  // }
  // console.log(answer)

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1);
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1)

  // Handle fields change
  // const handleInterestChange = (input) => ({ target: { value } }) => {
  //   const handleInterestChange = (name) => ({target: {value}}) => {
  //     console.log(name)
  //   setInterestAnswer({
  //     ...interestAnswer, 
  //      [name]:value
  //   })
  // }


  // const handleInterestCommited=(input) => ({target: {value}}) => {
  //   console.log(input)
  //   setAnswer({
  //     ...answer,
  //     [input]: value
  //   })
  // }
  // }
  // const handleInterestChange = (evt, value) => { 
    // setInterestAnswer(value)
  // }

  console.log(answer)
  

  // // //   // Set values to the fields
   // console.log(value)
    //console.log(evt.target)
    //console.log(input)

    // setAnswer({
    //   ...answer,  [evt]: value})
    //...fields,
      // [input]: value
      //input]: value check........................................................................................................................................................ jeez

    // console.log(interestAnswer)
    
  // // //     ...fields,
  // //     // fields: evt.target.nextSibling.nextSibling.value
      // answer: value
  //   });
    

  //console.log(answer)
  

  

  const handleSteps = step => {
    // console.log(answer) 

    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            value={quesAnswers[0]}
            // handleInterestCommited={handleInterestCommited}
            // isError={isError}
            // filedError={filedError}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            // handleChange={handleChange}
            // value={answer}
            // isError={isError}
            // filedError={filedError}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleNext={handleNext}
            handleBack={handleBack}
            // handleChange={handleChange}
            // value={answer}
          />
        );
      case 3:
        return (
          <FourthStep
            handleNext={handleNext}
            handleBack={handleBack}
            // handleChange={handleChange}
            // value={answer}
          />
        );
      case 4:
        return (
          <FifthStep
            handleNext={handleNext}
            handleBack={handleBack}
            // handleChange={handleChange}
            // value={answer}
          />
        );
      case 5:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            value={quesAnswers[0]} //check
          />
        );
      default:
        break;
        }
      };

  // Handle components
  return (
    <Fragment>
      {steps === labels.length ? (
        <Success />
      ) : (
        <Fragment>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </Fragment>
      )}
    </Fragment>
  )
}

// export default StepForm;