let arrEl = ['acqua', 'miele', 'caffe', 'pesce']
let listaDOM = null

function setListaTagLI(arr){
	for(let i = 0; i < arr.length; i++){
		add(arr[i])
	}
}

function addLista(){
	let input = document.getElementById("addInput").value
	add(input)
	arrEl.push(input)
}

function add(valueToAdd){
	var li = document.createElement('li')
	listaDOM.appendChild(li)
	li.innerHTML = valueToAdd
	li.className = "list-group-item"
	document.getElementById("addInput").value = ""
}


window.onload = function() {
	listaDOM = document.getElementById("lista")
	setListaTagLI(arrEl)	
}
