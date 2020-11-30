
// $("#div2").hover(function(){
//         if($(this).css("z-index")==0) {
//             $(this).fadeTo("fast",1);
//         }
//     }
// ,function(){ 
//         if($(this).css("z-index")==0){
//                 $(this).fadeTo("fast",0.5)
//         }
//     }
//   )
  $("#div2").click(function(){
      if($(this).css("z-index")==0){
        $(this).animate({"top":"-="+($("#div2").height()+55)},300,"swing",function(){
                $("#div2").css("opacity",1)
                .css("z-index",1);
                $("#div1").css("z-index",0)
                .fadeTo("fast",0.5);    
            })
        .animate({"top":"+="+($("#div2").height()+55)},300,"swing")
        .animate({"top":"-=15px"},"fast","swing")
        .animate({"top":"+=15px"},"fast","swing");
      }
  })
  $("#div1").click(function(){
    if($(this).css("z-index")==0){
      $(this).animate({"top":"-="+($("#div1").height()-45)},300,"swing",function(){
              $("#div1").css("opacity",1)
              .css("z-index",1);
              $("#div2").css("z-index",0)
              .fadeTo("fast",0.5);    
          })
      .animate({"top":"+="+($("#div1").height()-45)},300,"swing")
      .animate({"top":"-=15px"},"fast","swing")
      .animate({"top":"+=15px"},"fast","swing");
    }
})
$(".flip-card-inner").on("click",function() {
  // $(".flip-card-inner").css( "transform", "rotateY(-180deg)" );
     $(this).toggleClass('flipped');
     console.log('test');
});


$("#flipbook").turn();