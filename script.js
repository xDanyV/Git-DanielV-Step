document.getElementById("form_1").addEventListener('submit', function (e) {
    alert("Click");

    e.preventDefault(); //Previene que se refresque la pagina

    var pelicula = {
        titulo: document.getElementById("txtTitulo").value,
        año: document.getElementById("txtAño").value,
        duracion: document.getElementById("txtDuracion").value,
        genero: document.getElementById("txtGenero").value,
        director: document.getElementById("txtDirector").value,
        sinopsis: document.getElementById("txtSinopsis").value
    }

    agregarPelicula(pelicula);

    this.reset();

});

function agregarPelicula(pelicula) {
    var tbody = document.getElementById("tablaPeliculas");

    var fila = document.createElement("tr");

    for(var key in pelicula){
        var td = document.createElement("td");
        td.textContent = pelicula[key];
        fila.appendChild(td);
    } 
    
    var td = document.createElement("td");
    var boton = document.createElement("button");
    boton.textContent = "Eliminar"
    boton.classList.add('btn','btn-danger');
    boton.onclick = function(){
        tbody.removeChild(fila)
    }
    td.appendChild(boton);
    fila.appendChild(td);

    var td2 = document.createElement("td");
    var boton2 = document.createElement("button");
    boton2.textContent = "Editar";
    boton2.classList.add("btn", "btn-success");
    boton2.onclick = function(){
        document.getElementById("txtTitulo").value = pelicula.titulo;
        document.getElementById("txtAño").value = pelicula.año;
        document.getElementById("txtDuracion").value = pelicula.duracion;
        document.getElementById("txtGenero").value = pelicula.genero;
        document.getElementById("txtDirector").value = pelicula.director;
        document.getElementById("txtSinopsis").value = pelicula.sinopsis;
    };

    td2.appendChild(boton2);
    fila.appendChild(td2);
    
    tbody.appendChild(fila);

}