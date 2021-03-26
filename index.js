const messages = [ 
    {
        author: "Andrew Hendrixson", 
        message: "“Anyone who has ever made anything of importance was disciplined.” — "
    },
    {
        author: "Coco Chanel", 
        message: "“Don’t spend time beating on a wall, hoping to transform it into a door.” —"
    },
    {
        author: "Albert Einstein", 
        message: "“Optimism is the one quality more associated with success and happiness than any other.” — "
    },
    {
        author: "Brian Tracy", 
        message: "“Creativity is intelligence having fun.” — "
    },
];

function randomize (num1, num2){
    return Math.floor(Math.random() * (num2 - num1) + num1);
};

function getMessage (randomNumber){
     console.log(messages[randomNumber].message + messages[randomNumber].author);
};

const randomNumber = randomize(0, messages.length);
getMessage(randomNumber);