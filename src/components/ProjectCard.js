import { Container, Card, Button } from "react-bootstrap";
import "../styles/css/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <>
      {/* <Container className="projectCard-main"> */}
      <Card className="projectCard-main" style={{ width: "18rem" }}>
        <Card.Img
          className="projectCard-image"
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button href={props.gitLink} target="_blank" variant="primary">
            Github
          </Button>
        </Card.Body>
        <Card.Footer>{props.techStack}</Card.Footer>
      </Card>
      {/* </Container> */}
    </>
  );
};
export default ProjectCard;
