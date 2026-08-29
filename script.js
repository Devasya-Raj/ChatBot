function sendMessage(){
    
    let input = document.getElementById("userInput");
    console.log("1. input:",input);
    let message = input.value.toLowerCase();
    console.log("2. message:",message);
    let chatBox = document.getElementById("chatbox");
    console.log("3. chatBox:",chatBox);

    
    chatBox.innerHTML += `<div class ="user">${input.value}</div>`;
    console.log("4. user message added");

    let reply = "";

    if(message.includes("hello")){
        reply = "Hello here is your ChatBot";
    }
    else if(message.includes("who are you")){
        reply = "i'm ChatBot your virtual banking helper";
    }
    else if(message.includes("how are you")){
        reply = "i'm doing well ! how can I help you";
    }
    else if(message.includes("how can i check my bank balance")){
        reply = "you can check your balance through Net banking,ATM or contacting your bank";
    }
    else if(message.includes("what's the timing of the bank")){
        reply = "it may vary branch to branch. please check your bank website";
    }
    else if(message.includes("how can i block my card")){
        reply = "you can block your card through your bank's mobile app";
    }
    else{
        reply ="sorry, I didn't understand your query"
    }
    chatBox.innerHTML+=`<div class="bot">${reply}</div>`;

    input.value="";

}