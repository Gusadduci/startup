function Card (props) {

 
    return(
        <div>
        <h1>{props.name}</h1>
        <img src={props.img}/>
        <p>{props.desc}</p>
        </div>
    )

}

export default Card 