const countdown = document.getElementById("timeleft")
const textElement = document.getElementById("text")
const displayTyped = document.getElementById("typed")
const testContainer = document.getElementById("testcontainer")
const test = document.querySelector("#start")

const testLength = 15
const defoScheme = 4

const defMode = "time"
const defLength = 'medium'

const textColors = ["#c0d036", "#00dd00", "#eeeeee", "#F1FAEE", "#000000", "#19e919", "#0077dd", "#ffff00"]
const wrongColors = ["#dd5533", "#dd0000", "#888888", "#E63946", "#d00", "#dd0019", "#e9a100", "#91911a"]
const bgColors = ["#36475c", "#181818", "#111111", "#457B9D", "#ffffff", "#001919", "#001938", "#5c2991"]
const shadowColors = ["#5c6c80", "#383838", "#333333", "#A8DADC", "#00000080", "#193838", "#003857", "#9854de"]

var words = ['the', 'of', 'to', 'and', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'hot', 'but', 'some', 'what', 'there', 'we', 'can', 'out', 'other', 'were', 'all', 'your', 'when', 'up', 'use', 'word', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'would', 'write', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'my', 'sound', 'no', 'most', 'number', 'who', 'over', 'know', 'water', 'than', 'call', 'first', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'much', 'great', 'think', 'say', 'help', 'low', 'line', 'before', 'turn', 'cause', 'same', 'mean', 'differ', 'move', 'right', 'boy', 'old', 'too', 'does', 'tell', 'sentence', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'thought', 'let', 'keep', 'eye', 'never', 'last', 'door', 'between', 'city', 'tree', 'cross', 'since', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'stop', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'often', 'always', 'music', 'those', 'both', 'mark', 'book', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'group', 'carry', 'took', 'rain', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'north', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'state', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'farm', 'top', 'whole', 'king', 'size', 'heard', 'best', 'hour', 'better', 'during', 'hundred', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'five', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'science', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'fall', 'power', 'town', 'fine', 'certain', 'fly', 'unit', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'sleep', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'lot', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'yet', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'age', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'yes', 'hot', 'miss', 'brought', 'heat', 'snow', 'bed', 'bring', 'sit', 'perhaps', 'fill', 'east', 'weight', 'language', 'among']
var timeLeft = 0;

function ChangeMode(mode) {
	localStorage.setItem("typeMode", mode)
	location.reload()
}

if ( localStorage.getItem("typeMode") == null ) {
	typeMode = defMode
} else {
	typeMode = localStorage.getItem("typeMode")
}

if (typeMode == "time"){
	document.querySelector("#time").classList.remove("hidden")
	document.querySelector("two").classList = "not-selected"
}
else {
	document.querySelector("#words").classList.remove("hidden")
}

function ChangeLength(length) {
	localStorage.setItem("length", length)
	location.reload()
}

if (localStorage.getItem("length") == null) {
	length = "30s"
} else {
	length = localStorage.getItem("length")
}

if (typeMode == "words" && length.includes("s")) {
	length = "25w"
} else if (typeMode == "time" && length.includes("w")) {
	length = "30s"
}

var testStarted = false
var testFinished = testStarted

switch (length) {
	case "15s":
		timeLeft = 15
		document.querySelector("#time > .short").classList= "selected"
		break
	case "30s":
		timeLeft = 30
		document.querySelector("#time > .medium").classList= "selected"
		break
	case "60s":
		timeLeft = 60
		document.querySelector("#time > .long").classList = "selected"
		break
	case "120s":
		timeLeft = 120
		document.querySelector("#time > .extra-long").classList= "selected"
		break
	case "10w":
		words = words.splice(0, 10)
		document.querySelector("#words > .short").classList= "selected"
		break
	case "25w":
		words = words.splice(0, 25)
		document.querySelector("#words > .medium").classList= "selected"
		break
	case "50w":
		words = words.splice(0, 50)
		document.querySelector("#words > .long").classList= "selected"
		break
	case "100w":
		words = words.splice(0, 100)
		document.querySelector("#words > .extra-long").classList = "selected"
		break
}

if (length.includes("s")){
	document.querySelector("one").classList = "selected"
	countdown.innerHTML = timeLeft.toString() + "s"
} else {
	document.querySelector("two").classList = "selected"
	countdown.innerHTML = "0/" + length.substring(0, length.length - 1)
}

function shuffle(array) {
	var counter = array.length, temp, index

	while (counter > 0) {
		index = Math.floor(Math.random() * counter)
		counter--
		temp = array[counter]
		array[counter] = array[index]
		array[index] = temp
	}
	return array
}

function cs_on() {
	document.getElementById("cs-display").style.right = "0vw"
}

function cs_off() {
	document.getElementById("cs-display").style.right = "400vw"
}

var letterIndex = 0
var shuffledWords = shuffle(words)
var text = shuffledWords.toString().replace(/,/g, " ")
text += " "
var textArray = text.split("")
var keysAllowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "]

var charactersTyped = 0
var wrongCharacters = 0
var correctcharacters = 0

for (i = 0; i < textArray.length; i++) {
	let child = document.createElement("letter")
	child.innerHTML = textArray[i]
	child.dataset.letter = textArray[i]
	child.dataset.typed = "false"
	child.dataset.currentletter = "";
	textElement.appendChild(child)
}

function ChangeScheme(schemeI) {
	let root = document.documentElement
	root.style.setProperty("--text-color", textColors[schemeI])
	root.style.setProperty("--wrong-color", wrongColors[schemeI])
	root.style.setProperty("--bg-color", bgColors[schemeI])
	root.style.setProperty("--shadow-color", shadowColors[schemeI])

	localStorage.setItem("prefScheme", schemeI)
}

if (localStorage.getItem("prefScheme") == null) { prefScheme = defoScheme }
else { prefScheme = localStorage.getItem("prefScheme") }
ChangeScheme(prefScheme)

var wpm = 0

function CalculateWPM(elapsed) {
	wpm = Math.floor(correctcharacters * (60 / elapsed) / 5)
	document.getElementById("wpmdisplay").innerHTML = Math.floor(wpm).toString() + " WPM"
}

var words_typed = 0

var arrayTyped = []
var splitString = text.split(" ")
var minOffsetTop = document.querySelector('letter:nth-child(1)').offsetTop
var line = 1;

var end = 0
var start = 0

function StartTest(e) {

	if (testStarted == false) {
		test.classList.remove("typing")
		testStarted = true
		if (length.includes('s')) {
			countdown.innerText = length
			var testStart = setInterval(function decrementTime() {
				if (timeLeft != 0) {
					timeLeft -= 1
					countdown.innerText = timeLeft + "s"
				} else {
					clearInterval()
					testFinished = true
					CalculateWPM(length.substring(0, (length.length - 1)))
				}
			}, 1000)
		} else {
			start = Math.floor(Date.now() / 1000)
		}
	}
}

document.onkeydown = function (e) {
	if (!testFinished) {
		let letter = document.querySelector(`letter:nth-child(${letterIndex + 1})`)

		if (e.key == "Backspace" && letterIndex >= 0) {
			let bsdLetter = document.querySelector(`letter:nth-child(${letterIndex - 1})`) // letter that the caret will be on when you backspace
			bsdLetter.classList += " typing"

			let deletedLetter = document.querySelector(`letter:nth-child(${letterIndex})`)
			deletedLetter.classList = ""
			deletedLetter.dataset.typed = "false"
			deletedLetter.innerText = deletedLetter.dataset.letter

			letterIndex--

			if (letter.innerHTML == " "){
				words_typed--
			}

		} else if (!keysAllowed.includes(e.key)) {
			//pass, non-letter key pressed
			if (e.key == "Tab") {
				document.querySelector("#restart").classList = "focused";
				return false;
			}

			if (e.key == "Enter" && document.querySelector("#restart").classList == "focused") {
				location.reload()
			}
		} else {

			test.classList = ''

			if (letterIndex > 0) { document.querySelector(`letter:nth-child(${letterIndex})`).classList.remove("typing") }
			letterIndex++

			if (e.key != letter.innerText) {
				letter.classList += "wrong typing"
				letter.innerText = e.key
				wrongCharacters++
			} else {
				StartTest()
				letter.classList = "right typing"
				correctcharacters++

				if (e.key == " ") {

					words_typed++

					if (length.includes("w")) {
						countdown.innerHTML = words_typed + "/" + words.length
					}
				}
			}

			charactersTyped++

			letter.dataset.currentletter = e.key
			letter.dataset.typed = "true"

			// document.querySelector("::after").top = 

				if (e.key == " ") {
					let spaces = document.querySelectorAll("[data-typed='true'][data-letter=' ']")
					
					var lastspace = null
					try {
						for (i = 0; i < spaces.length; i++) {
							if (spaces[i].nextSibling.offsetTop != spaces[i].offsetTop) {
								lastspace = spaces[i]							
							}
							else{lastspace = null}
						}
					} catch {}

					let lineheight = Number( window.getComputedStyle(textElement).getPropertyValue("line-height").substring(0, window.getComputedStyle(textElement).getPropertyValue("line-height").length - 2) )
					let positionTop = Number( window.getComputedStyle(textElement).getPropertyValue("top").substring(0, window.getComputedStyle(textElement).getPropertyValue("top").length - 2) )

					if (lastspace != null){
						textElement.style.top = (positionTop - lineheight).toString() + "px"
						line++
						lastspace.classList.remove("typing")
						lastspace = null
						test.classList = 'typing'
					}
							
					if (document.querySelector("letter:last-child").dataset.typed == "true" && document.querySelector("letter:last-child").dataset.currentletter == " ") {
						end = Math.floor(Date.now() / 1000)
						CalculateWPM(end - start)
						testFinished = true
					}
				}
			}
		}

}

document.onclick = function (){
	document.querySelector("#restart").classList = ''
}

var statsBtn = document.querySelector(".stats")
var statsElem = document.querySelector(".statscontainer")

document.querySelector(".stats").onclick = function (){
	if (statsBtn.dataset.selected == "false"){
		statsBtn.dataset.selected = "true"
		statsElem.dataset.selected= "true"
	} else {
		statsBtn.dataset.selected = "false"
		statsElem.dataset.selected= "false"
	}
}
