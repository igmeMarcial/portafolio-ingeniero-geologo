function ResaltarTexto({
  parrafo,
  palabrasResaltar,
  colorResaltado = "#FFFF00",
}) {
  // Verificar si el párrafo y las palabras a resaltar están definidas
  if (!parrafo || !palabrasResaltar || palabrasResaltar.length === 0) {
    return <p>{parrafo}</p>;
  }
  // Crear una expresión regular para encontrar las palabras/frases a resaltar
  const regex = new RegExp(`\\b(${palabrasResaltar.join("|")})\\b`, "gi");
  // Dividir el párrafo en partes utilizando la expresión regular
  const partes = parrafo.split(regex);

  return (
    <p>
      {partes.map((parte, index) => {
        // Verificar si la parte es una palabra/frase a resaltar
        if (
          parte &&
          palabrasResaltar.some((palabra) =>
            parte.toLowerCase().includes(palabra.toLowerCase())
          )
        ) {
          return (
            <span
              key={index}
              style={{
                textDecoration: "underline",
                backgroundColor: colorResaltado,
              }}
            >
              {parte}
            </span>
          );
        } else {
          return parte;
        }
      })}
    </p>
  );
}
export default ResaltarTexto;
