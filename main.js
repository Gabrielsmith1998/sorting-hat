let newWizardz = [
  {
  name: "Gabriel Smith",
  house: "ravenclaw",
}
];

let voldyArmy = [{}]

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToRender;
}

const initSortingCard = () => {
  let domString = `
<div class="card-body">
  <h5 class="card-title">Welcome To Hogwarts!</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href='#' class="btn btn-primary" id="sort">Lets get sorting!</a>
</div>
</div>
  `
  renderToDom('#startSortingCard', domString);
}



const handleFormSubmit = (event) => {
  event.preventDefault();
  const newStudent = {
      name: document.querySelector('#name').value, 
      house: houseSorter(1,4)
  };
  newWizardz.push(newStudent);
  wizardBuilder(newWizardz);


  console.log(newWizardz);
};

const expelStudent = (event) => {
  const targetId = event.targetId.id;
  const targetType = event.target.type;

  if (targetType === "expel") {
    newWizardz.splice(targetId, 1)
    wizardBuilder(newWizardz)
  }
}

const houseSorter = (min, max) => {
  {
    const randomHouse = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (randomHouse === 1) {
      return "gryfinndor";
    } else
    if (randomHouse === 2) {
      return "ravenclaw"; 
    } else
    if (randomHouse === 3) {
      return "slytherin";
    } else
    if (randomHouse === 4) {
      return "hufflepuff"; 
    }
  }
}

const wizardBuilder = (wizardzArray) => {
  let domString = '';
  wizardzArray.forEach((student) => {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">${student.house}</p>
    <a href="#" id="expel" class="btn btn-primary">Expel</a>
  </div>
</div>
  `;
 });

  renderToDom('#studentContainer', domString)
}

const wizardFormEvents = () => {
  const wizardFormElement = document.querySelector("#wizardFormBuilder");
  wizardFormElement.addEventListener("submit", handleFormSubmit)
  }


const wizardFormBuilder = () => {
  const domString = `
  <form id="wizardFormBuilder">
<div class="mb-3">
      <label for="name" class="form-label">Student Name</label>
      <input required type="text" class="form-control" id="name">
</div>
<button onclick="houseSorter" type="submit" class="btn btn-primary">Submit</button>
</form>
 `;
 
  renderToDom('#wizardForm', domString);

  wizardFormEvents();
 }

const buttonEvents = () => {
  document.querySelector('#startSortingCard').addEventListener('click', wizardFormBuilder)
}





const init = () => {
  initSortingCard();
  wizardBuilder(newWizardz); 
  buttonEvents();
 }

init();




