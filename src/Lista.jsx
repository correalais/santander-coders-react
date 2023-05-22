

const lista = [{id: 1, value: 'Banana'}, {id: 2, value: 'Maçã'}, {id: 3, value: 'Laranja'}]

export default function Lista(){

    
    return lista.map( (item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })

}