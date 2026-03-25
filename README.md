# radiospatagonicas
Directorio de emisoras de radio AM y FM
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Radios Patagónicas</title>

<style>

body{
    margin:0;
    font-family: Arial, sans-serif;
    background:#2f2f2f;
    color:white;
    text-align:center;
}

h1{
    background:#3b6edc;
    display:inline-block;
    padding:10px 20px;
    border-radius:6px;
    margin-top:20px;
}

.player{
    margin:20px auto;
}

audio{
    width:90%;
    max-width:400px;
}

/* GRILLA */
.grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:15px;
    padding:20px;
}

/* TARJETAS */
.card{
    background:#1f1f1f;
    padding:15px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
}

.card h3{
    margin:5px 0;
    font-size:16px;
}

.card p{
    margin:0;
    font-size:12px;
    color:#aaa;
}

button{
    margin-top:10px;
    padding:8px 15px;
    border:none;
    border-radius:6px;
    background:#3b6edc;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#2f5bc1;
}

/* CELULAR */
@media(max-width:768px){
    .grid{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:480px){
    .grid{
        grid-template-columns: 1fr;
    }
}

</style>
</head>

<body>

<h1>AM FM GENERAL ROCA</h1>

<div class="player">
<audio id="player" controls></audio>
</div>

<div class="grid">

<!-- RADIO -->
<div class="card">
<h3>Pueblo Viejo 89.9</h3>
<p>General Roca</p>
<button onclick="playRadio('https://s3.netradiofm.com/p/6042/stream')">Reproducir</button>
</div>

<div class="card">
<h3>Antena Libre 89.1</h3>
<p>General Roca</p>
<button onclick="playRadio('https://cdn.instream.audio/:9140/stream')">Reproducir</button>
</div>

<div class="card">
<h3>LU19 AM 690</h3>
<p>Cipolletti</p>
<button onclick="playRadio('https://streaming01.radionline.com.ar/lu19')">Reproducir</button>
</div>

<!-- DUPLICAR DESDE ACÁ 👇 -->

<div class="card">
<h3>Nombre Radio</h3>
<p>Ciudad</p>
<button onclick="playRadio('URL_STREAM')">Reproducir</button>
</div>

<!-- FIN DUPLICADO -->

</div>

<script>
function playRadio(url){
    var player = document.getElementById("player");
    player.src = url;
    player.play();
}
</script>

</body>
</html>
