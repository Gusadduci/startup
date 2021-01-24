import { useCallback } from "react"

function Auto(props) {

    function handleChange(e){
        props.callback(e.target.value)
    }

    return (

        <input type="text" placeholder="Buscar" onChange={handleChange}/> 
        
        )

}

export default Auto