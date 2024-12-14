import { fetchByValue } from './js/pixabay-api.js';
import { renderBySearch } from './js/render-functions.js';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const textByUser = e.target.elements[0].value;
  if (textByUser.trim() === '') {
    console.log('Please enter text!');
    return;
  }
  fetchByValue(textByUser.trim())
    .then(data => {
      if (data.hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        gallery.innerHTML = '';
        form.reset();
        return;
      }
      const markup = renderBySearch(data.hits);
      gallery.innerHTML = markup;
      form.reset();
    })
    .catch(err => console.log(err));
});
