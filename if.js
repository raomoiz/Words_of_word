try {
    let definations = document.getElementById(`zerodef`)
    for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[0].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`onedef`)
    for (let i = 0; i < data[0].meanings[1].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[1].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`twodef`)
    for (let i = 0; i < data[0].meanings[2].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[2].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`threedef`)
    for (let i = 0; i < data[0].meanings[3].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[3].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`fourdef`)
    for (let i = 0; i < data[0].meanings[4].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[4].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`fivedef`)
    for (let i = 0; i < data[0].meanings[5].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[5].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`sixdef`)
    for (let i = 0; i < data[0].meanings[6].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[6].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}
try {
    let definations = document.getElementById(`sevendef`)
    for (let i = 0; i < data[0].meanings[7].definitions.length; i++) {
        definations.innerHTML += `<p> ${data[0].meanings[7].definitions[i].definition}</p>
         `}
}
catch {
    return "err"
}