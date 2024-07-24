 const cards = document.querySelectorAll('.inner-container');

 function removeActiveClasses() {
    cards.forEach(card =>{
        card.classList.remov("active")
    });
 }
 
 cards.forEach(card   =>{
       card.addEventListener('click',() =>{
         removeActiveClasses();
          card.classList.add("active")
       });
 })