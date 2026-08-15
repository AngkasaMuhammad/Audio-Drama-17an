"use strict"



;(async ()=>{






let lih = a=>{
	console.groupCollapsed(a)
	console.trace(a)
	console.groupEnd()
	return a
}



document.querySelectorAll('audio[pair]').forEach((ele,i,arr,)=>{
	ele.volume = +ele.attributes.vol.value
	ele.loop = (ele.attributes.loop?.value === 'true')
})
let fclick = e=>{
	let pair = e.currentTarget.attributes.pair.value
	let eleau = document.querySelector(`audio[pair=${pair}]`)
	eleau.currentTime = 0
	eleau.play()
}
document.querySelectorAll('span[pair]').forEach((ele,i,arr,)=>{
	ele.addEventListener('click',fclick,)
})






/*
//=============================
// Create audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const gainglo = window.gainglo = audioContext.createGain();
gainglo.connect(audioContext.destination);

async function loadAndPlayWithVolume(url, volume = 1.0) {
	// Load audio
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
	
	// Create source
	const source = audioContext.createBufferSource();
	source.buffer = audioBuffer;
	source.loop = true
	const gainloc = audioContext.createGain();
	gainloc.gain.value = volume;
	source.connect(gainloc);
	gainloc
	.connect(gainglo);
	
	source.start(0);
	
	return { source, gainloc };
}

// Usage: play at 50% volume
let out = loadAndPlayWithVolume('mg0.flac', 1); //Distant Machinegun Series by unfa -- https://freesound.org/s/245602/ -- License: Creative Commons 0
loadAndPlayWithVolume('mg1.wav', .05)

let loadau = (...arr)=>{
	
}

//++++++++++++++++++++++++++++
loadau(
	['mg0.flac'	,1	,],
	['mg1.wav'	,1	,],
)






*/
})()