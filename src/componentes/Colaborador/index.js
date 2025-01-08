import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"
import { FaHeart,FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id,fav} = props.datos
    const {colorPrimario,eliminarColaborador, like} = props

    // condición ? verdadero : falso

    return <div className="colaborador" style={{backgroundColor:colorPrimario}}>
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        
        <div className="encabezado">
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" onClick={() => like(id)}/> : <FaRegHeart onClick={() => like(id)}/>}
            
            
        </div>
    </div>
}

export default Colaborador