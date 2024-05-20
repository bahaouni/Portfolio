import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import b from "../../Assets/Projects/bi3.png";
import cypto from "../../Assets/Projects/cypto.png";
import sec from "../../Assets/Projects/sec.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import zitoun from "../../Assets/Projects/zitoun.png";

import cd from "../../Assets/Projects/cd.gif";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
              title="ChkounZed"
              description={`Live Auction Website with real-time chat.
              ◦ Implemented security measures using Spring Security and JWT, ensuring a safe bidding environment. \n 
              ◦ Developed real-time chat functionality with WebSockets to facilitate communication among bidders.
              Technologies: Next.js, Spring Boot, Spring Security, WebSocket, Docker, PostgreSQL, CI/CD.`}
              
              ghLink="https://github.com/bahaouni/AuctionFront"
              
              demoLink="https://drive.google.com/file/d/13D3lSuatLRw-UlJtA8P8Ar7YzZCgublV/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sec}
              isBlog={false}
              title="HomeSec"
              description="Home Security App using face Recognition .◦ Led implementation of CI/CD pipeline using Azure DevOps for ASP.NET API backend, resulting in a 40%
              reduction in deployment time.
              ◦ Integrated secure authentication with ASP.NET and JWT tokens, ensuring data confidentiality.
              ◦ Developed computer vision algorithms for real-time monitoring with high accuracy.
              Technologies: React Native, ASP.NET, Azure, SQL Server, Flask, OpenCV."
              ghLink="https://github.com/bahaouni/SecurityHome"
              demoLink="https://github.com/bahaouni/SecurityHome"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Loc'express"
              description="Admin dashboard for renting houses webapplication ."
              ghLink="https://github.com/bahaouni/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zitoun}
              isBlog={false}
              title="Estimating olive fruit production of a single olive tree using object recognition "
              description={`Used Yolov8 to train a model that recognizes olives.
              ◦ Collected and annotated a dataset of olive images to train the object detection model.
              ◦ Implemented data augmentation techniques to improve the robustness and accuracy of the model.
              ◦ Evaluated model performance 
             
              Technologies: Python, YOLOv8, OpenCV , robofloww.`}
                            ghLink="https://github.com/bahaouni/ProjetSemestriel4"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cd}
              isBlog={false}
              title="• CI/CD Pipeline Implementation:"
              description="Integrated secrets management to safeguard sensitive data.
              ◦ Implemented vulnerability detection and automated testing for enhanced security.
              ◦ Deployed microservices applications (Spring Boot and Node.js) to Kubernetes.
              Technologies: Jenkins, Docker, Azure, Kubernetes, Sonarqube, Trivy , grafana , Prometheus, nexus , maven .
              ."
              ghLink="https://github.com/bahaouni/kubernetes-devops-security"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cypto}
              isBlog={false}
              title="cypto "
              description="Website that provide crypto news . ◦ Leveraged Binance and TradingView APIs for real-time cryptocurrency prices.
              ◦ Integrated Google Cloud API to fetch crypto-related videos from YouTube.
              "
                         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
