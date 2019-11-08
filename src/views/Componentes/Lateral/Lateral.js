import React from 'react';
import './Lateral.css';

function Lateral() {
    return(
        <div className="Lateral" id="Lateral">
            <p></p>
            <h3 class="mt-4 mb-3">PAGINAS AFINES</h3>
            <hr/>
            <img src="http://www.dipec.jujuy.gov.ar/img/logodipec.png"/>
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
    );
}

export default Lateral;