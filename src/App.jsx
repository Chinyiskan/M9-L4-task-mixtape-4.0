import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PedidoCancion from "./components/PedidoCancion.jsx";
import ListaPedidos from "./components/ListaPedidos.jsx";
import Reproductor from "./components/Reproductor.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Seccion from "./components/Seccion.jsx";
import { canciones } from "./data/canciones.js";

function App() {
    // L3, Bonus: lo que el usuario escribe vive en un estado y el input lo muestra (input controlado)
    const [busqueda, setBusqueda] = useState("");

    // L3, Bonus: .toLowerCase() a los dos lados para que "SEÑAL" y "señal" cuenten igual.
    // visibles es un array nuevo; el array canciones no se toca, así que al borrar el texto vuelven todas.
    const visibles = canciones.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Clase, Ticket 1: la lista de pedidos vive aquí, en el padre, porque la necesitan dos hijos:
    // PedidoCancion la llena y ListaPedidos la muestra.
    const [pedidos, setPedidos] = useState([]);

    // Clase, Ticket 1: esta función ya está escrita, pero tiene un fallo a propósito.
    // Haz un pedido y mira la cola: no aparece. Escribe un pedido más, o teclea en el buscador:
    // el pedido anterior aparece de golpe. Corrígela para que setPedidos reciba un array NUEVO.
    // Pista: [...pedidos, nuevo]
    function agregar(titulo, quien) {
        const nuevo = { id: Date.now(), titulo, quien, sono: false };
        pedidos.push(nuevo);
        setPedidos(pedidos);
    }

    // Clase, Ticket 2: recibe el id del pedido y deja en el estado todos los pedidos menos ese.
    // Pista: filter se queda con lo que da true. ¿Qué condición deja fuera al pedido con ese id?
    function borrar(id) {
        // TODO
    }

    // Clase, Ticket 3: recibe el id del pedido y cambia su propiedad sono por la contraria.
    // Pista: map recorre todos. Si p.id es el buscado, devuelve una copia { ...p, sono: ... }; si no, devuelve p.
    function marcar(id) {
        // TODO
    }

    return (
        <main className="app">
            <Encabezado total={canciones.length} />

            {/* Se compara con > 0 porque {canciones.length && ...} pintaría un 0 suelto. */}
            {canciones.length > 0 ? (
                // Todo lo que va adentro le llega a Seccion como children
                <Seccion titulo="Turno de noche">
                    {/* L3, Bonus */}
                    <input
                        className="buscador"
                        type="text"
                        placeholder="Buscar canción..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <section className="playlist">
                        {/* L3, Bonus: el .map() recorre visibles, no canciones */}
                        {visibles.map((cancion) => (
                            <TarjetaCancion
                                // La key es para React, no para la tarjeta. El id es único.
                                key={cancion.id}
                                titulo={cancion.titulo}
                                artista={cancion.artista}
                                album={cancion.album}
                                duracion={cancion.duracion}
                                portada={cancion.portada}
                                anio={cancion.anio}
                                reproducciones={cancion.reproducciones}
                                favorita={cancion.favorita}
                                energia={cancion.energia}
                            />
                        ))}
                    </section>
                </Seccion>
            ) : (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            )}

            {/* L3, Home Challenge: el formulario va debajo de la playlist, antes del reproductor */}
            {/* Clase, Ticket 1: el formulario recibe agregar en la prop onAgregar */}
            <PedidoCancion onAgregar={agregar} />

            {/* Clase: la cola recibe los datos y las funciones por props */}
            <ListaPedidos pedidos={pedidos} onMarcar={marcar} onBorrar={borrar} />

            {/* L3, Ticket 1: el reproductor reemplaza a Controles */}
            <Reproductor />
            <PiePagina />
        </main>
    );
}

export default App;
