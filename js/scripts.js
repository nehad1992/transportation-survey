$(document).ready(function(){

    $("body").css("background-color", "green");

    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("body").css("background-color", "aqua");
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
      });
      $('#transportation_survey').hide();
      $('#transportation_survey2').show();
    });

    

    $("form#transportation_survey2").submit(function(event){
        $("body").css("background-color", "red");
        event.preventDefault();
        $("#fun-responses").show();
        $("#work-responses").show();
        $("input:checkbox[name=fun-transportation]:checked").each(function(){
          var funTransportationMode = $(this).val();
          $('#fun-responses').append(funTransportationMode + "<br>");
        });
        $('#transportation_survey2').hide();
      });

  });