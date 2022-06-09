const bouton_plus_q = document.getElementById('plus_q');
const nombre_question = document.getElementById('n_q');
const bouton_moins_q = document.getElementById('moins_q');

const max_nombre_question_valeur = (parseInt(nombre_question.innerText) + 1)
const min_nombre_question_valeur = (parseInt(nombre_question.innerText) - 1)

bouton_moins_q.addEventListener('click', function(event) {
    let nombre_question_valeur = nombre_question.innerText;
    if(nombre_question_valeur > min_nombre_question_valeur && nombre_question_valeur < max_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) - 1).toString();
    }
    else if(nombre_question_valeur == max_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) - 2).toString();
    }
    else if(nombre_question_valeur == min_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) + 1).toString();
    }
});

bouton_plus_q.addEventListener('click', function(event) {
    let nombre_question_valeur = nombre_question.innerText;

    if(nombre_question_valeur < max_nombre_question_valeur && nombre_question_valeur > min_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) + 1).toString();
    }
    else if(nombre_question_valeur == min_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) + 2).toString();
    }
    else if(nombre_question_valeur == max_nombre_question_valeur) {
        nombre_question.innerText = (parseInt(nombre_question_valeur) - 1).toString();
    }
    });

const bouton_plus_r = document.getElementById('plus_r');
const nombre_reponse = document.getElementById('n_r');
const bouton_moins_r = document.getElementById('moins_r');

const max_nombre_reponse_valeur = (parseInt(nombre_reponse.innerText) + 1)
const min_nombre_reponse_valeur = (parseInt(nombre_reponse.innerText) - 1)

bouton_moins_r.addEventListener('click', function(event) {
    let nombre_reponse_valeur = nombre_reponse.innerText;
    if(nombre_reponse_valeur > min_nombre_reponse_valeur && nombre_reponse_valeur < max_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) - 1).toString();
    }
    else if(nombre_reponse_valeur == max_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) - 2).toString();
    }
    else if(nombre_reponse_valeur == min_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) + 1).toString();
    }
});

bouton_plus_r.addEventListener('click', function(event) {
    let nombre_reponse_valeur = nombre_reponse.innerText;

    if(nombre_reponse_valeur < max_nombre_reponse_valeur && nombre_reponse_valeur > min_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) + 1).toString();
    }
    else if(nombre_reponse_valeur == min_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) + 2).toString();
    }
    else if(nombre_reponse_valeur == max_nombre_reponse_valeur) {
        nombre_reponse.innerText = (parseInt(nombre_reponse_valeur) - 1).toString();
    }
});