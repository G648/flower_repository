const title = document.querySelector('.title')
const text = 'Ana Bia. Te conhecer um pouco melhor foi muito gratificante, poder sentar e conversar, até mesmo só ouvir o que você tinha a dizer.... Poder te ouvir e te apreciar um pouquinho mais de perto foi especial para mim! Conhecer seus gostos musicais, saber um pouco da sua história de vida... Tudo isso me faz ficar com os olhos bilhandos sempre que penso em você'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});