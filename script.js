let arrEl = ['acqua', 'miele', 'caffe', 'pesce']
let listaDOM = null

function setListaTagLI(arr){
	for(let i = 0; i < arr.length; i++){
		var li = document.createElement('li')
		listaDOM.appendChild(li)
		li.innerHTML = arr[i]
	}
}

function add(){
	let input = document.getElementById("addInput").value
	arrEl.push(input)
	var li = document.createElement('li')
	listaDOM.appendChild(li)
	li.innerHTML = input
	document.getElementById("addInput").value = ""
}


window.onload = function() {
	listaDOM = document.getElementById("lista")
	setListaTagLI(arrEl)	
}
