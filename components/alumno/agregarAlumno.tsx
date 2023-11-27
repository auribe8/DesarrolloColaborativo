import React from 'react';
//import '../componentes/css/styles';


function alumno() {
    return (
    <div>
    <div>
    <div className="modal fade" id="agregarAlumnoModal">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header bg-info text-white">
                <h5 className="white modal-title">Agregar Alumnos</h5> 
                <button className="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            
    <div id="agregarAlumno" className="form-1">
        <div className="container">
                   
                    <form action="${pageContext.request.contextPath}/ServerletControladorAlumno?accion=insertar"
                        method="POST"  className="was-validated" data-toggle="validator">
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="nombre" name="nombre" required/>
                            <label className="label-control" htmlFor="nombre">Nombre</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="apellidos" name="apellidos" required/>
                            <label className="label-control" htmlFor="apellidos">Apellidos</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                        {/* style="padding-top: 1.15rem !important;" */}
                            <select className="form-control-select" id="carrera" name="carrera" required>
                                <option className="select-option" value="" disabled selected>Selecciona</option>
                                <option className="select-option" value="Ingeniería Biomédica">Ingeniería Biomédica</option>
                                <option className="select-option" value="Ingeniería Civil">Ingeniería Civil</option>
                                <option className="select-option" value="Ingeniería de Software y Sistemas Computacionales">Ingeniería de Software y Sistemas Computacionales</option>
                                <option className="select-option" value="Ingeniería Electromecánica">Ingeniería Electromecánica</option>
                                <option className="select-option" value="Ingeniería en Automatización y Control Industrial">Ingeniería en Automatización y Control Industrial</option>
                                <option className="select-option" value="Ingeniería en Electrónica y Telecomunicaciones">Ingeniería en Electrónica y Telecomunicaciones</option>
                                <option className="select-option" value="Ingeniería en Tecnologías y Soluciones de Negocio">Ingeniería en Tecnologías y Soluciones de Negocio</option>
                                <option className="select-option" value="Ingeniería Industrial">Ingeniería Industrial</option>
                            </select>
                            {/* style="top: 0.125rem !important; opacity: 1 !important; font-size: 0.75rem !important; font-weight: 500 !important;"  */}
                        <label className="label-control" htmlFor="carrera">Carrera</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group modal-footer">
                            <button type="submit" className="form-control-submit-button">Registrar</button>
                        </div>
                        <div className="form-message">
                            <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </div>    
                    </form>
                    
            
        </div>
    </div>
        </div>
    </div>
</div>
    
    </div>
    </div>

    )
}
export default alumno;