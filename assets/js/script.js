document.getElementById("form-submit").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Capturar los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validar que los campos no estén vacíos
    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. Quiero decir: ${message}`;

    // Número de WhatsApp al que se enviará el mensaje (reemplaza con el número deseado)
    const phoneNumber = "3024345404"; // Reemplaza con el número de WhatsApp

    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirigir al usuario a WhatsApp
    window.open(whatsappURL, "_blank");
});