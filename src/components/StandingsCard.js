import React from 'react'
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Card } from 'react-bootstrap';
function StandingsCard({points,name,image,teamName,isUnderStanding}) {
  return (

        <Container style={{backgroundColor:"white",border:"1px solid rgb(212, 212, 212)",padding:5,marginRight:0,height:100,
        width:isUnderStanding?"50%":"100%"
        }}>
            <Row>
                <Col>
                  <Image rounded={true} height={50} width={50} src={image}/>

                </Col>
                <Col>
                  <p style={{fontWeight:"bold"}}>{name}</p>

                </Col>
                <Col>

                  <center> <p>{points?points:""}</p></center>

                </Col>
            </Row>
            <Row>
                <center><p>{teamName?teamName:""}</p></center>
            </Row>
        </Container>

  )
}

export default StandingsCard