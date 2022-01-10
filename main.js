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
const ButtonForAddTarefa2 = document.querySelector('#btn-add-tarefa2')
const ButtonForAddNewTarefa = document.querySelector('#nova-tarefa')

const Data = new Date();
const dia = (Data.getDate());
const mes = (Data.getMonth() + 1);
const ano = (Data.getFullYear());

const ClearTarefa = false;

let cont = 0;

const AdicionarTarefa = () =>{
  DisplayAddTarefa2.style.display = 'flex'
  ButtonForAddTarefa1.style.backgroundColor = '#eee'
  ButtonForAddTarefa1.style.color = 'black'
  ButtonForAddTarefa1.style.cursor = 'auto'
  document.getElementById('btn-add-tarefa').disabled = true;
  TextAddTarefa.disabled = true;
}


document.getElementById('btn-add-tarefa').addEventListener('click', AdicionarTarefa);

const ConfirmAdicionarTarefa = () => {

cont++;

      const DeadlineNew = TextDeadline.value.split('-')
      const TituloTarefa = TextAddTarefa.value;
      const TerminoTarefa = DeadlineNew;
      const ResponsavelTarefa = TextResponsible.value;

    
    ButtonForAddTarefa1.style.backgroundColor = '#eee'
    ButtonForAddTarefa1.style.color = 'black'
    ButtonForAddTarefa1.style.cursor = 'auto';
    ButtonForAddTarefa2.style.backgroundColor = '#eee'
    ButtonForAddTarefa2.style.color = 'black'
    ButtonForAddTarefa2.style.cursor = 'auto'
    document.getElementById('btn-add-tarefa2').disabled = true;
    document.getElementById('add-tarefa-responsavel').disabled = true;
    document.getElementById('add-tarefa-termino').disabled = true;
    document.getElementById('add-tarefa').disabled = true;

    ButtonForAddNewTarefa.style.display = 'flex'

    AdicionarNovoContainer(TituloTarefa,TerminoTarefa,ResponsavelTarefa,cont);


}

document.getElementById('btn-add-tarefa2').addEventListener('click', ConfirmAdicionarTarefa)


const AdicionarNovaTarefa = () =>{

    ButtonForAddNewTarefa.style.display = 'none'


    ButtonForAddTarefa2.style.backgroundColor = 'rgb(30, 170, 123)';
    ButtonForAddTarefa2.style.color = 'white';
    ButtonForAddTarefa2.style.cursor = 'pointer';
    ButtonForAddTarefa1.style.display = 'none'
    TextAddTarefa.style.width =  '100vw'

    TextAddTarefa.value = ''
    TextDeadline.value = ''
    TextResponsible.value = ''

    document.getElementById('add-tarefa').disabled = false;
    document.getElementById('btn-add-tarefa2').disabled = false;
    document.getElementById('add-tarefa-responsavel').disabled = false;
    document.getElementById('add-tarefa-termino').disabled = false;
    document.getElementById('btn-nova-tarefa').disabled = false;
    document.getElementById('add-tarefa-termino').disabled = false;
}


document.getElementById('btn-nova-tarefa').addEventListener('click', AdicionarNovaTarefa)


  
const AdicionarNovoContainer = (TituloTarefa, TerminoTarefa, ResponsavelTarefa, cont) =>{

    let divNovaSection = document.createElement("div");
    divNovaSection.className = 'section'+ cont;
    document.getElementsByClassName("container")[0].appendChild(divNovaSection);

    let DivNovaButtons = document.createElement('div')
    DivNovaButtons.className = "btns";
    DivNovaButtons.innerHTML = '<button><i class="fas fa-grip-vertical" style="font-size: 30px;"></button></i> <input type="checkbox" style="font-size: 100px;"> <button><i class="fas fa-comment"></i></button> <button><i class="fas fa-clock"></i></button> <button><i class="fas fa-check-square"></i></button> <button><i class="fas fa-bars"></button></i>'
    document.getElementsByClassName("section" + cont)[0].appendChild(DivNovaButtons)   
    
    let DivNovaTitulos = document.createElement('div')
    DivNovaTitulos.id = 'btn-section';
    DivNovaTitulos.className = 'titulos';
    DivNovaTitulos.textContent = TituloTarefa;
    document.getElementsByClassName("section" + cont)[0].appendChild(DivNovaTitulos)

    let DivNovaButtonPrazo = document.createElement('div')
    DivNovaButtonPrazo.id = 'btn-section';
    DivNovaButtonPrazo.className = 'btn-prazo';
    SituacaoPrazo(DivNovaButtonPrazo,TerminoTarefa);
    document.getElementsByClassName("section" + cont)[0].appendChild(DivNovaButtonPrazo)

    let DivNovaDateTermino = document.createElement('div')
    DivNovaDateTermino.id = 'btn-section';
    DivNovaDateTermino.className = 'data-termino';
    DivNovaDateTermino.textContent = TerminoTarefa[2] + '/' + TerminoTarefa[1] + '/' + TerminoTarefa[0];
    document.getElementsByClassName("section" + cont)[0].appendChild(DivNovaDateTermino)

    let DivNovaResponsavel = document.createElement('div')
    DivNovaResponsavel.id = 'btn-section';
    DivNovaResponsavel.className = 'responsavel';
    DivNovaResponsavel.textContent = ResponsavelTarefa;
    document.getElementsByClassName("section" + cont)[0].appendChild(DivNovaResponsavel)

    return;
}

const SituacaoPrazo = (DivNovaButtonPrazo, TerminoTarefa) =>{

  console.log(ano)
  console.log(dia)
  console.log(mes)
  console.log(TerminoTarefa)
  
  if(ano === parseInt(TerminoTarefa[0]) && dia - 1 === parseInt(TerminoTarefa[2]) && mes === parseInt(TerminoTarefa[1  ])){
    let btnNew = document.createElement('i')
    btnNew.classList.add("fas", "fa-square")
    btnNew.style.color = '#FF0000';
    DivNovaButtonPrazo.appendChild(btnNew)


  } else if (ano === parseInt(TerminoTarefa[0]) && dia + 1 === parseInt(TerminoTarefa[2]) && mes === parseInt(TerminoTarefa[1])){
    let btnNew = document.createElement('i')
    btnNew.classList.add("fas", "fa-exclamation-triangle")  
    btnNew.style.color = '#ffff00';
    DivNovaButtonPrazo.appendChild(btnNew)


  } else if (ano === parseInt(TerminoTarefa[0]) && mes < parseInt(TerminoTarefa[1])){
    let btnNew = document.createElement('i')
    btnNew.classList.add("fas", "fa-circle")
    btnNew.style.color = '#00FF00';
    DivNovaButtonPrazo.appendChild(btnNew)
    

  } else{
    alert('Digita a data certa o filho da puta')
    ClearTarefa = true;
  }


  if(ClearTarefa === false){
   
  } 
}