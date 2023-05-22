import { useEffect, useState } from "react"

const lista = [{id: 1, value: 'Banana'}, {id: 2, value: 'Maçã'}, {id: 3, value: 'Laranja'}]

function App() {

  const [produtos, setProdutos] = useState(lista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
        if (pesquisa) {
          const novaLista = lista.filter( (item) => {
            return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista);
      } else {
        setProdutos(lista);
      }
    }
      
  , [pesquisa])

  return (
    <div className='App'>
      <input 
      value={pesquisa}
      onChange={ (e) => setPesquisa(e.target.value)}
      placeholder="pesquisar"></input>
      {produtos.map( (item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default App
