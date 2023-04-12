// console.log("main.js loaded ");

// vocabulary: variables, objects, and arrays 
const firstName = "Rio";
// console.log({firstName});

const lastName = "Flores";
// console.log({lastName});

const fullName = `Hi my name is ${firstName} ${lastName}`;
// console.log(fullName);

const job = "Professor";

const company = "Syracuse University";

const personHeadline = document.createElement("h1");
personHeadline.innerText = `${firstName} ${lastName}`;
// document.body.appendChild(personHeadline);

const personJob = document.createElement("h2");
personJob.innerText = job;
//document.body.appendChild(personJob);


const personCompany = document.createElement("h3");
personHeadline.innerText = company ;
//document.body.appendChild(personCompany);

// object

const person = {
    name: {
        first: "Rio",
        last: "Flores"
    },
    job: "Student",
    company: "Syracuse University"
}

// console.log(person.name.first);

//array 
const players = [
    {
        name: {
            first: "Maliq",
            last: "Brown"
        },
        slug: "maliq-brown",
        number: 1,
        year: "Freshman",
        position: "Forward", 
        vbar: "    |     "
    },
    {
        name: {
            first: "Chris",
            last: "Bell"
        },
        slug: "chris-bell",
        number: 0,
        year: "Freshman",
        position: "Forward", 
        vbar: "    |     "
    },
    {
        name: {
            first: "Jesse",
            last: "Edwards"
        },
        slug: "jesse-edwards",
        number: 14,
        year: "Senior",
        position: "Center", 
        vbar: "    |     "
    },
    {
        name: {
            first: "Judah",
            last: "Mintz"
        },
        slug: "judah-mintz",
        number: 3,
        year: "Freshman",
        position: "Guard", 
        vbar: "    |     "
    },
    {
        name: {
            first: "Joseph",
            last: "Girard III"
        },
        slug: "joseph-girard-iii",
        number: 11,
        year: "Senior",
        position: "Guard", 
        vbar: "    |     "
    }
];

const playersContainer = document.getElementById("playersContainer");
playersContainer.classList = "list";

const displayFormat = document.getElementById("displayFormat");

displayFormat.addEventListener("change", (event) => {
    console.log(event.target.value);
    const className = event.target.value;
    playersContainer.classList = className

});


// console.log(players[4]);
players.forEach((player) => {
    // console.log(player);
    // deconstructing 
    const { name, slug, number, position, year } = player;
    const { first, last} = name;


    const playerArticle = document.createElement("article");

    //image
    const playerImage = document.createElement("img");
    playerImage.src = `images/${slug}-square.jpg`;
    playerImage.alt = `${first} ${last}`;
    playerImage.classList.add("responsive-img");
    playerArticle.appendChild(playerImage);
    
    // name of players
    const playerHeadline = document.createElement("h2");
    playerHeadline.classList.add("player-headline");

    // span for the first name
    const playerHeadlineFirst = document.createElement("span");
    playerHeadlineFirst.classList.add("player-first-name");
    playerHeadlineFirst.innerText = first;
    playerHeadline.appendChild(playerHeadlineFirst);

    // span for the last name
    const playerHeadlineLast = document.createElement("span");
    playerHeadlineLast.classList.add("player-last-name");
    playerHeadlineLast.innerText = last;
    playerHeadline.appendChild(playerHeadlineLast);

    // taking the whole article and we are adding the complete name 
    playerArticle.appendChild(playerHeadline);

    // group info into one var
    const playerInfo = document.createElement("h3");
    playerInfo.classList.add("player-info");
    
    //number 
    const playerNumber = document.createElement("span");
    playerNumber.innerText = player.number;
    playerInfo.appendChild(playerNumber);

    const playerVbar = document.createElement("span");
    playerVbar.innerText = player.vbar;
    playerInfo.appendChild(playerVbar);

    // players' position 
    const playerPosition = document.createElement("span");
    playerPosition.innerText = player.position;
    playerInfo.appendChild(playerPosition);

    playerVbar.innerText = player.vbar;
    playerInfo.appendChild(playerVbar);

    // grade 
    const playerYear = document.createElement("span");
    playerYear.innerText = player.year;
    playerInfo.appendChild(playerYear);

    
    playerArticle.appendChild(playerInfo);

    // add to the overall list
    playersContainer.appendChild(playerArticle);
});
