import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    formEl: document.querySelector('.js-search-form[data-id="js-search-image"]'),
    imageEl: document.querySelector('.js-image-container'),
  };
  
  refs.formEl.addEventListener('submit', e => {
    e.preventDefault();
  
    const image = e.target.elements.query.value;
  
    searchImage(image).then(data => {
      console.log(data);
      console.log(imageTemplate(data));
    });
  
    e.target.reset();
  });
  
  function searchImage(userValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = `?key=42271393-ceafa19bde7d0a63fb15d5d6f&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;
    const url = BASE_URL + END_POINT + PARAMS;
  
    return fetch(url).then(res => res.json());
  };
  
  function imageTemplate({webformatURL, tags, likes, views,comments, downloads}) {
    return `<div class="image-card card">
    <div class="image-container">
      <img
        src="${webformatURL}"
        alt="${tags}"
        class="search-image"
      />
    </div>
    <div class="image-body">
      <h4 class="image-info">${likes}</h4>
      <h4 class="image-info">${views}</h4>
      <h4 class="image-info">${comments}</h4>
      <h4 class="image-info"> ${downloads}</h4>
    </div>
  </div>`;
  }
  
  function renderImage(image) {
    const markup = imageTemplate(image);
   console.log( refs.imageEl.insertAdjacentHTML('afterbegin', markup));
  }

// const form = document.querySelector('.form-control');
// const loader = document.querySelector('.loader');
// const gallery = document.querySelector('.gallery');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const keyword = document.querySelector('#keyword').value;
//   const query = `https://pixabay.com/api/?key={42271393-ceafa19bde7d0a63fb15d5d6f}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;

//   loader.style.display = 'block';
//   gallery.innerHTML = '';

//   fetch(query)
//     .then(response => response.json())
//     .then((data) => {
//       loader.style.display = 'none';
//       if (data.hits.length === 0) {
//         gallery.innerHTML = 'No results found.';
//         return;
//       }

//       data.hits.forEach((hit) => {
//         const image = document.createElement('img');
//         image.src = hit.webformatURL;
//         image.alt = hit.tags;
//         image.addEventListener('click', () => {
//           const lightbox = new SimpleLightbox();
//           lightbox.open({
//             items: [
//               {
//                 src: hit.largeImageURL,
//                 caption: `Likes: ${hit.likes}, Views: ${hit.views}, Comments: ${hit.comments}, Downloads: ${hit.downloads}`
//               }
//             ]
//           });
//         });
//         gallery.appendChild(image);
//       });

//       const lightbox = new SimpleLightbox();
//       lightbox.refresh();
//     })
//     .catch((error) => {
//       loader.style.display = 'none';
//       gallery.innerHTML = 'Error fetching images.';
//       console.error(error);
//     });
// });