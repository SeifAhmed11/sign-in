var x = document.getElementById("myInput");
    function myFunction() {
        
        if (x.type === "password") {
            x.type = "text";
            $(".hand1").animate({
            "top":100
        });
        } else {
        x.type = "password";
            $(".hand1").animate({
            "top":35
            },'10');
        }
        

        $(".ee").animate({
            right: 18,
            top: 23
        }); 

    }


    function myFun() {
        
        if (x.type === "password") {
            $(".ha").animate({
            "top":35
        });
        } else {
            $(".hand1").animate({
            "top":100
            });
        }

        $(".ee").animate({
            right: 18,
            top: 23
        }); 
        
    }

        function myemail() {
            $(".ha").animate({
                "top":200
            }); 
        }





        $(".email").keydown(function(){
            $(".ee").animate({
                left:$(".email").val().length*0.8,
                top: 25
            }); 
        });
