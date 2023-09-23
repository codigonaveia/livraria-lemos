import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './table.css'
import { useEffect, useState } from 'react';
function Livros({livros}) {
   
    return (
        <div className='table-container'>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th colSpan={5}>Lista de Livros</th>
                    </tr>
                    <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Preco</th>
                    <th>Operações</th>
                    </tr>
                   
                </thead>
                <tbody>
                    <tr key={livros.id}>
                        <td>{livros.id}</td>
                        <td>{livros.titulo}</td>
                        <td>{livros.autor}</td>
                        <td>{livros.preco}</td>
                        <td>
                          <Button>Remover</Button>
                        </td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>

    )
}

export default Livros