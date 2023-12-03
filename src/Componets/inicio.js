import Navbar from "./navbar"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



function inicio() {
    return (
        <>
            <Navbar />
            <div className="container">
            <audio controls>
        <source src="siteInicio.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
                <h1>Receitas Fáceis</h1>
                <h4>Bem-vindo ao nosso espaço culinário inclusivo! Aqui, nossas receitas são feitas para todos, com instruções detalhadas e descrições táteis dos passos. Queremos tornar a cozinha acessível, oferecendo alternativas e dicas úteis. Junte-se a nós nesta jornada deliciosa e inclusiva!</h4>
            

            <Form className="my-5">
                <Row>
                    <Col>
                    <Link to="/novareceita">
                    <Button variant="primary">Inserir Nova Receita</Button>
                    </Link>
                    </Col>
                    <Col>
                    <Link to="/buscarreceita">
                    <Button variant="success">Buscar Receita</Button>
                    </Link>
                    </Col>
                </Row>
            </Form>

            </div>
        </>
    )
}


export default inicio;