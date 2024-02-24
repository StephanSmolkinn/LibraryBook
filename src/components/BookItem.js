import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {BOOK_ROUTE} from "../utils/consts";

const BookItem = ({book}) => {
    const history = useHistory()
    return (
        <Col style={{margin: '10px'}} md={3} className={"mt-3"} onClick={() => history.push(BOOK_ROUTE + '/' + book.id)}>
            <Card style={{width: 150, cursor: 'pointer', border: 1}}>
                <Image width={150} height={200} src={process.env.REACT_APP_API_URL + book.img}/>
                <div>{book.name}</div>
            </Card>
        </Col>
    );
};

export default BookItem;