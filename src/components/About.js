import { Container } from "react-bootstrap";
import "../styles/css/About.css";

const About = () => {
  return (
    <>
      <Container className="about-main">
        <Container className="about-title">
          <h2>About Me 🙇‍♂️</h2>
          <p>Just a quick glimpse.</p>
        </Container>

        <Container className="about-body">
          <h5>Hello world, I'm Akhil!</h5>
          <br />
          <p>
            As a seasoned software developer, I bring proficiency in TypeScript
            and JavaScript, coupled with expertise in React, Node.js, and
            Express.js frameworks. My commitment to continuous learning is
            evident in my current exploration of backend technologies, aiming to
            evolve into a versatile full-stack developer. Beyond the mainstream,
            I am enhancing my skills in technologies like Three.js, believing in
            the power of diverse expertise in the tech landscape.
          </p>
          <br />
          <p>
            I pride myself on being a swift learner and thrive on collaborative
            client engagements, delivering efficient, scalable, and
            user-friendly solutions to address real-world challenges. I am not
            just a coder; I am a problem solver who navigates corporate
            complexities with a code editor, avoiding jargon overload.
          </p>
          <br />
          <p>
            Whether it's diving into SDE or web development roles, I am ready to
            be your code wrangler, eager to contribute to building innovative
            and impactful solutions. Let's embark on a journey to create
            something extraordinary together!
          </p>
        </Container>

        <Container className="about-skills">
          <h3>Skills: </h3>

          <br />
          <h5>Frontend: </h5>
          <br />
          <h5>Backend: </h5>
        </Container>
      </Container>
    </>
  );
};
export default About;
