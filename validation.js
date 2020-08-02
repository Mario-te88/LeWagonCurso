
const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const consulta = document.querySelector("#consulta")
const consultaHelp = document.querySelector("#consultaHelp")

form.addEventListener ("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || consulta.value ==="") {
		if (email.value === ""){
		 emailHelp.innerText = "Completa este campo"}
		 if (consulta.value===""){
		 	consultaHelp.innerText = "Realizá una consulta"
		 }
		} else {
		form.submit();
	}
})
