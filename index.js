import {celciusToReamur} from "./my_modules/temp_converter/celcius-to-reamur.js"
import {celciusToKelvin} from "./my_modules/temp_converter/celcius-to-kelvin.js"

let temp = 40

console.log(`Hasil konversi suhu ${temp}°Celcius ke "Reamur" adalah ${celciusToReamur(temp)}°Reamur`)
console.log(`Hasil konversi suhu ${temp}°Celcius ke "Kelvin" adalah ${celciusToKelvin(temp)}°Kelvin`)