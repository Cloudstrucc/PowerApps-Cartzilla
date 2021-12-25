
var btn = document.getElementById("addToCart");

btn.addEventListener("click", makeorder);

const data = { name: "Jack Snead" , ispricelocked : "false" };

async function makeorder(e) {
  const response = await fetch("https://cartzilla-dev-cs.crm3.dynamics.com/api/data/v9.0/salesorders", {
    method: 'Post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+''
    }
   
  });
   const myJson = await response.status;
   alert("request status " + myJson);
}