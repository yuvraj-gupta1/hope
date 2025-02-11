const messageDiv = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gif = document.getElementById('gif');

const noMessages = [
    "Please, please say yes!",
    "I'll buy you chocolates!",
    "Don't break my heart!",
    "Are u sure"
];

const noGifURL = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXp5d2RkMjB2MHB6aHF1MjFraHJwZW55cXdnaG9pcWIzYXZqdTcycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6WIhJ07gwGkIAQfwN/giphy.gif";
                 // "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhreGkwZHZjcm80czU5Nnd1b2hxYW5uZXZzd3V2YTd1Zmh6a2N3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I1nwVpCaB4k36/giphy.gif",
                 // "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG15eG1kNWw3dnViajE1MjN5cTVkNzkwdmF4OWRvZndqcXBxa2tvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JLQKmspQAMWQ/giphy.gif"]; // Your "no" GIF URL
const yesGifURL = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhyeGtyaGd1MmN6eHJxZHVpeWd5MHkycGpqdjdlNWF6dWRwcGtiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zINs6k7lwfawSbLOIc/giphy.gif"; // Your "yes" GIF URL
const initialGifURL = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVhN3MycnNsZ3l6aXczYXNuY2VuaXVnZmk0azJrcGtoNHE2ZW54MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLG2ZFo3yBMHYXC36F/giphy.gif"; // Your initial GIF URL

gif.src = initialGifURL; // Set initial GIF

let noButtonClickCount = 0;

yesButton.addEventListener('click', () => {
    messageDiv.textContent = "Hurray! I'm so happy!";
    gif.src = yesGifURL;
    yesButton.style.display = "none";
    noButton.style.display = "none";
});

noButton.addEventListener('click', () => {
    // if(noButtonClickCount<3){
        const randomIndex = Math.floor(Math.random() * noMessages.length);
        messageDiv.textContent = noMessages[randomIndex]; // Or any other message
        gif.src = noGifURL;
        // git.src = noGifURL[noButtonClickCount];
        // noButtonClickCount++;// Show the "no" GIF
    // }else{
    //     noButton.style.display="none";
    // }
        
});

// yesButton.addEventListener('click', () => {
//     messageDiv.textContent = "Hurray! I'm so happy!";
//     gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhyeGtyaGd1MmN6eHJxZHVpeWd5MHkycGpqdjdlNWF6dWRwcGtiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zINs6k7lwfawSbLOIc/giphy.gif"; // Happy GIF
//     // yesButton.disabled = true;
//     // noButton.disabled = true;
//     yesButton.style.display = "none";
//     noButton.style.display = "none";
// });

// noButton.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * noMessages.length);
//     messageDiv.textContent = noMessages[randomIndex];
// });
