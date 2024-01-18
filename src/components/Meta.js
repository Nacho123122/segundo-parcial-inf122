import React from "react";
import '../styles/Meta.css';


function Meta({meta, onDelete}){
    
    return(
        <div className="box2">
            <div className='contenedor-meta'>
                    <p className='meta'>{meta.texto}</p>
                    <div>
                    
                    <button className='boton1' onClick={() => onDelete(meta.id)}>X</button>
                    </div>
            </div>
            
            
        </div>
    )
}
export default Meta;