//creating variable to add functionality to cards in project gallery
const galleryCards = document.querySelectorAll('.card');

const gallery = document.querySelector('#project-gallery');

//code to enlarge and shrink cards when clicked.
galleryCards.forEach(galleryCard => {
    //adds event listener for all cards. galleryCards was declared because this code is intented to be use only in the projects gallery section.
  galleryCard.addEventListener('click', event => {
    //declares a card variable as the target of the event detected by the event listener. 
    const card = event.target;
    //declares a varible that identifies which html elements in the card variable have 'active' as part of their classlist
    const isActive = card.classList.contains('active');
    //the toggle method checks if 'active' is part of card's classlist. If it is, it adds it. If it's not, it removes it. 
    card.classList.toggle('active');
    //this part of the function was added because html elements were having multiple click event listeners added. This occured after I added functionality to shrink cards after they were expanded. Now, if a card is identified to NOT be active, a click event listener is added and calls the shrinkCard function. otherwise, the event listener is removed.
    if (!isActive) {
      card.addEventListener('click', shrinkCard);
    } else {
      card.removeEventListener('click', shrinkCard);
    }
  });
});

function shrinkCard(event) {
  const card = event.target;
  card.classList.remove('active');
}
