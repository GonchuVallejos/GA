import React from 'react';
import './Page404.css';

function Page404(){
    return(
        <div className="Page404">
            <div class="container">
                <h1 class="mt-4 mb-3"> Error</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Error</li>
                </ol>
                <div class='c'>
                    <div class='_404'>404</div>
                    <hr/>
                    <div class='_1'>LA PAGINA</div>
                    <div class='_2'>NO SE ENCONTRO</div>
                    <a class='btn' id="btn" href='/'>VOLVER AL INICIO</a>
                </div>
            </div>
        </div>
    );
}

export default Page404;