// Operación Cola. Nova ya armó la carcasa: la lista, los botones y los estilos.
// Este componente no guarda estado. Recibe los pedidos por props y avisa al padre (App)
// llamando las funciones onMarcar y onBorrar. El estado vive en App.jsx.
function ListaPedidos({ pedidos, onMarcar, onBorrar }) {
    // Clase, Ticket 3: cuántos pedidos faltan por sonar.
    // Se calcula del array en cada pintado. No necesita un estado nuevo.
    // Pista: filter con la condición "todavía no sonó" y luego .length
    const pendientes = 0;

    return (
        <section className="cola">
            <h2 className="seccion-titulo">Cola de pedidos</h2>
            <p className="cola-contador">{pendientes} por sonar</p>

            {pedidos.length === 0 ? (
                <p className="cola-vacia">Aún no hay pedidos en la cola.</p>
            ) : (
                <ul className="cola-lista">
                    {pedidos.map((p) => (
                        // Clase, Ticket 3: cuando p.sono es true, la clase del li debe ser "pedido-item sono"
                        <li key={p.id} className="pedido-item">
                            <div className="pedido-texto">
                                <span className="pedido-titulo">{p.titulo}</span>
                                <span className="pedido-quien">pedida por {p.quien}</span>
                            </div>
                            <div className="pedido-acciones">
                                {/* Clase, Ticket 3: el botón llama onMarcar con el id de este pedido.
                                    Pista: necesitas una arrow function, como en la Misión 36.
                                    Opcional: que el texto diga "Desmarcar" cuando p.sono es true. */}
                                <button className="boton-mini" onClick={() => {}}>
                                    Ya sonó
                                </button>
                                {/* Clase, Ticket 2: el botón llama onBorrar con el id de este pedido. */}
                                <button className="boton-mini boton-mini-peligro" onClick={() => {}}>
                                    Quitar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ListaPedidos;
