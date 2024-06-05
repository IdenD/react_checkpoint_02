import {Container,Card, Row, Col, Image} from 'react-bootstrap'
import { joueurs } from "./players";
import '../App.css';


function AllPlayer (p) {
    return (
         <Container fluid="md" key={p.nom} className='Container' >
            <Row>
                <Col lg={12}>
                    <Image src={p.imagePlayer} alt={p.nom} className='imgSize' />
                    
                    <h2>{`${p.numero}. ${p.nom}`}</h2>
                    <p>{`${p.age} ans, ${p.nationalite}`}</p>
                    <p>{p.equipe}</p>
                </Col>
                
                    
                 
            </Row>
         </Container>
    )
}

function Player () {
    return (
        <div className='d-flex justify-content-around'>
           {joueurs.map(AllPlayer)}
        </div>
    )
}



export default Player