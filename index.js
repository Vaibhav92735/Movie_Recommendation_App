const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

function openKNNMain() {
  window.open("KNN-main/index.html", "_blank");
}

function openNaiveMain() {
  window.open("NaiveBayes-main/index.html", "_blank");
}

function openLinRegMain() {
  window.open("LinearReg-main/index.html", "_blank");
}

function openRandomMain() {
  window.open("RandomForest-main/index.html", "_blank");
}
function openSVMMain() {
  window.open("SVM-main/index.html", "_blank");
}

function openBOWMain() {
  window.open("BagOfWords-main/index.html", "_blank");
}
