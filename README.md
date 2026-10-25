# Mixtape 4.0 · Operación Cola

**Ticket MIX-401 · Estación Umbral, Hangar 3**
**Para:** Mecánico de hangar · **De:** Nova · **Tiempo:** 40 minutos

## La misión

Mixtape ya recibe pedidos, pero el formulario dice "recibido" y el pedido se pierde. Nova dejó armada la carcasa de la cola (la lista, los botones y los estilos) y falta darle vida. Hoy trabajas sobre tu propio Mixtape 3.0, no sobre un proyecto nuevo.

Tu trabajo es el estado de `App.jsx` y las funciones que lo cambian. Cada función arma un array nuevo y se lo pasa al `set`. Nunca cambia el array que ya está en el estado.

## Paso 0: aplicar el kit

1. Copia las carpetas de este kit sobre las de tu proyecto, aceptando reemplazar:
   - `src/estilos-l4.css` (nuevo)
   - `src/components/ListaPedidos.jsx` (nuevo)
   - `src/components/PedidoCancion.jsx` (es el de la solución de la tarea de la Lección 3, con la prop `onAgregar`. Si ya tienes el tuyo, no lo reemplaces: solo harás el cambio del Ticket 1)
   - `src/App.jsx` (el de la Lección 3 más la cola. Si le habías cambiado algo, pásalo al nuevo)
2. En `src/main.jsx`, debajo de `import "./estilos-l3.css";`, agrega:

```jsx
import "./estilos-l4.css";
```

3. Corre el proyecto y deja la consola del navegador abierta:

```bash
pnpm install
pnpm dev
```

Al terminar el paso 0 debes ver, debajo del formulario, una caja "Cola de pedidos" con el texto "Aún no hay pedidos en la cola." y "0 por sonar".

## Ticket 1 · Agregar un pedido

**Dónde:** `PedidoCancion.jsx` y `App.jsx`

1. En `PedidoCancion.jsx`, busca el comentario `Clase, Ticket 1` y llama a `onAgregar` con la canción y el nombre.
2. Haz un pedido válido. La cola sigue vacía: `agregar` en `App.jsx` tiene un fallo a propósito. Escribe otro pedido, o teclea una letra en el buscador, y mira qué pasa con el pedido anterior.
3. Corrige `agregar` para que `setPedidos` reciba un array nuevo con los pedidos anteriores y el nuevo al final.

**Listo cuando:** cada pedido válido aparece en la cola en el mismo instante en que lo envías, y la consola no muestra errores.

## Ticket 2 · Quitar un pedido

**Dónde:** `App.jsx` (función `borrar`) y `ListaPedidos.jsx` (botón "Quitar")

1. Escribe `borrar(id)` para que deje en el estado todos los pedidos menos el que tiene ese `id`.
2. En `ListaPedidos.jsx`, haz que el botón "Quitar" llame a `onBorrar` con el `id` de su pedido.

**Listo cuando:** con tres pedidos en la cola, "Quitar" en el del medio elimina solo ese. Los otros dos se quedan.

## Ticket 3 · Marcar el que ya sonó

**Dónde:** `App.jsx` (función `marcar`) y `ListaPedidos.jsx`

1. Escribe `marcar(id)` para que cambie `sono` al valor contrario solo en el pedido con ese `id`. Los demás pedidos se devuelven iguales.
2. En `ListaPedidos.jsx`, haz que el botón "Ya sonó" llame a `onMarcar` con el `id` de su pedido.
3. Cuando `p.sono` es `true`, el `li` lleva la clase `pedido-item sono` (el pedido se ve tachado y apagado).
4. Reemplaza el `0` de `pendientes` por el cálculo de cuántos pedidos tienen `sono` en `false`.

**Listo cuando:** al marcar un pedido, se tacha y el contador baja de "3 por sonar" a "2 por sonar". Al marcarlo otra vez, vuelve a su estado anterior y el contador sube.

## Extra para curiosos

No suma ni resta al ticket. Elige uno o los dos.

- **Los nuevos arriba:** que el pedido más reciente salga primero en la cola. Es un cambio de orden en una sola línea de `agregar`.
- **Limpiar los que ya sonaron:** agrega en `ListaPedidos.jsx` un botón con la clase `boton-limpiar` que llame a una función `limpiar` de `App.jsx`. `limpiar` deja en el estado solo los pedidos que todavía no sonaron.

## Reglas del hangar

- Prohibido `push`, `splice`, `sort` y asignar una propiedad (`p.sono = ...`) sobre algo que viene del estado.
- Lo que se puede calcular del array no necesita otro estado.
- Si te atascas más de 5 minutos, pregunta antes de abrir el Archivo Jedi.
