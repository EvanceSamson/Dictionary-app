
const btn = document.querySelector("button");
const results = document.querySelector(".results");
const error_msg = document.getElementById("error_msg");
const input = document.getElementById("input");

async function getData() {
    let word = input.value;
    if(word === ""){
            error_msg.innerText = `please write something!`;
        }
    else{
        try{

       
     
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await response.json();

        console.log(data);


        results.innerHTML = `
                  <h1>${word}</h1>
            <div class="word-details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic || " "}</p>
            </div>
            <h2>${data[0].meanings[0].definitions[0].definition}</h2>
            <p id="example">${data[0].meanings[0].definitions[0]
                .example || " "}
            </p>
        `


    }
    catch(error){
        console.error(error);
        error_msg.innerText = `Couldn't find the meaning of ${input.value}`;
    }
    }
    
}

btn.addEventListener("click", getData);
