const url =
  "https://raw.githubusercontent.com/Sebastiao-Matusse/project0.2/main/data/lixo.json";

async function getTrashData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    displayData(data.cases);
  }
}

const displayData = (cases) => {
  const cards = document.querySelector("div.cards");

  cases.forEach((trashcase) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let cardhead = document.createElement("div");
    cardhead.setAttribute("class", "cardhead");
    let h2 = document.createElement("h2");
    let birthdate = document.createElement("p");
    // let death = document.createElement("p");
    let birthplace = document.createElement("p");
    // let ageAtDeath = document.createElement("p");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${trashcase.name} ${trashcase.lastname}`;
    birthdate.textContent = `${trashcase.birthdate}`;
    // death.textContent = `${prophet.death}`;
    birthplace.textContent = `${trashcase.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", trashcase.imageurl);
    if (trashcase.order === 1) {
      portrait.setAttribute(
        "alt",
        `portrait of ${trashcase.name} ${trashcase.lastname} - ${trashcase.order}st Latter-day President`
      );
    } else if (trashcase.order === 2) {
      portrait.setAttribute(
        "alt",
        `portrait of ${trashcase.name} ${trashcase.lastname} - ${trashcase.order}nd Latter-day President`
      );
    } else if (trashcase.order === 3) {
      portrait.setAttribute(
        "alt",
        `portrait of ${trashcase.name} ${trashcase.lastname} - ${trashcase.order}rd Latter-day President`
      );
    } else {
      portrait.setAttribute(
        "alt",
        `portrait of ${trashcase.name} ${trashcase.lastname} - ${trashcase.order}th Latter-day President`
      );
    }

    // if (prophet.death !== null) {
    //   deathAge =
    //     new Date(prophet.death).getFullYear() -
    //     new Date(prophet.birthdate).getFullYear();
    //   ageAtDeath.textContent = `Age at death: ${deathAge}`;
    // }

    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    cardhead.appendChild(h2);
    cardhead.appendChild(birthdate);
    // cardhead.appendChild(death);
    // cardhead.appendChild(birthplace);
    // cardhead.appendChild(ageAtDeath);
    card.appendChild(cardhead);
    card.appendChild(portrait);
    // console.log(cards);
    cards.appendChild(card);
    // console.log(cards);
  });
};

getTrashData(url);
