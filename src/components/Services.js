import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css";
import { serviceCards } from "../constants/ServicesData.js"; // Import service card data

export default function HomeCards() {
  // Define animation variants for card appearance
  const cardVariants = {
    initial: { opacity: 0, y: 50 }, // Start hidden and moved down
    animate: { opacity: 1, y: 0 }, // Animate to visible and normal position
    transition: { duration: 0.5, viewport: { once: true } }, // Smooth transition effect
  };

  return (
    <Container fluid className="home-cards-container my-4">
      <h1 className="title">Services</h1>
      <Row className="g-4 justify-content-center">
        {serviceCards.map((card, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            className="d-flex"
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              transition={{ ...cardVariants.transition, delay: card.delay }}
              variants={cardVariants}
              className="w-100"
            >
              {/* Service Card Structure */}
              <Card className="shadow custom-card w-100 h-100 d-flex flex-column">
                <CardImg
                  top
                  src={card.image}
                  alt={`${card.title} service`}
                  className="card-img"
                />
                <CardBody className="d-flex flex-column flex-grow-1">
                  <CardTitle className="card-txt">{card.title}</CardTitle>
                  <CardText className="text-center flex-grow-1">
                    {card.description}
                  </CardText>
                  <CardText>
                    <span className="sub-hed">Services</span>
                    <ul className="list">
                      {card.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
