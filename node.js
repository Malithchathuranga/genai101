const facts = [
"I enjoy photography and have captured stunning landscapes during my travels.",
"I love cooking and experiment with new recipes every weekend.",
"I’ve been to 10 countries and am always planning my next adventure.",
"I’m passionate about gardening and grow a variety of herbs and vegetables.",
"I volunteer at a local animal shelter, helping care for stray pets."
];

function generateFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
