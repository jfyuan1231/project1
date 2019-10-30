document.addEventListener("DOMContentLoaded", function() { 

  //webpage menu
  let elements = document.getElementsByClassName("eLi");

  function TurnButtonColor(event){
    event.preventDefault();
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
  };
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', TurnButtonColor);
  };

 //submit button
  let el = document.getElementsByClassName("subscription")[0];
  el.addEventListener('click', validation);

  function validation(event) {
    event.preventDefault();
    let el1 = document.getElementsByClassName("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el1)) {
      alert('Thanks for your subscription!');
    } else { 
      alert('Hello, please enter a valid email address!');
  };
};
});
