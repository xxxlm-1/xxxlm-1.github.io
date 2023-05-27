const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

images[currentIndex].classList.add('active');

images.forEach(image => {
  image.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  });
});

setInterval(() => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}, 5100);

// 大臣图集////////////////////////////////////////////////////////////
const images_dachen = document.querySelectorAll('.image-container-dachen img');
let currentIndex_dachen = 0;

images_dachen[currentIndex_dachen].classList.add('active');

images_dachen.forEach(image => {
  image.addEventListener('click', () => {
    images_dachen[currentIndex_dachen].classList.remove('active');
    currentIndex_dachen = (currentIndex_dachen + 1) % images_dachen.length;
    images_dachen[currentIndex_dachen].classList.add('active');
  });
});

setInterval(() => {
  images_dachen[currentIndex_dachen].classList.remove('active');
  currentIndex_dachen = (currentIndex_dachen + 1) % images_dachen.length;
  images_dachen[currentIndex_dachen].classList.add('active');
}, 5000);


////////9-16/横///////////////////////////////////////////////////

const images_9_16 = document.querySelectorAll('.image-container-9-16 img');
let currentIndex_9_16 = 0;

images_9_16[currentIndex_9_16].classList.add('active');

images_9_16.forEach(image => {
  image.addEventListener('click', () => {
    images_9_16[currentIndex_9_16].classList.remove('active');
    currentIndex_9_16 = (currentIndex_9_16 + 1) % images_9_16.length;
    images_9_16[currentIndex_9_16].classList.add('active');
  });
});

setInterval(() => {
  images_9_16[currentIndex_9_16].classList.remove('active');
  currentIndex_9_16 = (currentIndex_9_16 + 1) % images_9_16.length;
  images_9_16[currentIndex_9_16].classList.add('active');
}, 4900);