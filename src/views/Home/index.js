import { Container } from "reactstrap";

export const Home = () => {
    return(
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                
                
                    <div className="p-2">
                        <a href="/listar-cliente" 
                            className="btn btn-outline-success btn m-2">Cliente</a>

                        <a href="/listar-pedido" 
                        className="btn btn-outline-success btn m-2">Pedido</a>

                        <a href="/listar-servico" 
                        className="btn btn-outline-success btn m-2">Serviço</a>

                        <a href="/listar-compra" 
                        className="btn btn-outline-success btn m-2">Produto</a>
                    </div>  
                </div>                
            </Container>
    );
};