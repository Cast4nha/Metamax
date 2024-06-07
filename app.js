// nav toggler

let toggleBtn = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('active');
})

// faq

let faqs = [...document.querySelectorAll('.faq')];

faqs.map( faq => {

    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })

})

function SendMail(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    var params = {
        from_name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        origem: document.getElementById("origem").value,
        destino: document.getElementById("destino").value,
        data_ida: document.getElementById("data_ida").value,
        data_volta: document.getElementById("data_volta").value,
        passageiros: document.getElementById("passageiros").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_r9q1tr7", "template_opogtff", params)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!', response.status, response.text);
        }, function(error) {
            alert('Ocorreu um erro ao enviar a mensagem:', error);
        });
}

AOS.init();