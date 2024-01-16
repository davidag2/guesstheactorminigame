const actors = [
    { name: 'Tom Hanks', image: 'tom_hanks.jpg' },
    { name: 'Leonardo DiCaprio', image: 'leo_dicaprio.jpg' },
    { name: 'Emma Watson', image: 'emma_watson.jpg' },
    // Add more actors as needed
];

let currentActorIndex = 0;
const actorImg = document.getElementById('actor-img');
const actorInput = document.getElementById('actor-input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

// Load the first actor
loadActor();

submitBtn.addEventListener('click', checkGuess);
nextBtn.addEventListener('click', loadNextActor);

function loadActor() {
    const currentActor = actors[currentActorIndex];
    actorImg.src = currentActor.image;
    actorInput.value = '';
    result.textContent = '';
    nextBtn.style.display = 'none';
}

function checkGuess() {
    const currentActor = actors[currentActorIndex];
    const userGuess = actorInput.value.trim().toLowerCase();

    if (userGuess === currentActor.name.toLowerCase()) {
        result.textContent = 'Correct! 🎉';
        nextBtn.style.display = 'block';
    } else {
        result.textContent = 'Incorrect. Try again.';
    }
}

function loadNextActor() {
    currentActorIndex++;
    if (currentActorIndex < actors.length) {
        loadActor();
    } else {
        result.textContent = 'You have completed the game!';
        nextBtn.style.display = 'none';
    }
}
