import React, { useState } from 'react';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function buscarReceitasPorTitulo(tituloBuscado) {
  try {
    const receitasSalvas = JSON.parse(localStorage.getItem('receitas')) || [];

    if (!tituloBuscado) {
      return []; // Retorna um array vazio se o título buscado for vazio
    }

    // Filtra as receitas com base no título buscado
    const receitasEncontradas = receitasSalvas.filter(
      (receita) => receita.titulo.toLowerCase().includes(tituloBuscado.toLowerCase())
    );

    return receitasEncontradas;
  } catch (error) {
    console.error('Erro ao buscar receitas:', error);
    return [];
  }
}

function BuscarReceitas() {
  const [resultadoBusca, setResultadoBusca] = useState([]);
  const [tituloBuscado, setTituloBuscado] = useState('');

  const handleBusca = () => {
    const resultado = buscarReceitasPorTitulo(tituloBuscado);
    setResultadoBusca(resultado);
  };

  return (
  <>
    <Navbar />
    <div className="container">
      
      <h1>Buscar Receitas</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Busque Receitas"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={tituloBuscado}
          onChange={(e) => setTituloBuscado(e.target.value)}
        />
        <Button variant="success" id="button-addon2" onClick={handleBusca}>
          Buscar
        </Button>
      </InputGroup>

      {/* Exibir resultados da busca aqui */}
      <div className="card-container">
        {resultadoBusca.length > 0 ? (
          resultadoBusca.map((receita, index) => (
            <Card key={index} style={{ width: 'auto', marginBottom: 'auto' }}>
              <Card.Img
                variant="top"
                src={receita.imagem}
                alt="Imagem da Receita"
                 style={{ maxWidth: 'auto', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title>{receita.titulo}</Card.Title>
                <Card.Text>
                  <h3>Ingredientes:</h3>
                  <audio controls>
                    <source src={receita.audioIngredientes} type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                  <h5>Ingredientes: {receita.ingredientes}</h5>

                  <h3>Modo de Preparo:</h3>
                  <audio controls>
                    <source src={receita.audioModoPreparo} type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                  <h5>Modo de Preparo: {receita.modoPreparo}</h5>
                  {/* Adicione outras informações da receita aqui */}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Nenhuma receita encontrada para o título buscado.</p>
        )}
      </div>
    </div>
          </>
  );
}

export default BuscarReceitas;
