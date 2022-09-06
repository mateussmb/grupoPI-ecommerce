import express from 'express';
import statusRoute from './routes/status.routes';
import usersRoute from './routes/users.routes';

const app = express();
//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// configuração da rota
app.use(statusRoute);
app.use(usersRoute);

//inicializando servidor
app.listen(3000, ()=> {
    console.log(
        '----Aplicação Rodando na porta 3000!----'
        )
});