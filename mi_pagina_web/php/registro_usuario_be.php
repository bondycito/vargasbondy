<?php
    include 'conexion_be.php';


    $nombre_completo=$_POST['nombre_completo'];
    $correo=$_POST['correo'];
    $usuario=$_POST['usuario'];
    $contraseña=$_POST['contraseña'];


    $basse="INSERT INTO usuarios(nombre_completo,correo,usuario,contraseña)
                 VALUES('$nombre_completo','$correo','$usuario','$contraseña')";

    $verificar = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario ='$usuario'");
    if(mysqli_num_rows($verificar) > 0){
        echo '
        <script>
            alert("este usuario ya esta registrado mi pana, intentalo con otro nuevo");
            window.location ="../index.php";
          </script>
         ';
        exit();
    }

    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo ='$correo'");
    if(mysqli_num_rows($verificar_correo)>0){
        echo '
        <script>
            alert("este correo electronico ya esta registrado mi pana, intentalo con otro nuevo");
            window.location ="../index.php";
         </script>
        ';
        exit();
    }
    $ejecutar=mysqli_query($conexion,$basse);
    if($ejecutar){
        echo '
        <script>
            alert("te registraste exitosamente mi pana");
              window.location ="../index.php";
        </script>
    ';
    }else{
        echo '
        <script>
            alert("te registraste mal mi pana, intenta otra vez");
            window.location ="../index.php";
        </script>
    ';
    }
    mysqli_close($conexion);
?>