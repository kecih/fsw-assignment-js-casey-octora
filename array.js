let numbers = [20, 30, 40, 50, 60, 70];

// 1. Carilah element array terkecil dan terbesar
console.log('Element array terkecil adalah ' + Math.min(...numbers))
console.log('Element array terbesar adalah ' + Math.max(...numbers))

// 2. Urutkan array secara descending
console.log('Element array diurutkan dari yang terkecil ' + numbers.sort(function (a, b) {
    return b - a
}))

// 3. Cari tanggal hari ini, tanggal kemarin dan tanggal besok dengan format (D-M-YYYY) 
let today = new Date()
let date = (today.getDate()) + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear())
let yesterdayDate = (today.getDate() - 1) + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear())
let tomorrowDate = (today.getDate() + 1) + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear())
console.log('Tanggal hari ini adalah ' + date)
console.log('Tanggal kemarin adalah ' + yesterdayDate)
console.log('Tanggal besok adalah ' + tomorrowDate)

// 4. Buatlah array numbers diatas menjadi format string seperti ini 39,59,79,99,119,139
console.log(numbers.map(num => num * 2 - 1).reverse().toString())