
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const pokemones = [];   
const cargarTabla = ()=>{
  //1. obtener una referencia ala tabla
  let tbody = document.querySelector("#tabla_tbody");
  //eleminar todos los elementos que tenga el tbody
  tbody.innerHTML = "";
  //2. recorrer la lista de pokemones
  for(let i = 0; i < pokemones.length; ++i){
    let p = pokemones [i];
    //3. por cada pokemon generar una fila (tr)
    let tr = document.createElement("tr");
    //4. por cada atributo(nombre,tipo,descripcion, and so on), voy a generar celdas (td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
    
    let icono = document.createElement("i");
    if(p.tipo == "fuego"){
      //<i class="fas fa-fire"></i>
      //agregar clases a un elemento
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");
    }else if(p.tipo == "planta"){
      //<i class="fas fa-leaf"></i>
      icono.classList.add("fas","fa-leaf","text,success","fa-3x");
    }else if (p.tipo == "electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
    }else if(p.tipo == "agua"){
      //<i class="fas fa-tint"></i>
      icono.classList.add("fas","fa-tint","text-primary", "fa-3x");
    }else{
      //<i class="fas fa-star"></i>
      icono.classList.add("fas","fa-star","text-info","fa-3x")
    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");
    
    //5. agregar las celdas al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //6 agregar el tr a la tabla
    tbody.appendChild(tr);
  };

};
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //Esto lo saque de la pagina del tinymce, es para obtener lo escrito
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //checked indica si el radio buttom esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //El tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;

    //como crear un objeto
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    //como guardar en una lista de elementos
    pokemones.push(pokemon); //append
    cargarTabla();
    //titulo,texto,tipo: info,success,danger,warning.
    Swal.fire("Éxito","Pokemon registrado","success");
} );