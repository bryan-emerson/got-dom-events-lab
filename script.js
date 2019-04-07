var characters = [
  {name: 'Daenerys Targaryen', bio: 'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).', status: 'alive'},
  {name: 'Khal Drogo', bio: 'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.', status: 'dead'},
  {name: 'Tyrion Lannister', bio: 'Joanna Lannister died in childbirth when Tyrion when born. He\'s known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.', status: 'alive'},
  {name: 'Sansa Stark', bio: 'Sansa Stark was raised as a highborn lady who would one marry into another great house.', status: 'alive'},
  {name: 'Arya Stark', bio: 'Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.', status: 'alive'},
  {name: 'Jon Snow', bio: 'Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.', status: 'alive'}
]

var buttons = document.querySelectorAll('.more-info')
var charDiv = document.querySelectorAll('.character')
var input = document.querySelector('.input-field')
var submit = document.querySelector('.submit-button')
var lifeStatus = document.querySelectorAll('.alive-or-dead')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log(characters[i].name)
    let paragraph = document.createElement('p')
    let bio = document.createTextNode(characters[i].bio)
    paragraph.appendChild(bio)
    charDiv[i].appendChild(paragraph)
  })
}

submit.addEventListener('click', function (evt) {
  evt.preventDefault()
  console.log(input.value)
  for (let i = 0; i < charDiv.length; i++) {
    if (input.value !== characters[i].name) {
      charDiv[i].style.display = 'none'
    }
  }
})

for (let i = 0; i < lifeStatus.length; i++) {
  lifeStatus[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log(characters[i].status)
    if (characters[i].status === 'alive') {
      let h2 = document.createElement('h2')
      let alive = document.createTextNode('STILL ALIVE!')
      h2.style.color = 'green'
      h2.appendChild(alive)
      charDiv[i].appendChild(h2)
    } else {
      let h2 = document.createElement('h2')
      let dead = document.createTextNode('SORRY, YOU DEAD')
      h2.style.color = 'red'
      h2.appendChild(dead)
      charDiv[i].appendChild(h2)
    }
  })
}
