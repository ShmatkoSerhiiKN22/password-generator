import './style.css'

const changeHandler = (id) => (event) => {
  if (+event.target.value < 4) event.target.value = 4
  if (+event.target.value > 30) event.target.value = 30 
  document.getElementById(id).value = event.target.value
}

const generatePassword = () => {
  const length = document.getElementById('length').value
  const lowercase = document.getElementById('lowercase').checked
  const uppercase = document.getElementById('uppercase').checked
  const numbers = document.getElementById('numbers').checked
  const symbols = document.getElementById('symbols').checked
  const passwordElement = document.getElementById('password')

  if (!length || length < 4 || length > 30) {
    passwordElement.innerHTML = 'Довжина пароля має бути від 4 до 30 символів'
    return
  }

  if (!lowercase && !uppercase && !numbers && !symbols) {
    passwordElement.innerHTML = 'Оберіть хоча б один тип символів'
    return
  }

  let chars = ''

  if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
  if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (numbers) chars += '0123456789'
  if (symbols) chars += '!@#$%^&*()_+'

  let password = ''

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }
  console.log(password.length)
  passwordElement.innerHTML = password
}

const copyPassword = async () => {
  const passwordElement = document.getElementById('password')
  await navigator.clipboard.writeText(passwordElement.innerHTML)
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Генератор паролів</h1>
    <p>Оберіть довжину пароля</p>
    <div class="flex">
      <input type="range" id="length" min="4" max="30" value="10" />
      <input id="length-value" type="number" min="4" max="30" value="10" />
    </div>
    <div class="password-container">
      <p id="password">password</p> 
      <button id="copy">
        <i class="copy"></i>
      </button>
    </div>
    <div class="grid">
      <label>
        <input id="lowercase" type="checkbox" />
        a-z
      </label>
      <label>
        <input id="uppercase" type="checkbox" />
        A-Z
      </label>
      <label>
        <input id="numbers" type="checkbox" />
        0-9
      </label>
      <label>
        <input id="symbols" type="checkbox" />
        !@#$%^&*
      </label>
    </div> 
    <button id="generate">Генерувати</button>
  </div>
`

document.getElementById('length').addEventListener('input', changeHandler('length-value'))
document.getElementById('length-value').addEventListener('input', changeHandler('length'))
document.getElementById('generate').addEventListener('click', generatePassword)
document.getElementById('copy').addEventListener('click', copyPassword)
