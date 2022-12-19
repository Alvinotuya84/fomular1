import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function TwitterCard({first}) {
  return (
    <div style={{width:"50%",background:first?"brown":"#1DA1F2"}}>
        <h3 style={{color:first?"white":"brown"}}>Twitter</h3>
        <Row>
            <Col><h5 style={{color:first?"white":"brown"}}>@gmail.com</h5> </Col><Col><p>32 min</p></Col>
        </Row>
        <p style={{color:"white"}}>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, s.</p>
        <p>Retweeted by Name</p>
    </div>
  )
}

export default TwitterCard