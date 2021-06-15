 $( "body" ).addClass( "light" );
 
$( ".change" ).on("click", function() {
           if( $( "body" ).hasClass( "dark" )) {
               $( "body" ).removeClass( "dark" );
               $( "body" ).addClass( "light" );
               $( ".arti" ).removeClass( "semi-dark" );
               $( ".articleHeader" ).removeClass( "ter-dark" );
               // $( ".change" ).append( "<i class='fas fa-cloud-sun'></i>" );
           } else {
             $( "body" ).addClass( "dark" );
             $( "article" ).addClass( "semi-dark" );
               $( ".articleHeader" ).addClass( "ter-dark" );
               // $( ".change" ).append( "<i class='fas fa-cloud-moon'></i>" );
           }
       });
