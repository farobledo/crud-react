import React from 'react';

import { Link } from "react-router-dom";

import Api from '../servicios/api';



class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            datosCargados:false,
            empleados:[]
        }
    }

    borrarRegistros = (id)=> {

        console.log(id);
        
         fetch(Api+"+id")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
     
            console.log(datosRespuesta);
            this.setState({ datosCargados:true, empleados:datosRespuesta});
     
            })
        .catch(console.log)
        

       
    }

   cargarDatos(){
   fetch(Api)
   .then(respuesta=>respuesta.json())
   .then((datosRespuesta)=>{

       console.log(datosRespuesta);
       this.setState({ datosCargados:true, empleados:datosRespuesta })

       })
   .catch(console.log)
}

    componentDidMount(){
       this.cargarDatos();
    }
 

    render() { 

          const{datosCargados, empleados}=this.state

          if(!datosCargados){ return(<div>Cargando...</div>); }
            else{
                
            

        return ( 
        
            <div className="card">
                <div className="card-header">
                <a href="/crear" type="button" className="btn btn-success">Agregar Nuevo Empleado</a>
                </div>
                <div className="card-body">
                   <h4>Lista de Empleados</h4>
            

                <table className="table table-bordered border-primary">
                <thead>
                <tr>
                    <th className="text-primary text-center">ID</th>
                    <th className="text-primary text-center">nombre</th>
                    <th className="text-primary text-center">correo</th>
                    <th className="text-danger text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>

           { empleados.map(
               (empleado)=>(
                <tr key={empleado.id} >
                <td className="table-primary text-center">{empleado.id}</td>
                <td className="table-secondary text-center">{empleado.nombre}</td>
                <td className="table-info text-center">{empleado.correo}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">

                        <Link className="btn btn-primary"
                         to={"/editar/"+empleado.id}>Editar</Link>


                        <button type="button" className="btn btn-danger"
                        onClick={()=>this.borrarRegistros(empleado.id)}
                        >Borrar</button>
                        
                    </div>
                </td>
            </tr>
               )
           )}
           
           </tbody>
        </table>

                   
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
        
        
         );
      }
   }
}
 
export default Listar;
