<template>
    <div class="container">
       <div class="chatbox">
            <div class="header">
                <h4> <img src='/assets/img/NumerAI/Isotipo_Positivo.png' class='imgRedonda' alt=""/>  NumerAI </h4>

            </div>
                <div class="body" id="chatbody">
                <p class="alicia">Hola! soy NumerAI, Estoy para responder preguntas relacionadas con nuestra pagina . Espero poder ayudarte.</p>
                    <div class="scroller"></div>
                </div>
            <form class="chat">
                <div>
                    <input type="text" name="chat" id="chat" placeholder="Dudas que tengas">
                </div>
                <div>
                    <input type="button" value="Enviar" id="btn" >
                </div>
            </form>
   </div>
</div>
</template>

<script>
export default{
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
/* * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Raleway",sans-serif;
    font-size: 16px;
    line-height: 16px;
    border-radius: 2px;

} */

.container {
    /* width: 90vw;
    height: 100vh; */
    margin: 0 auto;
    position: relative;
    
}

.chatbox {
    width: 50%;
    height: 500px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.header {
    background: #000000;
    padding: 20px;
    color: aliceblue;
    font-size: 20px;
    border-radius: 5px;
}

.avail {
    font-size: 12px;
    padding: 0 20px;
    padding-right: 30px;
}

.avail::after {
    content: "";
    display: inline-block;
    background: rgb(4, 180, 4);
    width: 10px;
    height: 10px;
    margin: 0 3px;
    vertical-align: middle;
    border-radius: 50%;
}

.body {
    background: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    overflow-y: auto;
    border-radius: 2px;
}

input {
    height: 50px;
    width: 100%;
}

input[type="text"] {
    padding: 0 10px;
}

input[type="submit"] {
    height: 25px;
    border: 0;
    background: #293D7A;
    font-weight: 500;
    font-size: 17px;
    color: aliceblue;
    cursor: pointer;
}

.visible {
    display: block;
}

.none {
    display: none;
}

.me {
    color: rgb(255, 255, 255);
    width: 55%;
    height: auto;
    padding: 10px;
    margin: 5px;
    background-color: #293D7A;
    border-radius: 10px;
    float: right;
    text-align: right;
    display: block;
}

.alicia {
    color: rgb(0, 0, 0);
    width: 60%;
    height: auto;
    padding: 10px;
    margin: 5px;
    background-color: #FFB40B;
    border-radius: 10px;
    float: left;
    text-align: left;
    display: block;
}

.imgRedonda {
    width: 40px;
    height: 40px;
    border-radius: 150px;
}

.creador {
    background-color: crimson;
    color: aliceblue;
    font-size: 16px;
    height: 20px;
    width: 80px
}
</style>