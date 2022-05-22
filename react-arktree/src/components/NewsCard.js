/* 
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import filler from "../newsImages/920115.jpg"
import React from 'react'
import { useState, useEffect } from 'react'


export default function NewsCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
 
    useEffect(() => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_75489edf1132d60b4efdf82a4d573bffc247&q=lost%20ark&language=en') // fetchs json
            .then(response => response.json())  //response.json takes a json and parses it to produce a javascript object
            .then(data => console.log(data.results))
            .catch((error) => console.log(error));
            }, []) 
        return (
            <Row xs='1' lg='2'>
                <Col>
                    <Card className="m-4 news-image">
                        <Card.Img variant="top" src={filler} />
                        <Card.Body>
                            <Card.Title className="text-primary">test</Card.Title>
                            <Card.Text className="text-primary">

                            </Card.Text>
                            <Card.Text className="text-primary">
                                insert
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
} */