const replaceSecondoccurrence = (actualtext, replacetext) => {
	var t = 0
	actualtext = actualtext.replace(/\d+/g, function (match) {
		t++
		return t === 2 ? replacetext : match
	})
	return actualtext
}

export default replaceSecondoccurrence
