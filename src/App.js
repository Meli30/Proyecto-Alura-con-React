import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';

import Header from './componentes/Header/Header.js';

import Formulario from './componentes/Formulario/Formulario.js';

import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';

import Footer from './componentes/Footer/index.js';

function App() {

  const [mostarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState ([{
    id:uuid(),
    equipo:"Front End",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Dario",
    puesto:"Instructor",
    fav: true

  },
  {
    id:uuid(),
    equipo:"Front End",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Dario",
    puesto:"Instructor",
    fav:false

  }

])
  
  const [equipos,actualizarEquipos] = useState( [
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },

    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    
    {
      id:uuid(),
      titulo:  "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
   ] )

  //ternario .-- condicion ? seMuestra : noseMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador  = (colaborador) => {

    console.log("Nuevo colaborador", colaborador )
  //Spread operador
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //Eliminar colaborador
    const eliminarColaborador = (id) => {
     console.log("Eliminar colaborador",id)
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevoColaboradores)
  }

  //Actualizar color de equipo
    const actualizarColor = (color,id) => {
      console.log("Actualizar:",color,id)
    const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id){
    equipo.colorPrimario = color
    }

    return equipo
    })

      actualizarEquipos(equiposActualizados)
  }

   //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id:uuid }])
  }

  //funcion de like
  const like = (id) => {
    console.log ("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }

    return colaborador
    })
    
    actualizarColaboradores(colaboradoresActualizados)
  }

    
  
  return (
    <div>
      
     <Header />
     {/*mostarFormulario === true ? <Formulario/> : <></>*/}

     {
     mostarFormulario && <Formulario 
     equipos = {equipos.map((equipo) => equipo.titulo)}
     registrarColaborador ={registrarColaborador}
     crearEquipo={crearEquipo}
     /> 
     }

     <MiOrg cambiarMostrar={cambiarMostrar}/>

    {
      equipos.map((equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador = {eliminarColaborador}
      actualizarColor={actualizarColor}
      like = {like}
      /> 

    )
    }
    
    <Footer/>

   
      
    </div>
  );
}

export default App; 
