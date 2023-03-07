//Nav
var search_submit = document.querySelector('.d-flex')
search_submit.addEventListener('submit', (e) => {
    e.preventDefault()
    var display = document.getElementById('container')
    display.innerHTML = ""
    var search = document.querySelector('[placeholder="For example - us"]')
    var search_value = search.value
    api(search_value)
})

//for comma
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

async function api(data) {
    v = fetch(`https://disease.sh/v3/covid-19/countries/${data}`)
    try {
        out = await v
        prom = out.json()
        res = await prom
        var display = document.getElementById('container')
        console.log(res)
        var image_ele = document.createElement('div')

        //Here insert the html code to display
        image_ele.innerHTML = `
    <div class="card text-end">
    <img src="img/photo-1584036561584-b03c19da874c.jfif" class="card-img" alt="...">
    <div class="card-img-overlay">
    <img src="${res.countryInfo.flag}" class="card-img-top" alt="..."><br>
      <h5 class="card-title">${res.country}</h5>
      <p class="card-text">${res.continent}</p>
      <p class="card-text">${numberWithCommas(res.cases)} : Total case</p>
      <p class="card-text">${numberWithCommas(res.active)} : Active case</p>
      <p class="card-text">${numberWithCommas(res.recovered)} : Total recover</p>
      <p class="card-text"><small>${numberWithCommas(res.tests)} : Tested</small></p>
    </div>
  </div>
        `
        display.appendChild(image_ele);

    } catch {
        console.log("error");
    }

}
