var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];
console.log()
let list = document.querySelectorAll('.character');
//console.log(list);
for (let i = 0; i < list.length; i++) {
  let button = document.createElement('button');
  let bio = document.createElement('p');
  let dead = document.createElement('button');
  let isDead = document.createElement('h1');

  button.classList.add('more-info');
  dead.classList.add('more-info');

  bio.style.display = 'none'//
  bio.classList.add('bio');

  isDead.style.display = 'none'
  isDead.classList.add('green');


  list[i].appendChild(dead);
  list[i].appendChild(button);
  list[i].appendChild(bio);
  list[i].appendChild(isDead);

  dead.innerHTML = "DEAD or ALIVE"
  button.innerHTML = "More Info"
  bio.innerHTML = characters[i].bio
  console.log(characters[i].status)
  isDead.innerHTML = characters[i].status

  console.log(isDead.innerText)

  dead.addEventListener('click', function (e) {
    if (isDead.innerText === 'alive' && isDead.style.display === 'none') {
      isDead.innerText = "STILL ALIVE!";
      isDead.style.display = 'block';
    } else if (isDead.innerText === 'dead' && isDead.style.display === 'none') {
      isDead.innerText = "SORRY, YOU DEAD!";
      isDead.style.display = 'block';
    } else if (isDead.style.display === 'block') {
      //isDead.innerText = "SORRY, YOU DEAD!";
      isDead.style.display = 'none';
    }
  })

  button.addEventListener('click', function (e) {
    if (bio.style.display == 'none') {
      bio.style.display = 'block';
    } else if (bio.style.display == 'block') {
      bio.style.display = 'none'
    }
  })
}

let form = document.querySelector('#form');
console.log(form.value);
console.log(characters[1].name);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let inputName = e.target.elements.search.value;
  for (let j = 0; j < list.length; j++) {
    if (inputName !== characters[j].name) {
      list[j].classList.add('visible')
    }
    if (inputName.length === 0) {
      list[j].classList.remove('visible')
    }
  }
})



// dead.addEventListener('click', function(e) {
//   if (isDead.innerText === 'alive') {
//     isDead.innerText = "STILL ALIVE!";
//     isDead.add.classList('h1')
//   } else {
//     isDead.innerText = "SORRY, YOU DEAD!";
//     isDead.add.classList('h1')
//   }
// })