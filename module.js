import businesses from "./data.js"

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

const manufacturingBusinesses = businesses.filter(business => {
    let manufacturing = false
  
    if (business.companyIndustry === "Manufacturing") {
        manufacturing = true
    }
  
    return manufacturing
  })

  console.log(manufacturingBusinesses)


manufacturingBusinesses.forEach(manufacturingBusinesses => {
  outEl.innerHTML += `
    <h2>${manufacturingBusinesses.companyName}</h2>
    <section>
      ${manufacturingBusinesses.addressFullStreet}
    </section>
    <section>
    ${manufacturingBusinesses.addressCity}, ${manufacturingBusinesses['addressStateCode']}, ${manufacturingBusinesses['addressZipCode']}
  `
  outEl.innerHTML += "<hr/>"
});

// Array to contain all the New York businesses

export default outEl; 