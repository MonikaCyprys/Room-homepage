export default function slider() {
  const heroImage = document.querySelector(".header__heroImage");
  let device = null;
  window.addEventListener("load", function () {
    if (this.innerWidth >= 530) {
      device = "desktop";
      console.log("desktop");
    } else if (this.innerWidth <= 530) {
      device = "mobile";
      console.log("mobile");
    }
    if (device) {
      heroImage.setAttribute("src", `./images/${device}-image-hero-1.jpg`);
    }
  });

  const rightArrow = document.querySelector(".right-arrow");
  const leftArrow = document.querySelector(".left-arrow");
  const articleHeader = document.querySelector(".article__header");
  const articleText = document.querySelector(".article__text");

  let counter = 1;

  const sliderContents = [
    {
      header: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      header: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      header: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  rightArrow.addEventListener("click", function () {
    counter === 3 ? (counter = 0) : counter;
    heroImage.setAttribute(
      "src",
      `./images/${device}-image-hero-${(counter += 1)}.jpg`
    );
    articleHeader.textContent = sliderContents[counter - 1].header;
    articleText.textContent = sliderContents[counter - 1].text;
  });

  leftArrow.addEventListener("click", function () {
    counter === 1 ? (counter = 4) : counter;
    heroImage.setAttribute(
      "src",
      `./images/${device}-image-hero-${(counter -= 1)}.jpg`
    );
    articleHeader.textContent = sliderContents[counter - 1].header;
    articleText.textContent = sliderContents[counter - 1].text;
  });
}
