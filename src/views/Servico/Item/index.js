import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const Item = (props) => {

    // console.log(props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: '',
    })

    const getItens = async() => {
        await axios.get(api + "/servico/"+id+"/pedidos")
        .then((response)=>{
            console.log(response.data.item);
            setData(response.data.item);
        })
        .catch(()=>{
            setStatus({
                type: 'erro',
                message: 'Erro: ' + Error + '!'
            })
        });
    }

    useEffect(()=>{
        getItens();
    },[id]);

    return(
        <div>
            <Container>
                <div>
                    <h1>Quantidade de pedidos do serviço!</h1>
                </div>    

                {status.type === 'error' ?
                <div>
                    <Alert color="danger"> 
                        {status.message}
                    </Alert>
                </div>          
                : ""}
                  
                
                <Table striped responsive hover>
                    <thead>
                        <tr>
                            <td>Pedido</td>
                            <td>Quantidade</td>
                            <td>Valor</td>
                            <td>Visualizar</td> 
                            {/* Pedido */}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item =>( 
                            <tr key={item.ServicoId}>
                                <th>{item.PedidoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className = "text-center">
                                    <Link to = {"/listar-pedido/"} className="btn btn-outline-primary btn-sm">
                                        Pedido
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