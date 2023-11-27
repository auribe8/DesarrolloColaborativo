import React from 'react';
//import '../componentes/css/styles';
import MyAgregarAlumno from './agregarAlumno';


function alumno() {
    var list = [
        {
            'name':'saul'
        },{
            'name':'saul'
        },{
            'name':'saul'
        },{
            'name':'saul'
        }
    ]
    return (
    <div>
    <div>
    <div className="container cards-2 bg-light">
            <div className="row">
                <div className="col-lg-12">
                            {/* <c:forEach var="alumno" items="${alumnos}" varStatus="status" > */}
                            {/* style="width: 320px !important;" */}
                    {
                        list.forEach(element => {
                            
                        });
                    }
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">${alumno.alumnoID}</h3>
                            <p>${alumno.nombre} ${alumno.apellidos}</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Carrera: ${alumno.carrera}</div>
                                </li>
                            </ul>
                        </div>
                        <div className="button-container">
                            <a className="btn-solid-reg page-scroll" href="${pageContext.request.contextPath}/ServerletControladorAlumno?accion=editar&alumnoID=${alumno.alumnoID}">Modificar</a>
                        </div>
                    </div>
                            {/* </c:forEach> */}
                </div>
            </div>
    </div>

    
    <MyAgregarAlumno/>
    </div>
    </div>

    )
}
export default alumno;