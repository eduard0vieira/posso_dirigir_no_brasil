function dirigir (){
    const name   = prompt("Qual seu Nome?")
    const country = prompt("Qual seu país?")
    const brazilArray = ["brazil", "brasil"]
    
    if (brazilArray.includes(country.toLowerCase())) {
        let cpf = prompt("Coloque seu cpf")
        while (!/^[0-9]+$/.test(cpf)) {
            alert("Voce nao colocou um número");
            cpf = prompt("coloque seu cpf ");
        }
    }
    else {
        alert("Voce nao é Brasileiro")
        return 
    }

    const age = prompt("Qual sua idade?")

    if (age < 18) {
        alert(`Voce nao pode dirigir com ${age} anos no Brasil`)
    }
    else if(age => 18){
        alert(`Voce pode dirigir com ${age} anos no Brasil`)
    } 

    window.location.href = "https://www.google.com/search?client=opera-gx&q=bandeira+do+brasil&sourceid=opera&ie=UTF-8&oe=UTF-8";
}


