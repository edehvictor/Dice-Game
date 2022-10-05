// const random1 = generateRand()
// const random2 = generateRand()

// function generateRand(){
//     return Math.floor(Math.round()*6)
// }

const random1 = Math.floor(Math.random()* 6) + 1

const random2 = Math.floor(Math.random()* 6) + 1


document.querySelector('.dice .img1') .setAttribute('src', `assets/images/dice${random1}.png`)
document.querySelector('.dice .img2') .setAttribute('src', `assets/images/dice${random2}.png`)

if( random1 > random2){
    document.querySelector('h1').textContent = 'player 1 wins 🎁'
}else if(random2 > random1){
    document.querySelector('h1').textContent = 'player 2 wins 🎁'
}else{
    document.querySelector('h1').textContent = 'draw ✌'  
}

document.querySelector('#btn').addEventListener('click', ()=>{
    window.location.reload()

})







