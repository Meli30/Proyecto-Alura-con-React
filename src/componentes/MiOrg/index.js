import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable,funcionActualizada] = useState(valorInicial)
   //console.log(props)
   // const[mostrar, actualizarMostrar] = useState(true)
   // const manejarClick = () => {
       // console.log ("Mostrar/Ocultar elemento", !mostrar)
     //   actualizarMostrar(!mostrar)
    //}


    return <section className="orgSection">

        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg