import { Container} from 'react-bootstrap';
import React from 'react';
import Disposable from '../components/DisposableChart.js';


const Home = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <Disposable/>
            </Container>
        </div>
    );
};

export default Home;