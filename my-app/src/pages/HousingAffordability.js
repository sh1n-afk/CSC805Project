import { Row, Col, Container} from 'react-bootstrap';
import React from 'react';
import MapUK from '../components/ChoroplethMap.js';

const Home = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <Row className="align-items-center viewport-height mb-5">
                    <Col md={8}>
                        <MapUK/>
                    </Col>
                    <Col md={4}>
                        <h2 style={{color: "#fff"}}>UK Housing Affordability</h2>
                        <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-light text-break'>
                                        This choropleth map shows affordability indices of housing per local authority group (or county). This is calculated using the median income
                                        and the median house price sold in 2022. This is called a price-to-income ratio. A lower price-to-income ratio indicates greater affordability,
                                        as housing costs are a smaller portion of the household's income. <br/><br/>In general, an affordability index under 3-4 is good while one above 6 is very
                                        high. A higher affordability index does not necessarily mean that house prices are exorbitant but it could also mean that household income is very
                                        low.
                                    </h4>
                    </Col>

                </Row>
                
            </Container>
        </div>
    )
}

export default Home;