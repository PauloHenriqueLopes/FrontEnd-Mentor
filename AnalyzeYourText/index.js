document.addEventListener("DOMContentLoaded", function() {
    let icon = document.getElementById("iconMode");
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark");
        icon.setAttribute("name", "sunny-outline");
    } else {
        document.body.classList.remove("dark");
        icon.setAttribute("name", "moon-outline");
    }

    document.getElementById("darkMode").addEventListener("click", function() {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            icon.setAttribute("name", "moon-outline");
            localStorage.setItem("darkMode", "disabled");
        } else {
            document.body.classList.add("dark");
            icon.setAttribute("name", "sunny-outline");
            localStorage.setItem("darkMode", "enabled");
        }
    });

    var setCharacterLimit = document.querySelector("input[name=setCharacterLimit]");
    setCharacterLimit.addEventListener("change", function(){
        let textArea = document.getElementById("textArea");
        console.log(textArea);
        if(setCharacterLimit.checked) {
            document.getElementById("textArea");
            textArea.setAttribute("maxlength", "200");
        } else {
            textArea.removeAttribute("maxlength");
        }
    });
});

document.addEventListener("keyup", function(e) {
    let input = e.target;
    let charCountMap = {};
    let total = 0;    

    var excludeSpaces = document.querySelector("input[name=excludeSpaces]");
    excludeSpaces.addEventListener("change", function() {
    });

    if(input.tagName.toLowerCase() === "textarea") {
        let textBox = input.value;

        let words = textBox.length != 0 ? textBox?.trim().split(/\s+/)?.length : 0;
        var wordsCount = document.getElementById("wordCountNumber");
        wordsCount.innerHTML = words;
        
        let characters = excludeSpaces.checked ? textBox?.replaceAll(" ", "")?.length || 0 : textBox?.length || 0;
        let charactersCount = document.getElementById("charactersCountNumber");
        charactersCount.innerHTML = characters;

        let sentence = textBox.length != 0 ? textBox?.split('. ')?.length : 0;
        let sentenceCount = document.getElementById("sentenceCountNumber");
        sentenceCount.innerHTML = sentence;

        let readingTime = Math.ceil(words / 200);
        let readingTimeCount = document.getElementById("readingTime");
        readingTimeCount.innerHTML = `Aprox. reading time: < ${readingTime} minutes`;

        let rangeBox = document.getElementById("rangeBox");
        rangeBox.innerHTML = "";

        for (let i = 0; i < textBox.replaceAll(" ", "").length; i++) {
            let char = textBox.toUpperCase().replaceAll(" ", "")[i];
            if (charCountMap[char]) {
                charCountMap[char]++;
            } else {
                charCountMap[char] = 1;
            }
        }
        total = textBox.replaceAll(" ", "").length;

        let sortedEntries = Object.entries(charCountMap).sort((a, b) => (b[1] / total) - (a[1] / total));
        let topLetters = sortedEntries.slice(0);

        document.querySelectorAll('input[type="range"]').forEach(el => el.remove());
        document.querySelectorAll('p[class="info"]').forEach(el => el.remove());
        document.querySelectorAll('p[class="key"]').forEach(el => el.remove());
        document.querySelectorAll('p.empty').forEach(el => el.remove());

        topLetters.forEach(([key, value]) => {
            if (total === 0) {
                const empty = document.createElement('p');
                empty.className = "empty";
                empty.innerText = "No characters found. Start typing to see letter density."
                rangeBox.appendChild(empty);
            } else {
                const createInput = document.createElement('input');
                const creatP = document.createElement('p');
                const creatKey = document.createElement('p');
                creatKey.className = "key";
                creatKey.innerText = key;
                createInput.type = "range";
                createInput.min = 0;
                createInput.max = 100;
                createInput.value = (value / total) * 100;
                createInput.style.setProperty('--progress', `${(value / total) * 100}%`);
                createInput.setAttribute("disabled", "true");
                creatP.className = "info";
                creatP.innerText = value + " (" + ((value / total) * 100).toFixed(2) + "%)";

                rangeBox.appendChild(creatKey);
                rangeBox.appendChild(createInput);
                rangeBox.appendChild(creatP);
            }
        });
        
        document.querySelectorAll('.rangeBox input[type="range"]').forEach(range => {
            range.addEventListener('input', function() {
                let percent = (this.value - this.min) / (this.max - this.min) * 100;
                this.style.setProperty('--progress', `${percent}%`);
            });
        });

    }
    
});

