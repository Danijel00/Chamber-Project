"use strict";

let locations = {
  data: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "News",
      subCategory: "News",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-1.jpg",
      alternative: "discover-1",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Videos",
      subCategory: "Video",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-2.jpg",
      alternative: "discover-2",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "News",
      subCategory: "News",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-3.jpg",
      alternative: "discover-3",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Events",
      subCategory: "Events",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-4.jpg",
      alternative: "discover-4",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Videos",
      subCategory: "Video",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-5.jpg",
      alternative: "discover-5",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Videos",
      subCategory: "Video",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-6.jpg",
      alternative: "discover-6",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Meetings",
      subCategory: "Meetings",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-7.jpg",
      alternative: "discover-7",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Events",
      subCategory: "Events",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-8.jpg",
      alternative: "discover-8",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "News",
      subCategory: "News",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-9.jpg",
      alternative: "discover-9",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Meetings",
      subCategory: "Meetings",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-10.jpg",
      alternative: "discover-10",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Ceds",
      subCategory: "Ceds",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-11.jpg",
      alternative: "discover-11",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      category: "Ceds",
      subCategory: "Ceds",
      date: "FEBRUARY 18, 2022",
      image: "../../assets/img/discover/discover-12.jpg",
      alternative: "discover-12",
    },
  ],
};

// Loop over all the locations
for (let i of locations.data) {
  let figure = document.createElement("figure");
  let figSubcategory = document.createElement("span");
  let figCaption = document.createElement("figcaption");
  let figCaptionDate = document.createElement("span");
  let figCaptionTitle = document.createElement("h2");

  figure.classList.add("discover__card", i.category, "hide");
  figSubcategory.classList.add("discover__card-subcategory");
  figCaption.classList.add("discover__card-data"); 
  figCaptionDate.classList.add("discover__card-date");
  figCaptionTitle.classList.add("discover__card-title");

  let image = document.createElement("img");
  image.classList.add("discover__card-img");
  image.setAttribute("src", i.image);
  image.setAttribute("alt", i.alternative);
  figure.appendChild(image);
  figure.appendChild(figSubcategory);
  figure.appendChild(figCaption);
  figCaption.appendChild(figCaptionDate);
  figCaption.appendChild(figCaptionTitle);

  figCaptionDate.innerText = i.date;
  figCaptionTitle.innerText = i.title;
  figSubcategory.innerText = i.subCategory;

  document.getElementById("discover-gallery").appendChild(figure);
}

// CHANGE SUBCATEGORY COLORS
const figSubcategory = document.querySelectorAll(".discover__card-subcategory");

figSubcategory.forEach(item => {
  if(item.innerText === "Video"){
    item.style.background = `var(--clr-blue-400)`;
    item.style.color = `var(--clr-blue-500)`;
  }
  if(item.innerText === "Events"){
    item.style.background = `var(--clr-blue-600)`;
  }
  if (item.innerText === "Ceds") {
    item.style.background = `var(--clr-blue-700)`;
  }
  if (item.innerText === "Meetings") {
    item.style.background = `var(--clr-green-400)`;
  }
})

// ADD/REMOVE ACTIVE CLASS FROM FILTER ITEMS
const filterItem = document.querySelectorAll(".news__filter-item");

filterItem.forEach(filter => {
  filter.addEventListener("click", function() {
    filterItem.forEach(item => item.classList.remove("active"))

    this.classList.add("active");
  })
})

// Destinations filter
function filterNews(value) {
  // Select all figure cards
  let elements = document.querySelectorAll(".discover__card");
  elements.forEach((element) => {
    // Display all cards on "all" button click
    if (value === "All") {
      element.classList.remove("hide");
      element.classList.add("show");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
        element.classList.add("show");
      } else {
        element.classList.add("hide");
        element.classList.remove("show");
      }
    }
  });
}

// Display all news on load
window.onload = () => {
  filterNews("All");
};
