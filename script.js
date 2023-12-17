// // 1
function createCardFirst(title, body) {
  let div = document.createElement("div");
  div.classList.add("card");
  let p = document.createElement("p");
  let h2 = document.createElement("h2");

  p.textContent = body;
  h2.textContent = title;

  div.appendChild(h2);
  div.appendChild(p);

  document.querySelector(".card__list").appendChild(div);
}

async function fetchData() {
  const response = await fetch("https://reqres.in/api/unknown");
  const names = await response.json();

  names.data.forEach((element) => {
    createCardFirst(element.name, element.color);
  });
}

fetchData();

// 2

function createCardSecond(fName, lName, avatar) {
  let div = document.createElement("div");
  div.classList.add("card2");

  let firstName = document.createElement("p");
  let lastName = document.createElement("p");
  let avatarImg = document.createElement("img");

  firstName.textContent = fName;
  lastName.textContent = lName;
  avatarImg.src = avatar;

  div.appendChild(firstName);
  div.appendChild(lastName);
  div.appendChild(avatarImg);

  document.querySelector(".card__list2").appendChild(div);
}

let hhtp = new XMLHttpRequest();

hhtp.open("GET", "https://reqres.in/api/users?page=2");
hhtp.send();

hhtp.addEventListener("load", (event) => {
  let jsArray = JSON.parse(event.target.response);

  jsArray.data.forEach((element) => {
    // console.log(element.first_name);
    createCardSecond(element.first_name, element.last_name, element.avatar);
  });
});
