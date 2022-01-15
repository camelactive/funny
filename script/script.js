let pidori = ["Никита", "никита", "НИКИТА", "Nikita", "nikita", "NIKITA"]
inputNameHandler = e => {
    // console.log(e.value);
    let name = e.value;
    for (let i = 0; i < pidori.length; i++) {
        if (e.value == pidori[i]) {
            e.value = "гей" + " " + name;
            let x = (`Приветствую тебя сэр ${e.value}`)
            let greetings_content_write = document.querySelector(".greetings_content_write");
            greetings_content_write.style.fontSize = "54px";
            greetings_content_write.insertAdjacentText("afterbegin", `Приветствую тебя сэр ${e.value}`)

        }
    }
};