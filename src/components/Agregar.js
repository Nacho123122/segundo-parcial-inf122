import React, {useState} from "react";
import '../styles/Agregar.css';
import Meta from "./Meta";
function Agregar(){
    const [metas, setMetas] = useState([]);
    const [nuevaMeta, setNuevaMeta] = useState('');

    const agregarMeta = () => {
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
    };
    const eliminarMeta = (id) => {
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
    };
    return(
        <div className="contenedor-principal">
            <div>
                <h1>Mis Metas</h1>
            </div>
            <div >
                <input
                    className="input"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e) => setNuevaMeta(e.target.value)}
                />
                <button className='boton' onClick={agregarMeta}>Agregar Meta</button>
            </div>
            {metas.map((meta) => (
                <Meta
                    key={meta.id}
                    meta={meta}
                    onDelete={eliminarMeta}
                    
                />
            ))}
            
        </div>
    )
}

export default Agregar;