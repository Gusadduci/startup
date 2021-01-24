import Card from "../card"

function List (props) {


    const startups = [
        {name:"Courseit", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGwiHwxUuc_J9To3mCsrpuFtsCSyLNGqusA&usqp=CAU", 
        desc:"Description Courseit"
        },
        {name:"Endava", 
        img:"https://media-exp1.licdn.com/dms/image/C4D0BAQFQGjXwWDU2UA/company-logo_200_200/0/1519856330168?e=2159024400&v=beta&t=xNLQwiRTS7EjjJ9KoH9g-1KQVl955-Q2X17JfL1Fszo", 
        desc:"Prueva descripcion"
        }
    ]

    return (
        <section> 
        {startups.filter ((startup) => startup.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map ((startup, key) => {
            const {name, img , desc} = startup;
         return (   
            <div>
             <Card name={name} img={img} desc={desc} key={key}/>
            </div>
         )}
        )}
        </section>
    )

}

export default List