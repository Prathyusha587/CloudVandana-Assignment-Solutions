let currentIndex = 0;
const images = [
    "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
    "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    "https://www.finoit.com/wp-content/uploads/2022/10/top-java-use-cases.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4ISVcXgykdMnPuRPFdIhH4cJpVxhbd6i0w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&s"

];

const sliderImage = document.createElement("img");
sliderImage.src = images[currentIndex];
sliderImage.classList.add("active");
document.querySelector(".slider").appendChild(sliderImage);

function showImage(index) {
    sliderImage.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

