

/*jslint es6, browser */

const acordeonTriggers = document.querySelectorAll('.acordion .trigger');
// const acordeon = document.querySelector('.acordion');
// const trigger = document.querySelectorAll('.trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if  (isOpen ) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
});

// // Seleciona todos os cabeçalhos do acordeão
// const headers = document.querySelectorAll('.accordion-header');

// // Adiciona o evento de clique a cada cabeçalho
// headers.forEach((header) => {
//   header.addEventListener('click', () => {
//     // Seleciona o corpo do acordeão relacionado
//     const body = header.nextElementSibling;

//     // Alterna a visibilidade do corpo do acordeão
//     body.classList.toggle('active');

//     // Seleciona o .button-abrir dentro do cabeçalho
//     const botaoAbrir = header.querySelector('.button-abrir');

//     // Alterna a cor do botão
//     if (botaoAbrir.textContent === '+') {
//       botaoAbrir.textContent = '-'; // Muda o texto para '-'
//       botaoAbrir.style.background = 'hsl(292, 42%, 14%)'; // Cor escura
//     } else {
//       botaoAbrir.textContent = '+'; // Muda o texto para '+'
//       botaoAbrir.style.color = '#fff'; // Cor padrão
//       botaoAbrir.style.background = 'hsl(292, 16%, 49%)'; // Cor escura
//     }
//   });
// });

















// // Seleciona todos os cabeçalhos do acordeão
// const headers = document.querySelectorAll('.accordion-header');

// // Adiciona o evento de clique a cada cabeçalho
// headers.forEach((header) => {
//   header.addEventListener('click', () => {
//     // Seleciona o corpo do acordeão relacionado
//     const body = header.nextElementSibling;

//     // Alterna a classe 'active' no cabeçalho e no corpo
//     header.classList.toggle('active');
//     body.classList.toggle('active');

//     // Alterna o sinal de '+' para '-'
//     const sinal = header.querySelector('.button-abrir');
//     if (sinal.textContent === '+') {
//       sinal.textContent = '-';
//     } else {
//       sinal.textContent = '+';
//     }
//   });
// });





// // Seleciona todos os botões do acordeão
// const headers = document.querySelectorAll('.accordion-header');

// // Adiciona o evento de clique a cada botão
// headers.forEach((header) => {
//   header.addEventListener('click', () => {
//     // Encontra o elemento "accordion-body" relacionado ao botão clicado
//     const body = header.nextElementSibling;

//     // Alterna a visibilidade
//     if (body.style.display === 'block') {
//       body.style.display = 'none'; // Esconde
//       header.querySelector('.button-abrir').textContent = '+'; // Ajusta o botão
//     } else {
//       body.style.display = 'block'; // Mostra
//       body.style.color = 'hsl(292, 42%, 14%)'; 
//       header.querySelector('.button-abrir').textContent = '-'; // Ajusta o botão
//     }
//   });
// });











// // Seleciona o parágrafo e o botão
// const paragrafo = document.getElementById('paragrafo');
// const accordion = document.getElementById('accordion-header')
// const botao = document.getElementById('button-abrir');

// // Adiciona um evento de clique no botão
// accordion.addEventListener('click', () => {
//     // Verifica se o parágrafo está visível
//     if (paragrafo.style.display === 'none') {
//         // Mostra o parágrafo
//         paragrafo.style.display = 'block';
//         botao.textContent = '-'; // Altera o texto do botão
//     } else {
//         // Esconde o parágrafo
//         paragrafo.style.display = 'none';
//         botao.textContent = '+'; // Altera o texto do botão
//     }
// });