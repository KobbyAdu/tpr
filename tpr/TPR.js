// when you hit submit button, it will pull up a link with your suggested practice routine//

'Click Here' = var link = document.createElement('Click Here')

link.href = 'https://google.com'
link.textContent = 'Click Here' ;

Submit.onclick = function() {
    console.log("Clicked")
    forbutton.innerHTML =  ("Click Here");
   
};





