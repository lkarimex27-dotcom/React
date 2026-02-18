import { useState } from 'react'
import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'
import './shared/styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Mundo") // Para el Hola Mundo dinámico
  const [items, setItems] = useState([])     // Para una lista de tareas rápida

  const addItem = () => {
    setItems([...items, `Tarea #${items.length + 1}`])
  }
  return (
    <>
    <div className="container text-center mt-5">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Título dinámico: Cambia mientras escribes */}
      <h1 className="display-4">Hola {text}</h1>
      
      <div className="card p-4 shadow-sm my-4">
        <div className="mb-3">
          <label className="form-label">Escribe tu nombre:</label>
          <input 
            type="text" 
            className="form-control text-center" 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Escribe aquí..."
          />
        </div>

        <button 
          className="btn btn-primary mb-2" 
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

        {/* Probando el icono que pediste con un toque dinámico */}
        <p>
          Pulsa el corazón: 
          <i 
            className={`bi ${count > 0 ? 'bi-heart-fill' : 'bi-heart'}`} 
            style={{ fontSize: '2rem', color: 'red', cursor: 'pointer' }}
            onClick={() => alert('¡Gracias por el click!')}
          ></i>
        </p>
      </div>

      {/* --- SECCIÓN DE LISTAS DINÁMICAS --- */}
      <div className="mt-4">
        <button className="btn btn-success btn-sm mb-3" onClick={addItem}>
          Añadir elemento a la lista
        </button>
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item animated fadeIn">
              {item} <i className="bi bi-check-circle-fill text-success ms-2"></i>
            </li>
          ))}
        </ul>
      </div>
      <div className="card mx-auto my-4 shadow" style={{ maxWidth: "22rem" }}>
        <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
          className="card-img-top"
          alt="Logo de Google"
          style={{ objectFit: "contain", padding: "2rem", background: "#fff" }}
        />
        <div className="card-body">
          <h5 className="card-title mb-2">Google</h5>
          <p className="card-text">
            Google es el motor de búsqueda más utilizado en el mundo, ofreciendo herramientas y servicios innovadores para millones de usuarios.
          </p>
        </div>
      </div>
      <p className="read-the-docs mt-5">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  </>
)
}
export default App
