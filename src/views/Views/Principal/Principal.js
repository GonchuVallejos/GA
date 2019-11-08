import React from 'react';
import './Principal.css';
import Carousel from '../../Componentes/Carousel/Carousel';
import Lateral from '../../Componentes/Lateral/Lateral';

function Principal() {
    return (
        <div className="Principal">
            < Carousel />
            < Lateral />
        <div className="container">
            <h1 className="my-4">Transparencia y Gobierno Abierto</h1>
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Presupuesto</h4>
                    <div class="card-body">
                        <img src="img/dataset.png" alt=""/>
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn">Presupuesto</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Datos Abiertos</h4>
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn">Datos Abiertos</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Escala</h4>
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn">Escala</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                <div class="card h-100">
                <h4 class="card-header">Licitaciones</h4>
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
                <div class="card-footer">
                    <a href="#/" class="btn">Licitaciones</a>
                </div>
                </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Principal;