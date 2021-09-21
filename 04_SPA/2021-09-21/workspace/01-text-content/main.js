// let pElement = document.getElementById('paragraph')
let pElement = document.querySelector('#paragraph')

console.log(pElement);
console.log(pElement.textContent);
console.log(pElement.innerHTML);

// pElement.textContent = "Another paragraph.";
// pElement.innerHTML = `<span class="red">Another</span> paragraph.`;
pElement.textContent = `<span class="red">Another</span> paragraph.`;