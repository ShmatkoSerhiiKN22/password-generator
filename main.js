import './style.css'

const changeHandler = (id) => (event) => {
  document.getElementById(id).value = event.target.value
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Генератор паролів</h1>
    <p>Оберіть довжину пароля</p>
    <div class="flex">
      <input type="range" id="length" min="0" max="20" />
      <input id="length-value" type="number" min="0" max="20" value="10" />
    </div>
  </div>
`

document.getElementById('length').addEventListener('input', changeHandler('length-value'))
document.getElementById('length-value').addEventListener('input', changeHandler('length'))
