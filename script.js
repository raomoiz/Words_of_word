

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/but`)
	.then((Response) => Response.json())
	.then((data) => {
		console.log(data[0].phonetics[0].audio)
	})



// ```````````````````````````````` find I ``````````````````````````````````````````` //
Itrans = (i) => {
	if (i == 0) {
		ie = "zero"
	}
	if (i == 1) {
		ie = "one"
	}
	if (i == 2) {
		ie = "two"
	}
	if (i == 3) {
		ie = "three"
	}
	if (i == 4) {
		ie = "four"
	}
	if (i == 5) {
		ie = "five"
	}
	if (i == 6) {
		ie = "six"
	}
	if (i == 7) {
		ie = "seven"
	}
	return ie;
}
// +++++++++++++++++++++++++++++++Word Displayer+++++++++++++++++++++++++++++++++++++++//

headDis = (word) => {

	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
		.then((Response) => Response.json())
		.then((data) => {
			soundPlay=()=>{
				fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
				.then((Response) => Response.json())
				.then((data) => {
				   let audio = new Audio(data[0].phonetics[0].audio)
				   audio.play()
				})	
			}
            
			let head = document.getElementById("head")
			head.innerHTML = `${word} <img id="sound" onclick="soundPlay()"  src="volume.png" >`
		})

}
synoDisplay = (word) => {
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
		.then((Response) => Response.json())
		.then((data) => {
			let syno = document.getElementById("syno")
			arrplus = () => {

				if (data[0].meanings.length == 8) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms, data[0].meanings[3].synonyms, data[0].meanings[4].synonyms, data[0].meanings[5].synonyms, data[0].meanings[6].synonyms, data[0].meanings[7].synonyms)
				}
				if (data[0].meanings.length == 7) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms, data[0].meanings[3].synonyms, data[0].meanings[4].synonyms, data[0].meanings[5].synonyms, data[0].meanings[6].synonyms)
				}
				if (data[0].meanings.length == 6) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms, data[0].meanings[3].synonyms, data[0].meanings[4].synonyms, data[0].meanings[5].synonyms)
				}

				if (data[0].meanings.length == 5) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms, data[0].meanings[3].synonyms, data[0].meanings[4].synonyms)
				}
				if (data[0].meanings.length == 4) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms, data[0].meanings[3].synonyms)
				}
				if (data[0].meanings.length == 3) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms, data[0].meanings[2].synonyms)
				}
				if (data[0].meanings.length == 2) {
					mean = [].concat(data[0].meanings[0].synonyms, data[0].meanings[1].synonyms)
				}
				if (data[0].meanings.length == 1) {
					mean = data[0].meanings[0].synonyms
				}
				console.log(mean)
				return mean;

			}
			arrplus()
			if (mean != null) {
				for (let i = 0; i < mean.length; i++) {
					syno.innerHTML += `
				          <h4>${mean[i]}</h4>`
				}
			}
			if (mean.length == 0) {
				syno.innerHTML = `
				          <h4>Opps! No Synonyms Found</h4>`
			}




		})
}


// +++++++++++++++++++++++++++++++Anto Displayer+++++++++++++++++++++++++++++++++++++++//

antoDisplay = (word) => {
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
		.then((Response) => Response.json())
		.then((data) => {
			let anto = document.getElementById("anto")
			ano = () => {
				if (data[0].meanings.length == 8) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms, data[0].meanings[3].antonyms, data[0].meanings[4].antonyms, data[0].meanings[5].antonyms, data[0].meanings[6].antonyms, data[0].meanings[7].antonyms)
				}
				if (data[0].meanings.length == 7) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms, data[0].meanings[3].antonyms, data[0].meanings[4].antonyms, data[0].meanings[5].antonyms, data[0].meanings[6].antonyms)
				}
				if (data[0].meanings.length == 6) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms, data[0].meanings[3].antonyms, data[0].meanings[4].antonyms, data[0].meanings[5].antonyms)
				}

				if (data[0].meanings.length == 5) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms, data[0].meanings[3].antonyms, data[0].meanings[4].antonyms)
				}
				if (data[0].meanings.length == 4) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms, data[0].meanings[3].antonyms)
				}
				if (data[0].meanings.length == 3) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms, data[0].meanings[2].antonyms)
				}
				if (data[0].meanings.length == 2) {
					mea = [].concat(data[0].meanings[0].antonyms, data[0].meanings[1].antonyms)
				}
				if (data[0].meanings.length == 1) {
					mea = data[0].meanings[0].antonyms
				}
				return mea;
			}
			ano()

			if (mea != null) {
				for (let i = 0; i < mea.length; i++) {
					anto.innerHTML += `
				          <h4>${mea[i]}</h4>`
				}
			}
			if (mea.length == 0) {
				anto.innerHTML = `
				          <h4>Opps! No Antonyms Found</h4>`
			}
		})
}
//````````````````````````````````````` GrammerTypo`````````````````````````````````````//
grammerTypo = (word) => {

	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
		.then((Response) => Response.json())
		.then((data) => {
			let types = document.getElementById("types")

			if (data[0].meanings.length == 8) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech, data[0].meanings[3].partOfSpeech, data[0].meanings[4].partOfSpeech, data[0].meanings[5].partOfSpeech, data[0].meanings[6].partOfSpeech, data[0].meanings[7].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)
					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def></div>
							</div>
						</div>`
				}

			}
			if (data[0].meanings.length == 7) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech, data[0].meanings[3].partOfSpeech, data[0].meanings[4].partOfSpeech, data[0].meanings[5].partOfSpeech, data[0].meanings[6].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)
					console.log(e)
					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`}
			}
			if (data[0].meanings.length == 6) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech, data[0].meanings[3].partOfSpeech, data[0].meanings[4].partOfSpeech, data[0].meanings[5].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)

					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`}
			}

			if (data[0].meanings.length == 5) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech, data[0].meanings[3].partOfSpeech, data[0].meanings[4].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)

					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`
					// console.log(`${ie}def`)

				}
			}
			if (data[0].meanings.length == 4) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech, data[0].meanings[3].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)

					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`
				}

			}
			if (data[0].meanings.length == 3) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech, data[0].meanings[2].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)

					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`}
			}
			if (data[0].meanings.length == 2) {
				ps = [].concat(data[0].meanings[0].partOfSpeech, data[0].meanings[1].partOfSpeech);
				for (let i = 0; i < data[0].meanings.length; i++) {
					Itrans(i)

					types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def ></div>
							</div>
						</div>`
				}
			}
			if (data[0].meanings.length == 1) {
				ps = data[0].meanings[0].partOfSpeech
				Itrans(i)
				types.innerHTML += `<div class="type" id=type${ie}Dec>
							<h4 id=type${ie} onclick="disDef(${ie}Def , arr${ie})">${data[0].meanings[i].partOfSpeech} <span id=arr${ie} >&#8595</span></h4>
							<div id=${ie}Def>
								<h5>Definations</h5>
								<div id=${ie}def></div>
							</div>
						</div>`
			}
		
			
				
		})
		
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Display Def~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
disDef = (o,r) => {
    
	if (o.style.display == "block") {
		o.style.display = "none"
		r.innerHTML  = `&#8595`
	}
	else {
		o.style.display = "block"
		r.innerHTML  = `&#8593`
	}
}
//                                       Definations                                  I//
defI = (word) => {

	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word)
		.then((Response) => Response.json())
		.then((data) => {
			try {
				let definations = document.getElementById(`zerodef`)
				for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[0].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`onedef`)
				for (let i = 0; i < data[0].meanings[1].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[1].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`twodef`)
				for (let i = 0; i < data[0].meanings[2].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[2].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`threedef`)
				for (let i = 0; i < data[0].meanings[3].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[3].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`fourdef`)
				for (let i = 0; i < data[0].meanings[4].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[4].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`fivedef`)
				for (let i = 0; i < data[0].meanings[5].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[5].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`sixdef`)
				for (let i = 0; i < data[0].meanings[6].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[6].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}
			try {
				let definations = document.getElementById(`sevendef`)
				for (let i = 0; i < data[0].meanings[7].definitions.length; i++) {
					definations.innerHTML += `<p> <span>${i+1}</span> ${data[0].meanings[7].definitions[i].definition}</p>
					 `}
			}
			catch {
				return "err"
			}

		})
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Searh BTN Function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
let searchBtn = document.getElementById(`searchBtn`)
searchBtn.addEventListener(`click`, () => {
	let syno = document.getElementById("syno")
	let anto = document.getElementById("anto")
	let grm = document.getElementById("types")
	grm.innerHTML = ``
	anto.innerHTML = ``
	syno.innerHTML = ``

	let search = document.getElementById(`Search`)
	let word = search.value
	headDis(word)
	synoDisplay(word)
	antoDisplay(word)
	grammerTypo(word)
	defI(word)

})