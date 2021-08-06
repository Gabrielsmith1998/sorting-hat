let newWizardz = [];

let voldyArmy = [];

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToRender;
}


const initSortingCard = () => {
  const domString = `
  <div class="card">
    <div class="init-card-body">
    <h5 class="init-card-title">Welcome to Hogwarts!</h5>
        <p class="card-text">Draco Dormiens Nunquam Titillandus</p>
        <button class="btn btn-primary">Lets get sorting!</button>
     </div>
  </div>
  `;
  renderToDom('#startSortingCard', domString);
 }


const wizardFormBuilder = () => {
  const domString = `
  <form id="wizardFormBuilder">
    <div class="mb-3">
          <label for="name" class="form-label">Student Name</label>
          <input required type="text" class="form-control" id="name">
          <button onclick="houseSorter" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
 `;
  renderToDom('#wizardForm', domString);

  wizardFormEvents();
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

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newStudent = {
      name: document.querySelector('#name').value, 
      house: houseSorter(1,4)
  };

  newWizardz.push(newStudent);
  wizardBuilder(newWizardz);

  document.querySelector('#wizardFormBuilder').reset()
};


const wizardBuilder = (wizardArray) => {
  let domString = "";
  wizardArray.forEach((student, index) => {
  domString += `
      <div class="card" id=${student.house} style="width: 18rem;">
        <img src="https://media1.popsugar-assets.com/files/thumbor/hr49kKYeddZvYfxC8yx0Zu3hi0g/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/15/800/n/1922283/tmp_YwOCk7_d9d70a82057ef6ae_MSDHAPO_EC023_H.JPG" class="card-img-top" alt=${newWizardz.name}>
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <a type="button" id=${index} class="btn btn-primary">Expel</a>
      </div>
    </div>
  `;
 });

  renderToDom('#studentContainer', domString)
}

const expelStudent = (event) => {  
  const targetType = event.target.type;
  const targetId = event.target.id;

  if(targetType === "button") {
      voldyArmy.push(newWizardz.splice(targetId, 1)[0]); 
 
  };
  VoldyBuilder(voldyArmy); 
  wizardBuilder(newWizardz);
}


const VoldyBuilder = () =>  {
    let domString = '';
    voldyArmy.forEach((badGuy) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <img src="https://carboncostume.com/wordpress/wp-content/uploads/2019/10/deatheater-harrypotter.jpg" class="card-img-top" alt=${badGuy.name}>
      <div class="voldy-body">
        <h5 class="card-title">${badGuy.name}</h5>
        <p class="card-text">Voldy's Army</p>
      </div>
    </div>
      `
    });

    renderToDom("#voldyContainer", domString)
  }

  const wizardFormEvents = () => {
    const wizardFormElement = document.querySelector("#wizardFormBuilder");
    wizardFormElement.addEventListener("submit", handleFormSubmit);

  }
   

const buttonEvents = () => {
  document.querySelector('#startSortingCard')
  .addEventListener('click', wizardFormBuilder);

  document.querySelector('#studentContainer')
  .addEventListener("click", expelStudent);

}


const init = () => {
  initSortingCard();
  wizardBuilder(newWizardz); 
  VoldyBuilder(voldyArmy);
  buttonEvents();

 
 }

init();




