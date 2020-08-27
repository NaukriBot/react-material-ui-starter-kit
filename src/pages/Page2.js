import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

const styles = {
    root: {
        marginTop: 30
    }
}

class Page2 extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Container>
                    <Row>
                        <Col md={12}>
                        <h1>Page2 Page</h1>
                        </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Page2;