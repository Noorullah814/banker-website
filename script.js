const home = document.querySelector(".home");
const slides = document.querySelectorAll(".home .headings");
let current = 0;

const firstClone = slides[0].cloneNode(true);
home.appendChild(firstClone);

const totalSlides = slides.length + 1;

function nextSlide() {
  current++;
  home.style.transform = `translateX(-${current * 100}%)`;
  home.style.transition = "transform 0.6s ease-in-out";


  if (current === totalSlides - 1) {
    setTimeout(() => {
      home.style.transition = "none";
      home.style.transform = "translateX(0)";
      current = 0;
      setTimeout(() => {
        home.style.transition = "transform 0.6s ease-in-out";
      }, 50);
    }, 600);
  }
}

setInterval(nextSlide, 4000);




const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});



// 


(function () {
  const imagesTrack = document.querySelector('.images-track');
  const headsTrack = document.querySelector('.heads-track');
  const prevBtn = document.querySelector('.arrow.prev');
  const nextBtn = document.querySelector('.arrow.next');
  if (!imagesTrack || !headsTrack) return;

  const origCount = imagesTrack.children.length;
  const transitionTime = 600;

  const firstImgClone = imagesTrack.children[0].cloneNode(true);
  const lastImgClone = imagesTrack.children[origCount - 1].cloneNode(true);
  imagesTrack.appendChild(firstImgClone);
  imagesTrack.insertBefore(lastImgClone, imagesTrack.firstChild);

  const firstHeadClone = headsTrack.children[0].cloneNode(true);
  const lastHeadClone = headsTrack.children[origCount - 1].cloneNode(true);
  headsTrack.appendChild(firstHeadClone);
  headsTrack.insertBefore(lastHeadClone, headsTrack.firstChild);

  const total = origCount + 2;
  let index = 1;

  imagesTrack.style.transform = `translateX(-${index * 100}%)`;
  headsTrack.style.transform = `translateX(-${index * 100}%)`;

  function moveTo(idx, withTransition = true) {
    if (withTransition) {
      imagesTrack.style.transition = `transform ${transitionTime}ms ease`;
      headsTrack.style.transition = `transform ${transitionTime}ms ease`;
    } else {
      imagesTrack.style.transition = 'none';
      headsTrack.style.transition = 'none';
    }
    imagesTrack.style.transform = `translateX(-${idx * 100}%)`;
    headsTrack.style.transform = `translateX(-${idx * 100}%)`;
  }


  function stepForward() {
    index++;
    moveTo(index, true);


    if (index === total - 1) {
      setTimeout(() => {
        moveTo(1, false);
        index = 1;
      }, transitionTime);
    }
  }


  function stepBackward() {
    index--;
    moveTo(index, true);


    if (index === 0) {
      setTimeout(() => {
        moveTo(origCount, false);
        index = origCount;
      }, transitionTime);
    }
  }


  nextBtn && nextBtn.addEventListener('click', () => { stepForward(); resetAutoplay(); });
  prevBtn && prevBtn.addEventListener('click', () => { stepBackward(); resetAutoplay(); });


  let auto = setInterval(stepForward, 4000);

  function resetAutoplay() {
    clearInterval(auto);
    auto = setInterval(stepForward, 4000);
  }


  const container = document.querySelector('.how-it-work');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(auto));
    container.addEventListener('mouseleave', () => resetAutoplay());
  }
})();



const track = document.querySelector('.hc-track');
const s = document.querySelectorAll('.hc-slide');
const dotsContainer = document.querySelector('.hc-dots');
let index = 0;


s.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}


function autoStep() {
  index = (index + 1) % s.length;
  updateSlider();
}
let auto = setInterval(autoStep, 4000);

function resetAutoplay() {
  clearInterval(auto);
  auto = setInterval(autoStep, 4000);
}




const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-bar');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.querySelector('i').classList.toggle('fa-times');
});

