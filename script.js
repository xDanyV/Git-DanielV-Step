var editando = false;
var filaE = null;
document.getElementById("form_1").addEventListener('submit', function (e) {


    e.preventDefault(); //Previene que se refresque la pagina

    var pelicula = {
        titulo: document.getElementById("txtTitulo").value,
        año: document.getElementById("txtAño").value,
        duracion: document.getElementById("txtDuracion").value,
        genero: document.getElementById("txtGenero").value,
        director: document.getElementById("txtDirector").value,
        sinopsis: document.getElementById("txtSinopsis").value
    }

    if (editando) {
        editarPelicula(pelicula, filaE)
    } else {
        agregarPelicula(pelicula);
    }



    this.reset();

});

function editarPelicula(pelicula, fila) {
    fila.children[0].innerHTML = pelicula.titulo;
    fila.children[1].innerHTML = pelicula.año;
    fila.children[2].innerHTML = pelicula.duracion;
    fila.children[3].innerHTML = pelicula.genero;
    fila.children[4].innerHTML = pelicula.director;
    fila.children[5].innerHTML = pelicula.sinopsis;
    editando = false;
    filaE = null;
}

function llenadoFormulario(fila) {
    document.getElementById("txtTitulo").value = fila.children[0].innerHTML;
    document.getElementById("txtAño").value = fila.children[1].innerHTML;
    document.getElementById("txtDuracion").value = fila.children[2].innerHTML;
    document.getElementById("txtGenero").value = fila.children[3].innerHTML;
    document.getElementById("txtDirector").value = fila.children[4].innerHTML;
    document.getElementById("txtSinopsis").value = fila.children[5].innerHTML;
}


function agregarPelicula(pelicula) {

    var tbody = document.getElementById("tablaPeliculas");

    var fila = document.createElement("tr");

    for (var key in pelicula) {
        var td = document.createElement("td");
        td.textContent = pelicula[key];
        fila.appendChild(td);
    }

    var td = document.createElement("td");
    var boton = document.createElement("button");
    boton.textContent = "Eliminar"
    boton.classList.add('btn', 'btn-danger');
    boton.onclick = function () {
        tbody.removeChild(fila)
    }
    td.appendChild(boton);
    fila.appendChild(td);

    var td2 = document.createElement("td");
    var boton2 = document.createElement("button");
    boton2.textContent = "Editar";
    boton2.classList.add("btn", "btn-success");

    boton2.onclick = function () {
        llenadoFormulario(fila);
        filaE = fila;
        editando = true;
    };

    td2.appendChild(boton2);
    fila.appendChild(td2);

    tbody.appendChild(fila);

}