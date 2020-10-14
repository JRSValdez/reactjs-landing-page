import React from 'react';
import { Col, Row } from 'reactstrap';

const AppCard = ({number,title,desc, className}) => {
    return (
        <div className={`app-card ${className}`}>
            <Row xs={1} sm={1} md={1} lg={1}>
                <Col>
                    <div className='app-card-circle mx-auto'>
                        {number}
                    </div>
                </Col>
                <Col>
                    <p className='app-card-title'>
                        {title}
                    </p>
                </Col>
                <Col>
                <p className='app-card-description'>
                    {desc}
                </p>
                </Col>
            </Row>
        </div>
    )
}

export default AppCard
