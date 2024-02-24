import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAuthor from "../components/modals/CreateAuthor";
import CreateBook from "../components/modals/CreateBook";
import CreateGenre from "../components/modals/CreateGenre";

const Admin = () => {
    const [authorVisible, setAuthorVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [bookVisible, setBookVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setGenreVisible(true)}
            >
                Додати жанр
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAuthorVisible(true)}
            >
                Додати автора
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBookVisible(true)}
            >
                Додати книжку
            </Button>
            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
        </Container>
    );
};

export default Admin;