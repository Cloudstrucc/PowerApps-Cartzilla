
var btn = document.getElementById("clickMe");

btn.addEventListener("click", alertMe);

function alertMe(){

alert("The button has been clicked");

}

const data = { name: 'Tom Snow' , ispricelocked : "false" };

async function makeorder() {
  const response = await fetch('https://cartzilla-dev-cs.crm3.dynamics.com/api/data/v9.0', {
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json();
  alert(myJson);
  console.log(myJson);
}