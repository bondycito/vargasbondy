<?php
    session_start();
    if(isset($_SESSION['usuario'])){
     header("location: bienvenido.php");
    }
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"> 
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
<</body>
    <div class="head">
      <nav class="navbar">
        <a href="#"><img src="bondycito.jpg" alt="foto de bondycito" style="width: 45px"></a>
      </nav>
      <nav class="hola">
        <a> esta es la pagina web del bondycito lindo puedes registrarte o iniciar secion</a>
      </nav>
    </div>
    <section class="content inicio_de_sesion">
      <header class ="content header">
        <div class ="btn-home">
        </div>
      </header>

      <main>
        <div class="contenedor_de_todo">
          <div class="caja_trasera">
            <div class="caja_trasera-ingreso">
              <h3>¿ya tienes una cuenta?</h3>
              <p> inicia secion para ser un beta tester</p> 
              <button id="btn_iniciar-sesion">iniciar sesion</button>
            </div>
            <div class="caja_trasera-registro">
              <h3>¿aun no tienes una cuenta?</h3>
              <p> registrarse para que puedas iniciar sesion</p>
              <button id="btn_registrarse">registrarse</button>
            </div>
          </div>
  
          <div class="contenedor_inicio-registro">
              <form action="php/login_usuario_be.php" method="POST" class="formulario_ingreso">
                <h2>iniciar sesion</h2>
                <input type="text" placeholder="correo electronnico" name="correo">
                <input type="password" placeholder="contraseña" name="contraseña">
                <button>entrar</button>
              </form>
              <form action="php/registro_usuario_be.php" method="POST" class="formulario_registro">
                <h2>registrarse</h2>
                <input type="text" placeholder="nombre completo" name="nombre_completo">
                <input type="text" placeholder="correo electronico" name="correo">
                <input type="text" placeholder="usuario" name="usuario">
                <input type="password" placeholder="contraseña" name=contraseña>
                <button>registrarse</button>  
              </form>
  
          </div>
        </div>
      </main>
    </section>
    <script src="script.js"></script>
</body>
</html>