import React, { useState } from 'react';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NovaReceita() {
    const [receita, setReceita] = useState({
        titulo: '',
        ingredientes: '',
        modoPreparo: '',
        imagem: '',
        audioIngredientes: '',
        audioModoPreparo: '',
      });
    
      const handleChange = (event) => {
        const { id, value } = event.target;
        setReceita({ ...receita, [id]: value });
      };
    
      const handleFileChange = (event) => {
        const { id, files } = event.target;
    
        // Verifica se há um arquivo selecionado
        if (files && files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setReceita({ ...receita, [id]: e.target.result });
          };
          reader.readAsDataURL(files[0]); // Converte o arquivo em base64
        }
      };
    
      const salvarDadosLocal = (event) => {
        event.preventDefault();
    
        // Obtém o array de receitas do localStorage ou cria um novo se não existir
        const receitasSalvas = JSON.parse(localStorage.getItem('receitas')) || [];
    
        // Adiciona a nova receita ao array
        receitasSalvas.push(receita);
    
        // Salva o array de receitas atualizado no localStorage
        localStorage.setItem('receitas', JSON.stringify(receitasSalvas));
    
        event.target.reset();
        setReceita({
          titulo: '',
          ingredientes: '',
          modoPreparo: '',
          imagem: '',
          audioIngredientes: '',
          audioModoPreparo: '',
        });
      };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Nova Receita</h1>
        <audio controls>
        <source src="novareceita.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
        <Form onSubmit={salvarDadosLocal}>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Insira o Título da Receita</Form.Label>
            <Form.Control
              placeholder="Torta de limão"
              value={receita.titulo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ingredientes">
            <Form.Label>Insira os ingredientes: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={receita.ingredientes}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modoPreparo">
            <Form.Label>Descreva o modo de preparo: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={receita.modoPreparo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="imagem" className="mb-3">
            <Form.Label>Insira uma imagem da Receita</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Form.Group controlId="audioIngredientes" className="mb-3">
            <Form.Label>
              Insira o arquivo de áudio falando os ingredientes presentes na receita
            </Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Form.Group controlId="audioModoPreparo" className="mb-3">
            <Form.Label>
              Insira o arquivo de áudio falando o modo de preparo da receita
            </Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Button variant="success" type="submit">
            Enviar nova receita
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NovaReceita;
