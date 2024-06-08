async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena Suerte";

    let url = "https://puzzle.mead.io/puzzle";
     if(wordCount.value){
        url += "?wordCount=" + wordCount.value;  
     }

    let response = await fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        
    }
        );
     console.log("response works", response);
    let data = await response.json();
     console.log("data shows",data);

    return hiddenSentence;
}
