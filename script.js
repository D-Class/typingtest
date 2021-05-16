const countdown = document.getElementById("timeleft")
const inputbox = document.getElementById("typehere")
const textElement = document.getElementById("whattotype")
const displayTyped = document.getElementById("typed")
const testContainer = document.getElementById("testcontainer")

const testLength = 30
const defoScheme = 1
const rowLength = 8

const textColors = ["#c0d036", "#00dd00", "#111111", "#F1FAEE"]
const wrongColors = ["#dd5533", "#dd0000", "#888888", "#E63946"]
const bgColors = ["#36475c", "#101010", "#efefef", "#457B9D"]
const shadowColors = ["#5c6c80", "#1d1d1d", "#333333", "#A8DADC"]
const fadedbgColors = [bgColors[0]+"dd", bgColors[1]+"dd", bgColors[2]+"dd", bgColors[3]+"dd"]

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

function cs_on(){
	// document.getElementById("cs-display").style.visibility = "visible";
	document.getElementById("cs-display").style.right = "0vw";
}

function cs_off(){
	// document.getElementById("cs-display").style.visibility = "hidden";
	document.getElementById("cs-display").style.right = "100vw";

}

var words = ['the', 'of', 'to', 'and', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'hot', 'but', 'some', 'what', 'there', 'we', 'can', 'out', 'other', 'were', 'all', 'your', 'when', 'up', 'use', 'word', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'would', 'write', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'my', 'sound', 'no', 'most', 'number', 'who', 'over', 'know', 'water', 'than', 'call', 'first', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'much', 'great', 'think', 'say', 'help', 'low', 'line', 'before', 'turn', 'cause', 'same', 'mean', 'differ', 'move', 'right', 'boy', 'old', 'too', 'does', 'tell', 'sentence', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'thought', 'let', 'keep', 'eye', 'never', 'last', 'door', 'between', 'city', 'tree', 'cross', 'since', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'stop', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'often', 'always', 'music', 'those', 'both', 'mark', 'book', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'group', 'carry', 'took', 'rain', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'north', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'state', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'farm', 'top', 'whole', 'king', 'size', 'heard', 'best', 'hour', 'better', 'during', 'hundred', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'five', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'science', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'fall', 'power', 'town', 'fine', 'certain', 'fly', 'unit', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'sleep', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'lot', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'yet', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'age', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'yes', 'hot', 'miss', 'brought', 'heat', 'snow', 'bed', 'bring', 'sit', 'perhaps', 'fill', 'east', 'weight', 'language', 'among']

var charactersTyped = 0
var wordIndex = 0
var wordsRight = 0
var shuffledWords = shuffle(words)
var text = words.toString()
var text2 = text.replace(/,/g, " ")

for (i = 0; i < 100; i++) {
    let row = document.createElement("div")
    row.id = "row" + i.toString()
    textElement.appendChild(row)
}

shuffledWords.forEach(function (item, index) {
    let rowId = Math.floor(index / rowLength).toString()
    let wordElem = document.createElement("span")
    wordElem.id = index.toString()
    wordElem.className += "word"
    wordElem.innerHTML = item + " "
    document.getElementById("row" + rowId).appendChild(wordElem)
})

function ChangeScheme(schemeI){
	let root = document.documentElement;
	root.style.setProperty("--text-color", textColors[schemeI])
	root.style.setProperty("--wrong-color", wrongColors[schemeI])
	root.style.setProperty("--bg-color", bgColors[schemeI])
	root.style.setProperty("--shadow-color", shadowColors[schemeI])
	root.style.setProperty("--fadedbg-color", fadedbgColors[schemeI])

	localStorage.setItem("prefScheme", schemeI)
}

if (localStorage.getItem("prefScheme") == null){prefScheme = defoScheme}
else {prefScheme = localStorage.getItem("prefScheme")}
ChangeScheme(prefScheme);

function CalculateWPM(){
    var wpm = correctTyped.length * (60 / testLength) / 5
    document.getElementById("wpmdisplay").innerHTML = '<i class="fas fa-angle-right" style="margin-right: 1.25vmin;"></i>' + Math.floor(wpm).toString() + " WPM"
}

var testStarted = false
var testFinished = testStarted
var timeLeft = testLength
countdown.innerHTML = timeLeft.toString() + "s"
var textTyped = ""
var arrayTyped = []
var splitString = text.split(" ")
var correctTyped = ""

function startTest(e) {

    if (testStarted == false) {
        testStarted = true
        var testStart = setInterval(function decrementTime() {
            if (timeLeft != 0) {
                timeLeft -= 1
                countdown.innerText = timeLeft + "s"
            } else {
                clearInterval()
                testFinished = true
                inputbox.disabled = true
                inputbox.value = ''
                inputbox.placeholder = "Test finished."
                CalculateWPM()
                textElement.style.filter = "brightness(85%)"
				countdown.style.filter = "brightness(85%)"
				inputbox.style.filter = "brightness(85%)"
            }
        }, 1000)
    }
}

function checkClearBox() {
    if (!testFinished & inputbox.value.length > 1) {
        let containsSpace = inputbox.value.includes(" ")
        if (containsSpace) {
            textTyped += inputbox.value
            if (shuffledWords[wordIndex] == inputbox.value.replace(" ", "")) {
                correctTyped += inputbox.value
                wordsRight++
            }

            arrayTyped.push(inputbox.value.replace(" ", ""))
            inputbox.value = ""
            if (((wordIndex + 1) % rowLength) == 0 && wordIndex > 0) {
                document.getElementById("row" + (Math.floor(wordIndex / rowLength)).toString()).style.display = "none";
            }
            wordIndex++
        }
    }
    requestAnimationFrame(checkClearBox)
}

requestAnimationFrame(checkClearBox)
try {
requestAnimationFrame(function checkCorrect() {
    document.getElementById(wordIndex).classList.add("typingword")
    if (wordIndex > 0) {
        try {
            if (document.getElementById((wordIndex - 1).toString()).classList.contains("typingword")) {
                document.getElementById((wordIndex - 1).toString()).classList.remove("typingword")
            }
        }
        catch { }
    }
    if (shuffledWords[wordIndex].includes(inputbox.value) && inputbox.value != "") {
        document.getElementById(wordIndex.toString()).style.color = "var(--text-color)"
    } else if (inputbox.value == "") {
    } else {
        document.getElementById(wordIndex.toString()).style.color = "var(--wrong-color)"
    }

    requestAnimationFrame(checkCorrect)
})
}

catch {}
