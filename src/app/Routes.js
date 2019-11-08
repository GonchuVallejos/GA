import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';
import Principal from '../views/Views/Principal/Principal';
import Formulario from '../views/Views/SolicitudInformación/Formulario_Sol_Inf';
import Informacion from '../views/Views/Presupuesto_Ciudadano/Informacion_PC';
import Presupuesto from '../views/Views/Presupuesto_Ciudadano/Presupuesto';
import Page404 from '../views/Componentes/Page404/Page404';

const AppRoutes = () => 
<App>
        <Switch>
        <Route exact path="/" component={Principal}/>
        <Route exact path="/Solicitud_Informacion" component={Formulario}/>
        <Route exact path="/Información" component={Informacion}/>
        <Route exact path="/Presupuesto" component={Presupuesto}/>
        <Route component={Page404}/>
        </Switch>    
</App>

export default AppRoutes;