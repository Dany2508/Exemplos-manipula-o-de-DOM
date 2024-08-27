const listaDeFrutas = document.getElementById('listaFruta')
const fruta = document.getElementById('novaFruta')


function adicionarFruta(){
    const novaFruta = fruta.value
    //verificar se nao ta vazio
    if(novaFruta !== ''){
        listaDeFrutas.innerHTML += `<li>${novaFruta}</li>` //crase
        fruta.value =  '' //limpa o campo depois que enviado
    }else{
        alert('Digite uma fruta')
    }


}
