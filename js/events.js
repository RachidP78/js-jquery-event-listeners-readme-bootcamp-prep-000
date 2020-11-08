//define functions here
function getIt() {
  $('p').click(function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').load(function() {
      $('img').addClass("tasty")
  })
}

function pressIt() {
  $(document).keydown(function() {
    if(key.which == 71){
      alert('g was pressedd')
    }
  })
}

function submitIt() {

}

$(document).ready(function(){

// call functions here

});
