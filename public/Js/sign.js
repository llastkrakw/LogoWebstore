/****************************************
 * Events
 ***************************************/

document
  .querySelectorAll('input, select')
  .forEach(el => {
    el.onchange = function(event) {
      const target = event.target;
      if (Checker[target.id]()) {
        Feedback.validate(target);
      } else {
        Feedback.invalidate(target);
      }
    }
  });

document.querySelector('#sign').onsubmit = function(event) {
  event.preventDefault();
  console.log('TODO: Tout vérifier avant d\'envoyer le formulaire');
}
