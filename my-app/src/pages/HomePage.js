import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import React from 'react';
import Typed from 'typed.js';


const Home = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <Card style={{background: "#5c3f9e", borderRadius: "40px"}}>
                    <Row className="align-items-center viewport-height mb-5">
                        <h1 style={{color: "#e4e3dd", padding: "0.25em", textAlign: "center"}} className="display-1">Visualizing Income and Wealth Data From the UK</h1>
                    </Row>
                    <Row className="align-items-center viewport-height mb-3">
                        <Col md={5}>
                            <h3 style={{color: "#e4e3dd", padding: "0.5em", textAlign: "center"}} className='fw-normal'>Members:<br/> <small className='fw-light'>Preetham Ramesh, Poornank Purohit, and Gautami Gudla</small></h3>
                        </Col>
                        <Col md={7}>
                            <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-normal text-break'>
                                The project aims to create a data visualization system that helps users explore 
                                income and wealth data in the UK, highlighting patterns, trends, and disparities 
                                in the distribution of resources across different regions and
                                demographics. <br/><br/>The system will provide interactive tools to filter, sort, and
                                compare data, allowing users to generate custom views and gain insights into
                                income inequality and poverty in the country.
                            </h4>
                            
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default Home;