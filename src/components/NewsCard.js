import React from 'react'
import f2 from '../assets/f2.jpg';
import Col from 'react-bootstrap/Col';

function NewsCard({image, description, sport}) {
  return (
    <Col>
        <img src={image} alt="" height={200} width={200} />
        <h5>{description}</h5>
        <p>{sport}</p>
    </Col>
  )
}

export default NewsCard