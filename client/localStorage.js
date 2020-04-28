/*
script que tiene metodos que haces que cuando pagina se 
recarge el store no se resetee almacenando datos en el localstorage
*/

export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return undefined // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
    }
    return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    console.log('error en loadState',error);
    return undefined // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
  }
}

export const saveState = (state) => {
    
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
    console.log('guardado en localstorage')
  } catch (error) {
    console.log('saveState',error);
	// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
  }
}