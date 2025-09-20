let score = 0;
function updateScore(points){
    score += points;
    document.querySelectorAll("#scoreBoard").forEach(el=>el.innerText="Score: "+score);
}

// Memory Game
function memoryGame(){
    let sequence=["red","green","blue"];
    alert("Memorize sequence: "+sequence.join(","));
    let answer=prompt("Enter sequence comma-separated:");
    if(answer.toLowerCase().replace(/\s+/g,'')===sequence.join(",").toLowerCase()){
        alert("Correct!");
        updateScore(10);
    } else alert("Incorrect!");
}

// Speech Game
function startSpeechGame(){
    if(!('webkitSpeechRecognition' in window)){
        alert("Speech recognition not supported!");
        return;
    }
    let recognition=new webkitSpeechRecognition();
    recognition.lang='en-US';
    recognition.onresult=function(event){
        let text=event.results[0][0].transcript.toLowerCase();
        if(text.includes("apple")){ alert("Correct!"); updateScore(10);}
        else alert("Try Again!");
    }
    recognition.start();
}

// Family Scenario
function familyScenarioGame(){
    document.getElementById("scenarioImg").src="images/family1.png";
    setTimeout(()=>{
        document.getElementById("scenarioImg").src="images/family2.png";
        let answer=prompt("What happened next?");
        if(answer.toLowerCase().includes("cooking")){ alert("Correct!"); updateScore(10);}
        else alert("Try Again!");
    },3000);
}

// Bollywood Quiz
function bollywoodQuiz(){
    let answer=prompt("Identify the movie from props: Options: Movie1, Movie2, Movie3");
    if(answer.toLowerCase()==="movie1"){ alert("Correct!"); updateScore(10);}
    else alert("Incorrect!");
}

// Combinational Task
function combinationalTask(){
    alert("Memorize temple image and answer memory questions.");
    let q=prompt("Which color was the temple dome?");
    if(q.toLowerCase()==="red"){ updateScore(10); alert("Correct!");}
    else alert("Incorrect!");
    startSpeechGame();
}
