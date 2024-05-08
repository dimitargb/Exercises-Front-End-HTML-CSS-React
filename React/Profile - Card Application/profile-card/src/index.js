import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Image() {
  return <img className="avatar" src="me.jpg" alt="myImage" />;
}

function Intro() {
  return (
    <div>
      <h1>Dimitar Damianov</h1>
      <p>
        A dynamic and result-oriented person with a passion for programming,
        striving to achieve every goal I set for my self.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightblue" />
      <Skill skill="HTML+CSS" emoji="😉" color="red" />
      <Skill skill="JavaScript" emoji="😍" color="yellow" />
      <Skill skill="Web Development" emoji="😉" color="lightgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
