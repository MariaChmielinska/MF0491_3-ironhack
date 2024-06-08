/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */


button = document.querySelector("#btn-send");
button.addEventListener("click",send);

    function send(){
        console.log("button Enviar works");

        let message = document.querySelector("#message").value;
        console.log("input message shows", message);

        document.querySelector("#last-message").textContent = message;
        console.log("last message shows", lastMessage);

        message = "";


    }



