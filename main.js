const DisplayAddTarefa2 = document.querySelector('#add-tarefa-2');
const ButtonForAddTarefa1 = document.querySelector('#btn-add-tarefa')
const Title = document.querySelector('.titulos');
const Deadline = document.querySelector('.data-termino');
const Responsible = document.querySelector('.responsavel');
const TextAddTarefa = document.querySelector('#add-tarefa');
const TextResponsible = document.querySelector('#add-tarefa-responsavel');
const TextDeadline = document.querySelector('#add-tarefa-termino');
const Container = document.querySelector('.container')
const TextButtomPrazo = document.querySelector('.btn-prazo')

const AdicionarTarefa = () =>{
  DisplayAddTarefa2.style.display = 'flex'
  ButtonForAddTarefa1.style.backgroundColor = '#eee'
  ButtonForAddTarefa1.style.color = 'black'
  ButtonForAddTarefa1.style.cursor = 'auto'
  document.getElementById('btn-add-tarefa').disabled = true;
  TextAddTarefa.disabled = true;
}

const Data = new Date();
const dia = (Data.getDate());
const mes = (Data.getMonth() + 1);
const ano = (Data.getFullYear());


const ClearTarefa = false;


document.getElementById('btn-add-tarefa').addEventListener('click', AdicionarTarefa);

const ConfirmAdicionarTarefa = () => {

    const DeadlineNew = TextDeadline.value.split('-')

    if(ano === parseInt(DeadlineNew[0]) && dia - 1 === parseInt(DeadlineNew[2]) && mes === parseInt(DeadlineNew[1  ])){
      let btnNew = document.createElement('i')
      btnNew.classList.add("fas", "fa-square")
      btnNew.style.color = '#FF0000';
      TextButtomPrazo.appendChild(btnNew)

      Title.textContent = TextAddTarefa.value;
      Responsible.textContent = TextResponsible.value;
      Deadline.textContent = DeadlineNew[2] + ' / ' + DeadlineNew[1] + ' / ' + DeadlineNew [0];

    } else if (ano === parseInt(DeadlineNew[0]) && dia + 1 === parseInt(DeadlineNew[2]) && mes === parseInt(DeadlineNew[1])){
      let btnNew = document.createElement('i')
      btnNew.classList.add("fas", "fa-exclamation-triangle")  
      btnNew.style.color = '#ffff00';
      TextButtomPrazo.appendChild(btnNew)

      Title.textContent = TextAddTarefa.value;
      Responsible.textContent = TextResponsible.value;
      Deadline.textContent = DeadlineNew[2] + ' / ' + DeadlineNew[1] + ' / ' + DeadlineNew [0];

    } else if (ano === parseInt(DeadlineNew[0]) && mes < parseInt(DeadlineNew[1])){
      let btnNew = document.createElement('i')
      btnNew.classList.add("fas", "fa-circle")
      btnNew.style.color = '#00FF00';
      TextButtomPrazo.appendChild(btnNew)
      
      Title.textContent = TextAddTarefa.value;
      Responsible.textContent = TextResponsible.value;
      Deadline.textContent = DeadlineNew[2] + ' / ' + DeadlineNew[1] + ' / ' + DeadlineNew [0];

    } else{
      alert('Digita a data certa o filho da puta')
      ClearTarefa = true;
    }


    if(ClearTarefa === false){
     
    } 
}

document.getElementById('btn-add-tarefa2').addEventListener('click', ConfirmAdicionarTarefa)

