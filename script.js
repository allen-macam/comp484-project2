$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $(`.sleep-button`).click(clickedSleepButton);
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Faker", weight: 20, happiness: 50};
  
    function clickedTreatButton() 
    {
      // Increase pet happiness
      pet_info['happiness'] += 5;

      // Increase pet weight
      pet_info['weight'] += 2;

      //show notification
      showNotification("You gave your pet a treat!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() 
    {
      // Increase pet happiness
      pet_info['happiness'] += 10;

      // Decrease pet weight
      pet_info['weight'] -= 5;

      //show notification
      showNotification("You played with your pet!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() 
    {
      // Decrease pet happiness
      pet_info['happiness'] -= 5;

      // Decrease pet weight
      pet_info['weight'] -= 10;

      //show notification
      showNotification("You exercised with your pet!");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() 
    {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() 
    {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] < 0)
      {
        pet_info['weight'] = 0;
      }
      if (pet_info['happiness'] < 0)
      {
        pet_info['happiness'] = 0;
      }
    }

    function clickedSleepButton()
    {
      //increases pet happiness
      pet_info['happiness'] += 15;

      //weigth stays the same
      checkAndUpdatePetInfoInHtml();
    }

    function showNotification(message)
    {
      $('.pet-notification').text(message);
      $('.pet-notification').fadeIn(500).delay(1000).fadeOut(500);
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  