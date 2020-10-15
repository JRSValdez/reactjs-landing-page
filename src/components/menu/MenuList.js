import React from 'react';
import {Row,Col} from 'reactstrap';
import MenuCard from '../common/cards/MenuCard';

const MenuList = () => {
    return (
        <Row lg={4} md={2} xs={1}>
            <Col>
                <MenuCard />
            </Col>
            <Col>
                <MenuCard />
            </Col>
            <Col>
                <MenuCard />
            </Col>
            <Col>
                <MenuCard />
            </Col>
        </Row>
    )
}

export default MenuList
