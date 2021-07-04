let table = document.getElementsByClassName('main-table-tbody-tr-td');


// tbody.onclick = function (event) {
//   event.target.style.backgroundColor = 'green';
//   event.target.style.color = 'white';
//   setTimeout(() => {
//     alert('terget = ' + event.target.tagName + ', this = ' + this.tagName);
//     event.target.style.backgroundColor = '';
//     event.target.style.color = ''
//   }, 0);
// };


tbody.addEventListener('click', function (draw) {
  draw.target.style.backgroundColor = 'green';
  draw.target.style.color = 'white';
  setTimeout(() => {
    alert('Запрацював клік на клітинці!' + 'terget = ' + draw.target.tagName + ', this = ' + this.tagName);
    draw.target.style.backgroundColor = '';
    draw.target.style.color = ''
  }, 0);
}, true);