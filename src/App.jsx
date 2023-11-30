import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 6000,
    expectedReturn: 6,
    duration: 10
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInputValue={userInput} onChangeUserValue={handleChange} />
      <Result userInputValue={userInput} />
    </>
  );
}

export default App;
