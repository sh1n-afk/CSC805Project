import { Col, Row, Card, Container, Image } from "react-bootstrap";
import MeanMedianChartIncome from "./MeanMedianChartIncome";
import Pie from "../components/Pie"

const IncomeChart = () => {
    return (
        <div style={{ background: "#191a1b" }} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <br />
                <br />
                <br />
                <Card style={{ background: "#5c3f9e", borderRadius: "40px" }}>
                    <Row className="align-items-center viewport-height mb-3">
                        <Col md={7}>
                            <Pie />
                        </Col>
                        <Col md={5}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 style={{ color: "#e7c06b", padding: "0.5em" }} className='fw-light text-break'>
                                The pie chart displays the mean income of individuals over several years, ranging from 1977 to 2020/21. Each slice represents a year and its corresponding mean income. The chart shows that the mean income has increased steadily over the years, with a few fluctuations. The highest mean income is observed in the year 2020/21, while the lowest mean income is seen in the year 1977. The pie chart is color-coded, with each slice having a different shade of color. The legend on the right side of the chart shows the corresponding year for each color. Overall, the chart provides a clear visualization of the changes in mean income over the years.
                            </h4>
                        </Col>
                    </Row>
                    <Row className="align-items-center viewport-height">
                        <Col md={7}>
                            <MeanMedianChartIncome />
                        </Col>
                        <Col md={5}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 style={{ color: "#e7c06b", padding: "0.5em", fontSize: "27px" }} className='fw-light text-break'>
                                The line chart shows the distribution of average household mean and median income in UK over the years from 1975 to 2020. The line chart shows how the median income has increased during the 10 years leading up to the financial year ending 2020. Median and mean real equivalised household disposable income of individuals, UK for the following years. The estimates of income for the years were being adjusted for under coverage of top earners.
                            </h4>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default IncomeChart;