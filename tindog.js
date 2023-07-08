import { dogs } from "./data.js"

let isWaiting = false
// button like
document.getElementById("heart").addEventListener("click", like)

function like() {
   if (!isWaiting) {
      dog.takeLike()
      document.getElementById("like").classList.remove("hidden")
      isWaiting = true
      dog = getNewDog()
      setTimeout(() => {
         render()
         document.getElementById("like").classList.add("hidden")
         isWaiting = false
      }, 500)
   }

   // getNewDog()
}

// button nope
document.getElementById("cross").addEventListener("click", cross)

function cross() {
   if (!isWaiting) {
      dog.takeNope()
      document.getElementById("dislike").classList.remove("hidden")
      isWaiting = true
      dog = getNewDog()
      setTimeout(() => {
         render()
         document.getElementById("dislike").classList.add("hidden")
         isWaiting = false
      }, 500)
   }
}

function getNewDog() {
   const nextDogData = dogs.shift()
   return nextDogData ? new Dog(nextDogData) : false
}
function Dog(data) {
   Object.assign(this, data)
   this.getDogHtml = function () {
      const { name, avatar, age, bio } = this
      return `
      <img class="dog-avatar" src="${avatar}" alt="" />
               <div class="info">
                  <h2>${name}, <span>${age}</span></h2>
                  <p>${bio}</p>
               </div>
      `
   }

   this.takeLike = function () {
      this.hasBeenLiked = true
      this.hasBeenSwiped = true
   }

   this.takeNope = function () {
      this.hasBeenSwiped = true
   }
}
let dog = getNewDog()

// console.log(dog.getDogDHtml())
// render
const endMessage = `<div id="end-message" class="end-message">
                <p>Come next time to meet more dogs! ❤️</p>
            </div>`
function render() {
   if (dog) {
      document.getElementById("profile").innerHTML = dog.getDogHtml()
   } else {
      document.getElementById("container").innerHTML = endMessage
   }
}
render()

const num = [2, 4, 2, 154, 2, 4, 123, 43]
const filt = num.reduce(function (total, value) {
   return total + value
})

console.log(filt)
