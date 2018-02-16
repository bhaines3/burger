console.log("yo");
$(document).on("click", "#eatBurger", function(event){
  event.preventDefault()
  console.log("this burger is about to be eaten");
  // var eatenBurger = {
  //   devoured: 1
  // }
  var burgerId = parseInt($(this).attr("data-burgerId"))
  console.log(typeof burgerId);
  $.ajax({
    url: "/" + burgerId,
    method: "PUT"
  }).then(function(res){
  console.log(window.location)
  window.location.reload()
  })
})