import { Container } from "react-bootstrap";
import sonyLogo from "../assets/sonyLogo.png";
import vrizeLogo from "../assets/vrizeLogo.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import StarIcon from "@mui/icons-material/Star";

import "../styles/css/Work.css";

const Work = () => {
  return (
    <>
      <Container className="work-main">
        <Container className="work-title">
          <h2>Work Experience 🛠️</h2>
          <p>My career path</p>
        </Container>

        <Container className="work-body">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2022 - August 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkTwoToneIcon />}
            >
              <img alt="sony" src={sonyLogo} height={50} />
              <br />
              <h3 className="vertical-timeline-element-title">
                Sony India Software Center
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Software Engineer
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Bangalore, IN
              </h6>
              <p>
                <ul>
                  <li>
                    Revamped multi-page web app into a single-page design,
                    enhancing performance and user engagement.
                  </li>
                  <li>
                    Developed a single-page app for real-time employee status
                    tracking (WFH, WFO, Leave) on AWS. Implemented an Active
                    Directory authentication system for enhanced security and
                    efficiency.
                  </li>
                  <li>
                    Learned .NET framework and integrated API functionality into
                    the Viewing Ex App.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="February 2022 - July 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkTwoToneIcon />}
            >
              <img alt="vrize" src={vrizeLogo} height={50} />

              <h3 className="vertical-timeline-element-title">
                Vrize Solutions Pvt. Ltd
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Software Engineer Intern
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Bangalore, IN
              </h6>

              <p>
                <ul>
                  <li>
                    Utilized problem-solving skills to develop end-to-end
                    websites with HTML, JavaScript, React.js, and Django Rest
                    framework. Hosted on AWS EC2, optimized components for
                    enhanced performance.
                  </li>
                  <li>
                    Developed RESTful API for user authentication and dynamic
                    data serving to JavaScript frontend.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
      </Container>
    </>
  );
};
export default Work;
