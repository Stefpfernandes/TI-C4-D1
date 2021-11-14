import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: '',
    })

    const getServicos = async() => {
        await axios.get(api + "/listaservicos")
        .then((response)=>{
            console.log(response.data.servicos);
            setData(response.data.servicos);
        })
        .catch(()=>{
            setStatus({
                type: 'erro',
                message: 'Erro: ' + Error + '!'
            })
            // console.log("Erro: " + Error + "!");
        });
    }

    useEffect(()=>{
        getServicos();
    },[]);

    return(
        <div>
            <Container>                 
                <div className="d-flex">                   
                    <div>
                        <h1>Visualizar informações do serviço!</h1>
                    </div>                      

                    <div className="m-auto p-2">
                        <Link to="/cadastrarservico" className="btn btn-success btn-sm">Cadastrar</Link>
                    </div>
                                                             

                    {status.type === 'error' ?
                    <div>
                        <Alert color="danger"> 
                            {status.message}
                        </Alert>
                    </div>          
                    : ""}                  
                </div> 

                <hr className="m-1"/>   

                    <Table striped responsive hover>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>Descrição</td>
                                <td>Ação</td>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map(item =>( 
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className = "text-center">
                                        <Link to = {"/listar-pedido/" + item.id} className="btn btn-outline-primary btn-sm">
                                            Consultar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            </Container>
        </div>    
    );
};