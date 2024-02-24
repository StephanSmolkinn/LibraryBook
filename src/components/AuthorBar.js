import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const AuthorBar = observer(() => {
    const {book} = useContext(Context)

    return (
        <Row className="d-flex" style={{color: 'dark', padding: 10}}>
            {book.authors.map(author =>
                <Card
                    style={{cursor:'pointer'}}
                    key={author.id}
                    className="p-3"
                    onClick={() => book.setSelectedAuthor(author)}
                    border={author.id === book.selectedAuthor.id ? 'dark' : 'light'}
                >
                    {author.name}
                </Card>
            )}
        </Row>
    );
});

export default AuthorBar;
