function enviarPedido() {
    let jugador = document.getElementById("jugador").value.trim();
    let uid = document.getElementById("uid").value.trim();
    let diamantes = document.getElementById("diamantes").value;
    let pago = document.getElementById("pago").value;

    // Validar que el UID no esté vacío
    if (uid === "") {
        alert("⚠️ Por favor, ingresa tu UID de Free Fire para continuar.");
        return;
    }

    // Si no puso nombre, ponemos "No especificado"
    if (jugador === "") {
        jugador = "No especificado";
    }

    // AQUÍ PONES TU NÚMERO DE WHATSAPP CON CÓDIGO DE PAÍS (Ej. 507 para Panamá, sin el +)
    let miTelefono = "50763737839";

    // Mensaje automático que te llegará a tu WhatsApp
    let mensaje = "🔥 *NUEVO PEDIDO - RECARGAS PTY* 🔥\n\n" +
                  "👤 *Jugador:* " + jugador + "\n" +
                  "🆔 *UID:* " + uid + "\n" +
                  "💎 *Paquete:* " + diamantes + "\n" +
                  "💳 *Método de pago:* " + pago + "\n\n" +
                  "Hola, quiero realizar esta recarga. ¿Me envías los datos para pagar?";

    // Codificar el mensaje para URL y abrir WhatsApp
    let url = "https://wa.me/" + miTelefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}