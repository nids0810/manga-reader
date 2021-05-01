const airthmaticOperationOnStrings = (text, operationtext) => {
	let textLength = text.length
	let textnum1 = parseInt(text)
	let textnum2 = parseInt(operationtext)
	let result = textnum1 + textnum2
	let resultstr = result.toString()
	let pad = '0000'

	if (resultstr.length === textLength) return result.toString()
	else {
		return pad.substring(0, textLength - resultstr.length) + result
	}
}

export default airthmaticOperationOnStrings
