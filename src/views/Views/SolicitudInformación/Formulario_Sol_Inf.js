import React from 'react';
import './Formulario_Sol_Inf.css'

function Formulario_Sol_Inf(){
    return(
        <div className="Formulario">
            <div class="container">
                <h1 class="mt-4 mb-3"> Formulario Solicitud de Información</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Formulario</li>
                </ol>
                <form action="">
                <h2>Solicitud de Acceso a la Información</h2>
                    <div class="card w-100">
                    <h4 class="card-header">Datos del Solicitante</h4>
                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                            <label for="Nombre">Nombre(s)</label>
                            <input type="text" name="nombre" placeholder="Nombre" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                            <label for="Apellido">Apellido(s)</label>
                            <input type="text" name="apellido" placeholder="Apellido" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="Documento">N° de Documento</label>
                            <input type="text" name="dni" placeholder="DNI" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="DNI">DNI</label>
                            <input type="file" name="dniFile" id="dniFile" class="form-control-file" accept="image/*, .doc, .docx, .pdf" required></input>
                            <small>El archivo debe contener frente y dorso del DNI</small>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="CUIL">CUIL</label>
                            <input type="file" name="cuilFile" id="cuilFile" class="form-control-file" accept="image/*, .doc, .docx, .pdf" required></input>
                            <small>El archivo debe contener frente y dorso del DNI</small>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card w-100">
                    <h4 class="card-header">Datos de Contacto</h4>
                    <div class="card-body">
                        <div class="row card-text">
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="Provincia">Provincia</label>
                            <select class="form-control" id="provincia" name="provincia" onchange="getMunicipios()">
                                <option value="-1">Seleccione una provincia</option>
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Ríos">Entre Ríos</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquén">Neuquén</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Salta">Salta</option>
                                <option value="San Juan">San Juan</option>
                                <option value="San Luis">San Luis</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Santiago del Estero">Santiago del Estero</option>
                                <option value="Tierra del Fuego, Antártida e Isla del Atlántico Sur">Tierra del Fuego, Antártida e Isla del Atlántico Sur</option>
                                <option value="Tucumán">Tucumán</option>
                            </select>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="Municipio">Municipio</label>
                            <select class="form-control" id="municipio" name="municipio" required>
                                <option value="-1">Seleccione un municipio</option>
                            </select>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="form-group">
                            <label for="CodPostal">CP</label>
                            <input type="number" name="codpostal" placeholder="Ej. 4600" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-5 mx-auto">
                            <div class="form-group">
                            <label for="Calle">Calle</label>
                            <input type="text" name="calle" placeholder="Calle" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-2 mx-auto">
                            <div class="form-group">
                            <label for="Numcalle">N°</label>
                            <input type="number" name="numcalle" placeholder="Número" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-2 mx-auto">
                            <div class="form-group">
                            <label for="Piso">Piso/Dpto</label>
                            <input type="text" name="pisodpto" placeholder="Piso X - Dpto X" class="form-control"></input>
                            </div>  
                        </div>
                        <div class="col-md-3 mx-auto">
                            <div class="form-group">
                            <label for="Barrio">Barrio</label>
                            <input type="text" name="barrio" placeholder="Barrio" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                            <label for="Email">E-Mail</label>
                            <input type="email" name="email" placeholder="Ej. email@email.com" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        <div class="col-md-6 mx-auto">
                            <div class="form-group">
                            <label for="Telefono">Telefono</label>
                            <input type="text" name="telefono" placeholder="Telefono" class="form-control"></input>
                            <small className="Obligatorio">*Obligatorio</small>
                            </div>  
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card w-100">
                    <h4 class="card-header">Información Solicitada</h4>
                    <div class="card-body">
                        <div class="form-group">
                        <label for="Institucion">Institucion</label>
                        <select class="form-control" id="institucion" name="institucion" required>
                            <option value="-1">Seleccione una institución</option>
                        </select>
                        <small className="Obligatorio">*Obligatorio</small>
                        </div>
                        <div class="form-group">
                        <label for="Informacion">Información</label>
                        <textarea class="form-control" id="informacion" name="informacion" rows="5"></textarea>
                        <small className="Obligatorio">*Obligatorio</small>
                        </div>
                    </div>
                    </div>
                    <div class="card w-100">
                    <div class="card-body">
                        <div class="row card-text">
                        <div class="col-md-8 mx-auto">
                            <div class="form-group">
                            <label for="Institucion">Acepto recibir las comunicaciones y/o notificaciones que deban realizarse durante el presente trámite en mi correo electrónico con excepción de los actos que nieguen o limiten mi derecho o impongan una obligación y/o impida la continuación del trámite</label>
                            </div>
                        </div>
                        <div class="col-md-4 mx-auto">
                            <br/>
                        </div>
                        <button class=" g-recaptcha btn mx-auto" data-sitekey="6LeGHbkUAAAAAIixjzhhUPqGesOXoGJnQw2btcak" data-callback='onSubmit' type="submit">ENVIAR</button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario_Sol_Inf;