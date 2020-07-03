//fetch return promises

//get local text file data
document.getElementById('button1').addEventListener('click',getText);

function getText(){
  fetch('test.txt')
    .then((res)=>{
      console.log(res)//response body
      console.log(res.statusText)//response status
      return res.text() //this return a promise so again we need to write then to get resolve response
    })
    .then((data) => {
      console.log(data)
      document.getElementById('output').innerHTML = data
    })
    .catch((err) => console.log(err))
}


//get local json data
document.getElementById('button2').addEventListener('click',getJson);

function getJson(){
  fetch('post.json')
    .then((res)=>{
      return res.json()
    })
    .then((data) => {
      console.log(data)
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output
    })
    .catch((err) => console.log(err))
}


//Get External API data
//get local json data
document.getElementById('button3').addEventListener('click',getApi);

function getApi(){
  fetch('https://api.github.com/users')
    .then((res)=>{
      return res.json()
    })
    .then((data) => {
      console.log(data)
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output
    })
    .catch((err) => console.log(err))
}
