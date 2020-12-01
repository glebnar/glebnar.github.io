

$(".flip-card-inner").on("click",function() {
  // $(".flip-card-inner").css( "transform", "rotateY(-180deg)" );
     $(this).toggleClass('flipped');
     console.log('test');
});

function horloge()
{
	var tt = new Date().toLocaleTimeString(); // hh:mm:ss
 
  $("#heure").text(tt)
	setTimeout(horloge, 1000); // mise à jour du contenu "timer" toutes les secondes
}
horloge();