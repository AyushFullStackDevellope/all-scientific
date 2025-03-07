import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col, Container } from "reactstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css";

export default function HomeCards() {
    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, viewport: { once: true } }
    };

    const serviceCards = [
        {
            title: "Repair",
            image: "/assets/images/card-image-one.avif",
            description: "Laboratory equipment repair.",
            services: [
                "Initial Assessment",
                "Troubleshooting",
                "Replacement Parts",
                "Documentation with compliance standards",
                "Training and Support",
                "Quality Assurance"
            ],
            delay: 0
        },
        {
            title: "Maintenance",
            image: "/assets/images/card-image-two.avif",
            description: "Proper maintenance extends equipment lifespan and reduces failures.",
            services: [
                "Reduce Utility Usage",
                "Operate more effectively",
                "Replacement Parts",
                "Extend the equipment's lifespan",
                "Documentation of maintenance performed"
            ],
            delay: 0.2
        },
        {
            title: "Installations",
            image: "/assets/images/card-image-three.avif",
            description: "Comprehensive laboratory installations.",
            services: [
                "Assessment",
                "Construction",
                "Design and Planning",
                "Safety and Compliance",
                "Maintenance and Support",
                "Training and Commissioning",
                "Equipment Procurement and Installation"
            ],
            delay: 0.4
        }
    ];

    return (
        <Container fluid className="home-cards-container my-4">
            <h1 className="title">Services</h1>
            <Row className="g-4 justify-content-center">
                {serviceCards.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} className="d-flex">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            transition={{ ...cardVariants.transition, delay: card.delay }}
                            variants={cardVariants}
                            className="w-100"
                        >
                            <Card className="shadow custom-card w-100 h-100 d-flex flex-column">
                                <CardImg 
                                    top 
                                    src={card.image} 
                                    alt={`${card.title} service`} 
                                    className="card-img"
                                />
                                <CardBody className="d-flex flex-column flex-grow-1">
                                    <CardTitle className="card-txt">{card.title}</CardTitle>
                                    <CardText className="text-center flex-grow-1">{card.description}</CardText>
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