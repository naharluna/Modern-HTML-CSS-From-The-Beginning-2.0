// const button = document.getElementById('btn');
const button = document.querySelector('#btn');
const heading = document.querySelector('h1');

button.addEventListener('click', function() {
//  console.log('Button Clicked')
    // console.log(document.body);
    document.body.classList.toggle('dark');
    heading.classList.toggle('yellow')
});
// console.log(button)