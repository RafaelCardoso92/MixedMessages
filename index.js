const name = ["Andrew Hendrixson","Coco Chanel","Albert Einstein","Brian Tracy"];
const messages = ["“Anyone who has ever made anything of importance was disciplined.” — ", "“Don’t spend time beating on a wall, hoping to transform it into a door.” — ", 
"“Optimism is the one quality more associated with success and happiness than any other.” — ", 
"“Creativity is intelligence having fun.” — ", "“Always keep your eyes open. Keep watching. Because whatever you see can inspire you.”"];
const temp = [["Andrew Hendrixson","“Anyone who has ever made anything of importance was disciplined.” — "], ["Coco Chanel","“Don’t spend time beating on a wall, hoping to transform it into a door.” — "],
["Albert Einstein","“Optimism is the one quality more associated with success and happiness than any other.” — "], []];

function randomize (num1, num2){
    return Math.floor(Math.random() * (num2 - num1) + num1);
};


function getMessage (randomNumber){
     console.log(messages[randomNumber] + name[randomNumber]);
};

const randomNumber = randomize(0, messages.length);
getMessage(randomNumber);