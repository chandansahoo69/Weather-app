const input = document.getElementById('input')
const l = document.getElementById('location')
const temp = document.getElementById('temp')
const minMax = document.getElementById('minMax')
const btn = document.getElementById('btn')
const info = document.querySelector('.info')

document.getElementById('form').addEventListener('submit', fetchApi)

async function fetchApi(e) {
    e.preventDefault()
    let value = input.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=559ebd92389779cd5c00ccd984f13a30`
    const response = await fetch(url)
    const responseJson = await response.json()

    if (response.status != 200) {
        document.querySelector('.info').innerHTML =
            `
                <div class="message-body">Invalid Zipcode, Please try again</div>
            `
    } else {
        l.innerHTML = `<h1>City : ${responseJson.name}</h1>`
        temp.innerHTML = `<h2>Temp : ${responseJson.main.temp} C</h2>`
        minMax.innerHTML = `<h3>Min : ${responseJson.main.temp_min} C | Max : ${responseJson.main.temp_max} C</h3>`
    }
}