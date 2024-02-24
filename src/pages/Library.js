import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenreBar from "../components/GenreBar";
import AuthorBar from "../components/AuthorBar";
import BookList from "../components/BookList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAuthors, fetchBooks, fetchGenres} from "../http/bookAPI";
import Pages from "../components/Pages";

const Library = observer(() => {
    const {book} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data))
        fetchAuthors().then(data => book.setAuthors(data))
        fetchBooks(null, null, 1, 2).then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchBooks(book.selectedGenre.id, book.selectedAuthor.id, book.page, 3).then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [book.page, book.selectedGenre, book.selectedAuthor,])

    return (
        <Container style={{padding: '5px', marginBlockStart: '50px'}}>
            <Row className="mt-2">
                <Col md={3}>
                    <GenreBar/>
                </Col>
                <Col md={9}>
                    <AuthorBar/>
                    <BookList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Library;