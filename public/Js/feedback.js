/****************************************
 * Feedback
 ***************************************/

const Feedback = {};

Feedback.validate = function(target) {
  target.classList.remove('is-invalid');
  target.classList.add('is-valid');
};

Feedback.invalidate = function(target) {
  target.classList.remove('is-valid', 'is-invalid');
};

Feedback.error = function(target) {
  target.classList.remove('is-valid');
  target.classList.add('is-invalid');
};

function avancement_barre(verif, chemin){
    if(verif==true){
       Feedback.error(chemin); 
       Feedback.validate(chemin); 
    }
    else{
       Feedback.invalidate(chemin);
       }
    const progressbar = document.querySelector('#progressbar');
    let nb_elements=document.querySelectorAll('.is-valid').length;
    progressbar.style.width=nb_elements*12.5+'%';          
}

function barre_passe(force){
    const progressbar2 = document.querySelector('#mdpbar');
    const message=document.querySelector('#msgmdp');
    progressbar2.classList.remove('bg-success');
    progressbar2.classList.remove('bg-warning');
    progressbar2.classList.remove('bg-danger');
    if(force==0){
        progressbar2.style.width=33+'%';
        progressbar2.classList.add('bg-danger');
        message.style.color='crimson';
        message.textContent="Mot de Passe Invalide.";
    }
    if(force==1){
        progressbar2.style.width=66+'%';
        progressbar2.classList.add('bg-warning');
        message.style.color='yellow';
        message.textContent="Force du mot de passe faible.";
    }
    if(force==2){
        progressbar2.style.width=100+'%';
        progressbar2.classList.add('bg-success');
        message.style.color='green';
        message.textContent="Force du mot de passe excellente.";
    }
}

(function() {
                'use strict';
                window.addEventListener('load', function() {
                    let forms = document.getElementsByClassName('needs-validation');
                    let validation = Array.prototype.filter.call(forms, function(form) {
                        form.addEventListener('submit', function(event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add('was-validated');
                        }, false);
                    });
                }, false);
            })();