import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shokhanov Maksat </span>
            from <span className="purple"> Astana, Kazakhstan.</span>
            <br />
            I’m a passionate web developer with a strong focus on front-end technologies, responsive design, and clean code.
            <br />
            Currently, I’m actively building real-world projects and developing my skills in React.js, WordPress, and modern UI/UX practices.
            <br />
            I’m self-driven, detail-oriented, and open to freelance and remote opportunities where I can contribute, learn, and grow.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">f00bee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
