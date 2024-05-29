// Función asincrónica para manejar el evento click del botón "Sí"
async function handleYesButtonClick() {
    console.log('Redireccionando a https://web.whatsapp.com/');
    try {
        // Importa el módulo 'open' de forma dinámica
        const open = await import('open');
        // Abre la URL en el navegador predeterminado
        open.default('https://web.whatsapp.com/');
    } catch (error) {
        console.error('Error al importar el módulo:', error);
    }
}

// Ejecutar la función asincrónica para manejar el evento click del botón "Sí"
handleYesButtonClick();
