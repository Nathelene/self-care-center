//ARRAYS
var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 
    'Don’t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.',
    'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.',
    'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.'];
var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.', 'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.', 'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.'];




//VARIABLES
var receiveMessageButton = document.querySelector('button');
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var img = document.querySelector('.image');
var messageBox = document.querySelector('#three');
var deleteMessageButton = document.querySelector('#Delete-Message');
var deleteMessageResponse = document.getElementById('deleted');
var deleteMessageResponseButton = document.querySelector('#deleted');
var affirmationMessage 
var mantraMessage





//EVENT LISTENERS
receiveMessageButton.addEventListener('click',showNewMessage);
deleteMessageButton.addEventListener('click',deleteMessage);
deleteMessageResponseButton.addEventListener('click', deleteMessage);




//FUNCTIONS
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}



function showNewMessage(){

    affirmationMessage = affirmations[getRandomIndex(affirmations)];
    mantraMessage = mantras[getRandomIndex(mantras)];
  
if(document.getElementById('affirmation').checked){
    messageBox.innerHTML = `<p>${affirmationMessage}</p>`
    } else if(document.getElementById('mantra').checked) {
    messageBox.innerHTML = `<p>${mantraMessage}</p>`
  }
   deleteMessageButton.classList.remove('hidden')
}



function deleteMessage() {
  
  if(messageBox.innerHTML === `<p>${affirmationMessage}</p>`){
      for (var i = 0; i < affirmations.length; i++){
        if (affirmations[i] === affirmationMessage) {
          affirmations.splice(i, 1);    
        }
      }
      console.log(affirmations)
    } else if (messageBox.innerHTML === `<p>${mantraMessage}</p>`){
      for (var i = 0; i < mantras.length; i++) {
        if (mantras[i] === mantraMessage) {
          mantras.splice(i,1);
        }
      }
    }
    showNewMessage();
    deleteMessageResponse.classList.toggle('deleted');
};
  
  

















