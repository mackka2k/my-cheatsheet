// await = makes an async function wait for a Promise dont need to use .then() and .catch()

async function loadFile() {
	let fileLoaded = true

	if (fileLoaded) {
		return 'File loaded successfully'
	} else {
		throw 'File not loaded'
	}
}

async function startProcess() {
	try {
		let message = await loadFile()
		console.log(message)
	} catch (error) {
		console.log(error)
	}
}

startProcess()
