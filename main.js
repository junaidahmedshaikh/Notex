const containerForNotes = document.querySelector('.containerForNotes');


const addbtn = document.querySelector(".addBtn")
addbtn.addEventListener('click', function(){
    const noteBox = document.createElement('div')
    noteBox.classList.add('noteBox');
    noteBox.innerHTML = `
    <input type="text" placeholder="Title" autofocus>
    <textarea name="" placeholder="" id="" cols="30" rows="10"></textarea>
    `;
    containerForNotes.appendChild(noteBox);


});
const newNotes = () => {
    let noteBox = document.createElement('div');

    noteBox.innerHTML = `
    <input type="text">
    <textarea name="" id="" cols="30" rows="10"></textarea>
    
    `;
    containerForNotes.appendChild(noteBox);
}

    // let mains = document.getElementsByTagName("main")
    // if(noteBox.length > 4){
    //     mains.style.height = "auto";
    // }
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
