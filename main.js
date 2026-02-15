console.log('Hello World!');
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meu Site Premium</title>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }

    body {
        background: #000;
        color: #fff;
        height: 100vh;
        overflow: hidden;
    }

    /* FUNDO PRETO COM BRILHO DOURADO */
    .background-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15), transparent 70%);
        z-index: 0;
    }

    /* CONTAINER CENTRAL */
    .container {
        position: relative;
        z-index: 2;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    /* LOGO */
    .logo {
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 4px;
        background: linear-gradient(90deg, #FFD700, #D4AF37, #FFF5B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 20px;
    }

    .subtitle {
        font-size: 14px;
        letter-spacing: 3px;
        color: #d4af37;
        margin-bottom: 40px;
    }

    /* INPUT SENHA */
    input {
        background: transparent;
        border: 1px solid #D4AF37;
        padding: 12px 20px;
        width: 250px;
        color: #fff;
        text-align: center;
        outline: none;
        transition: 0.3s;
    }

    input:focus {
        box-shadow: 0 0 15px #D4AF37;
    }

    /* BOTÃO */
    button {
        margin-top: 20px;
        padding: 12px 30px;
        border: none;
        cursor: pointer;
        background: linear-gradient(90deg, #FFD700, #D4AF37);
        color: #000;
        font-weight: bold;
        letter-spacing: 2px;
        transition: 0.3s;
    }

    button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px #FFD700;
    }

    /* CONTEÚDO PRINCIPAL */
    .main-content {
        display: none;
        text-align: center;
        padding-top: 100px;
    }

    .main-content h1 {
        font-size: 50px;
        background: linear-gradient(90deg, #FFD700, #D4AF37, #FFF5B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>
</head>

<body>

<div class="background-glow"></div>

<!-- TELA FECHADO -->
<div class="container" id="lockedPage">
    <div class="logo">SEU NOME</div>
    <div class="subtitle">SITE EXCLUSIVO</div>

    <input type="password" id="password" placeholder="Digite a senha">
    <button onclick="checkPassword()">ENTRAR</button>
</div>

<!-- SITE ABERTO -->
<div class="main-content" id="mainSite">
    <h1>Bem-vindo ao Site</h1>
    <p style="color:#D4AF37; margin-top:20px;">O site está oficialmente aberto.</p>
</div>

<script>
    // CONFIGURAÇÃO PRINCIPAL
    const SITE_ABERTO = false; // Mude para true quando quiser abrir
    const SENHA_CORRETA = "1234";

    const lockedPage = document.getElementById("lockedPage");
    const mainSite = document.getElementById("mainSite");

    if (SITE_ABERTO) {
        lockedPage.style.display = "none";
        mainSite.style.display = "block";
    }

    function checkPassword() {
        const senha = document.getElementById("password").value;

        if (senha === SENHA_CORRETA) {
            lockedPage.style.display = "none";
            mainSite.style.display = "block";
            document.body.style.overflow = "auto";
        } else {
            alert("Senha incorreta.");
        }
    }
</script>

</body>
</html>