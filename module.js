import businesses from "./data.js"

const outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business.purchasingAgent

})

const agentNumber = businesses.map(business => {
    return business.phoneWork
})

console.table(agents)
//console.table(agentNumber)

agents.forEach(agent => {
  outEl.innerHTML += `<h2 id="details">${agent.nameFirst} ${agent.nameLast}</h2>`;
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
      <sectoin>${business.phoneWork}</section>
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
