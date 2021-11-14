import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './views/Home/';
import {Listar} from './views/Cliente/Listar/';
import {ListarServico} from './views/Servico/ListarServico/';
import {Menu} from './componentes/Menu';
import {Item} from './views/Servico/Item';
import { CadastrarS } from './views/Servico/CadastrarS';
import { CadastrarP } from './views/Produto/CadastrarP';
import { Produto } from './views/Produto/ListarProduto';
import { Pedido } from './views/Pedido';


function App() {
  return (
    <div> 
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={Listar}/>
          <Route path="/listar-pedido" component={Pedido}/>
          <Route path="/listar-servico" component={ListarServico}/>
          <Route path="/listar-pedido/:id" component={Item}/>
          <Route path="/cadastrarservico" component={CadastrarS}/>
          <Route path="/listar-produto/:id" component={Produto}/>
          <Route path="/cadastrarproduto" component={CadastrarP}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
