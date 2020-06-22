import businesses from "./data.js"

const outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
  
  const newObject = {}

  newObject.fullName = `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`
  newObject.company = `${business.companyName}`
  newObject.phone =  `${business.phoneWork}` 

  return newObject
})
//const agentNumber = businesses.forEach(business => {
  //  return business.phoneWork
//})
//console.table(agentNumber)
console.table(agents)
//console.table(agentNumber)

agents.forEach(newObject => {
  outEl.innerHTML += `<h2 id="details">${newObject.company}</h2>
  <h3> <strong>${newObject.fullName}</strong></h3>
  <h4> <u>${newObject.phone}</u></h4>`;
  outEl.innerHTML += "<hr/>";
})

/*
agentNumber.forEach(business => {
    outEl.innerHTML += `<section>${business.phoneWork}</section>`
})
*/
//const outEl = document.querySelector("#details")
  businesses.forEach(business => {
      outEl.innerHTML += `
      <section>${business.phoneWork}</section>
      <section>
      ${business.addressCity}</section>`
  })


/*const outE2 = document.querySelector("#details")
businesses.forEach(business => {
    outEl.innerHTML += `
      <section>${business.phoneWork}</section>
      <section>
        ${business.addressFullStreet}
      </section>
    `
    outE2.innerHTML += "<hr/>"
  });
*/
export default outEl; 
