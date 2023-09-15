<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
      echo'
        <script>
          alert("porfavor debes iniciar sesion");
          window.location ="index.php";
        </script>
      ';
      session_destroy();
      die();
    }
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="stylesnuevo.css"> 
  <title>INDUSTRIAS BONDYCITO</title>
  <style>
    body {
      font-family: 'Times New Roman', sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: #040000;
    }
    h3 {
      color: #ffffff;
    }
    h2 {
      color: #070202;
    }
    p {
      color: #060505;
    }
  </style>
</head>
</body>
    <div class="head">
      <nav class="navbar">
        <a href="#"><img src="bondycito.jpg" alt="foto de bondycito" style="width: 45px"></a>
      </nav>
      <nav class="hola">
        <a>bienvenido a la pagina web del bondycito lindo</a>
      </nav>
      <nav class="navbar">
        <a href="php/cerrar_sesion.php">cerrar sesion</a>
        <a href="#">productos</a>
        <a href="#">redes sociales</a>
      </nav>
    </div>
    <section class="content sau">

      <h1 class="title">PRODUCTOS</h1>
      <p>aun no tengo un juego pero en un futuro ya los estare creando, tambien puedo hacer dibujos</p>
      <div class="imag">
        <a href="#"><img src="sprintrap.jpg" alt="foto de bondycito" style="width: 250px"></a>
        <a href="#"><img src="pudgesito.jpg" alt="foto de bondycito" style="width: 350px"></a>
      </div>
      <p class="tex">descargate dragon ball legends para jugar un rato</p>
      <a class="ho" href="https://play.google.com/store/apps/details?id=com.bandainamcoent.dblegends_ww&hl=es&gl=US" class ="btn">https://play.google.com/store/apps/details?id=com.bandainamcoent.dblegends_ww&hl=es&gl=US</a>
      </div>

    </section> 
    <section class="content redessociales">
      <h1 class="title">REDES SOCIALES<img src="tiktok.jpg" alt="foto de bondycito" style="width: 100px"></h1>

      <p>si quieres saber mas de dragon ball legends o eres nuevo en el juego puedes ver alguno de mis videos de tik tok</p>
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bondycito" data-unique-id="bondycito" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@bondycito?refer=creator_embed">@bondycito</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    </section> 
    <script src="script.js"></script>
</body>
</html>