import { Col, Row, Card, Container, Image } from "react-bootstrap";

import disposable from "../pics/disposable.png";

const DisposableChart = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{background: "#5c3f9e", borderRadius: "40px"}}>
                    <Row className="align-items-center viewport-height">
                        <Col md={7}>
                            <Image style={{padding: "20px", borderRadius: "40px"}} src={disposable} fluid/>
                        </Col>
                        <Col md={5}>
                            <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-light text-break'>
                            The stacked bars represent the two variables, "Mean equivalised disposable income" (in green) and "Median equivalised disposable income" (in orange). The height of each bar indicates the value of the respective variable for a specific year. The bars are stacked on horizontally, showing the combined contribution of both variables.
                            <br/><br/>
                            The graph helps visualize the variation of mean and median equivalised disposable income over different years and income categories. It allows comparisons between the income categories within each year and enables tracking trends and changes in income distribution over time.             
                            </h4>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default DisposableChart;