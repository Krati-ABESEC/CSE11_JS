import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Greeting from "./Greeting";
import Student from "./Student";
function App() {
  return (
    <>
      <Greeting />
      <Student
        name1={"Rahul Sharma"}
        course1={"Computer Science"}
        marks1={9.5}
        name2={"Anita Verma"}
        course2={"Electronics"}
        marks2={9.2}
        name3={"Rohan Gupta"}
        course3={"Information Technology"}
        marks3={8.9}
      />
    </>
  );
}

export default App;
