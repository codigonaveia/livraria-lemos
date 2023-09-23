import React from "react";
import Table from "react-bootstrap/Table";
import "./table.css";
import { Button } from "react-bootstrap";

const TabelaLivros = ({ dados }) => {

    return (
        <div className="table-container">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th colSpan={5}>Lista de Livros</th>
                    </tr>
                                      
                    <tr>
                        
                        <th>Id</th>
                        <th>Titulo
                        <div className="setasAscDesc">
                             <div>&#129093;</div>
                             <div>&#129095;</div>
                            </div>
                        </th>
                        <th>Autor</th>
                        <th>Preco</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((livro, index) => (
                        <tr key={index}>
                            <td>{livro.id}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.preco}</td>
                            <td>
                                <Button>Remover</Button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {/* <tr>
                        <td>
                            <h5>
                                <strong className="text text-danger">
                                    {dados.length}
                                </strong> livro(s) encontrados
                            </h5>
                        </td>
                    </tr> */}
                    {/* <tr>
                        <h5>
                            <strong className="text text-danger">
                                {dados.length}
                            </strong> livro(s) encontrados
                        </h5>
                    </tr> */}
                </tfoot>
            </Table>
            <h5>
                <strong className="text text-danger">
                    {dados.length}
                </strong> livro(s) encontrados
            </h5>
        </div>
    );
};

export default TabelaLivros;
