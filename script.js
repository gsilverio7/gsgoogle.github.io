function redirectSearch(){
    var x = document.getElementById("field").value;
    var url = 'https://www.google.com/search?q=' + x;
    window.location.href = url;
}

function redirectLucky(){
    alert("Acho que não. Desculpe, esse botão não está funcionando no momento.")
}

