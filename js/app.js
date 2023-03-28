const h3 = document.querySelector(".h3")
const p = document.querySelector(".p")
const btn = document.querySelector(".btn")

btn.addEventListener(("click"), getData)

async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice")
    let Data = await res.json()

   h3.textContent = `ADVICE #`+ Data.slip.id
   p.textContent = Data.slip.advice

}

getData()