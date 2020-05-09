const select1 = document.querySelector('#jour');
const select2 = document.querySelector('#mois');
const select3 = document.querySelector('#annee' );
for (let i=1; i<=31; i++) {
  const option = document.createElement('option');
  option.innerText = i;
    option.value=i;
  select1.appendChild(option);
}

var Mois = new 
Array('Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre');
for (let i=0; i<12; i++) {
  const option = document.createElement('option');
  option.innerText = Mois[i];
    option.value=Mois[i];
  select2.appendChild(option);
}

var d = new Date();
var n = d.getFullYear();
for (let i=n; i>=1900; i--) {
  const option = document.createElement('option');
  option.innerText = i;
    option.value=i;
  select3.appendChild(option);
}
