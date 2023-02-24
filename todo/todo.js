const todolist = document.querySelector(".todolist");
const todoContainer = document.querySelector(".todoContainer");
const userData = document.getElementById('userData');

userData.addEventListener("keyup", function (data) {
  if (data.key == "Enter") {
    addToDoList(this.value);
    this.value = "";
  }
});
//    This function create a todo list 
const addToDoList = (userData) => {
  const list = document.createElement('li');
  list.classList.add("todolist");
  list.innerHTML = `
        <span class="listSpan">${userData}</span>
        <i class="fa-solid fa-trash" class="btn" type="button"></i>`;
  // This Event Check The List on click
  list.addEventListener("click", function () {
    list.classList.toggle("taskDone")
  })
  //   Appending list in html
  todoContainer.appendChild(list);
  // And This One Delete To DO List From Container
  list.querySelector("i").addEventListener("click",
    function () {
      list.remove()
    })
}
// Date and User Name In Header 
let midHeader = document.querySelector(".midHeader");
let todayDate = new Date()
let currentDay = todayDate.getDate();
let currentMonth = todayDate.getMonth() + 1;
let currentYear = todayDate.getFullYear();
midHeader.innerHTML = `
      <div ="userName">Hey, Junaid</div>
      <span>${currentDay}.0${currentMonth}.${currentYear}</span>
   `;
