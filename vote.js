//initialising a variable name data

// let data = parseInt(document.getElementById('counting').textContent);
// console.log(data);

//printing default value of data that is 0 in h2 tag
// document.getElementById('counting').innerText = data;

//creation of increment function
function increment() {
  var data = parseInt(document.getElementById('counting').textContent);
  data = data + 1;
  document.getElementById('counting').innerText = data;
}
//creation of decrement function
function decrement() {
  var data = parseInt(document.getElementById('counting').textContent);
  data = data - 1;
  document.getElementById('counting').innerText = data;
}
