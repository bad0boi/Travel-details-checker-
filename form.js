//     // JS x Jquery x AJAX x JSON x USER FORM  
            
// //     $(document).ready(function () { 



//   //SMOOTH SCROLL 

//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
     
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });



//      $("#IDField").on("click", function () {
//             $.getJSON("data.json", function(data){  
//             $.each(data.customers, function(i, field){
//                 var userInput = Number($("#ID").val());
//               // alert (field.ID);
//                     if(userInput == field.ID){
//             $("#firstNameField").val(field.firstName);
//             $("#lastNameField").val(field.lastName);
//             $("#genderField").val(field.gender);
//             $("#titleField").val(field.title);
//             $("#addressField").val(field.address);
//             $("#townField").val(field.town);
//             $("#bookingdateField").val(field.bookingdate);
//             $("#departureField").val(field.departuredate);
//             $("#locationField").val(field.location);
//             $("#cityField").val(field.city);
//             $("#emailField").val(field.email);
//             $("#creditcardField").val(field.creditcard);
//             alert ('Thank you for booking with us');
            
             

            
//         } 
         
        
        
        
         

     
       

//     });
//   });
// });

// //Hiding customer form onload then slide animation toggle show/hide 


//     $("#details").hide();  
//     $("#header_ID").click (function() { 
//       $("#details").slideToggle("slow");
//     });

//     //UPDATING users data 

//     $("#updateField").click (function() { 
//       alert ('Your details has been successfully updated!'); 
//         $("#details").fadeOut(2000);
//     });
  



// //   // TOOLTIP 

// //      //     $(function () {
// //     //  $('[data-toggle="tooltip"]').tooltip()
// //     // })
// //              /* var number = $("#ID").val();
// //                 if (number.length == 0) { 

// //                   $("ID").tooltip("show");
// //                 }
// // */
                
            
// //Toggle jQuery 
 
//   $(".studentquotes").hide(function(){
//     $("#SQButton").click(function() { 
//       $(".studentquotes").toggle(2000); //2000 = 2secs of transition 
//     });
//   });

    

//     $(".allinclusive").hide(function(){
//       $("#AIButton").click(function() { 
//         $(".allinclusive").toggle(2000); //2000 = 2secs of transition
//       });
//     });



 
// //   //LOADING NEW CONTENT PAGE on AJAX x JSON x UPDATE Form Details 

// //   //$("#updateField").load("newcontent.html");


// // LocalStorage x Cookies

// if(localStorage.getItem("termsandconditions") == "true"){
//   $("#termsandconditions").hide();
// }

// $("#acceptBtn").on("click", function(){

//   localStorage.setItem("termsandconditions", "true");
//   $("#termsandconditions").fadeOut(); 

// });

// //JS Validation 

// $("#details").validate( { 
//     rules: { 
//       ID: { 
//         required: true, 
//       }
//     }
// })



    




     
// });

//MINIFIED JS BELOW --------------------------------

$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}}),$("#IDField").on("click",function(){$.getJSON("data.json",function(e){$.each(e.customers,function(e,t){Number($("#ID").val())==t.ID&&($("#firstNameField").val(t.firstName),$("#lastNameField").val(t.lastName),$("#genderField").val(t.gender),$("#titleField").val(t.title),$("#addressField").val(t.address),$("#townField").val(t.town),$("#bookingdateField").val(t.bookingdate),$("#departureField").val(t.departuredate),$("#locationField").val(t.location),$("#cityField").val(t.city),$("#emailField").val(t.email),$("#creditcardField").val(t.creditcard),alert("Thank you for booking with us"))})})}),$("#details").hide(),$("#header_ID").click(function(){$("#details").slideToggle("slow")}),$("#updateField").click(function(){alert("Your details has been successfully updated!"),$("#details").fadeOut(2e3)}),$(".studentquotes").hide(function(){$("#SQButton").click(function(){$(".studentquotes").toggle(2e3)})}),$(".allinclusive").hide(function(){$("#AIButton").click(function(){$(".allinclusive").toggle(2e3)})}),"true"==localStorage.getItem("termsandconditions")&&$("#termsandconditions").hide(),$("#acceptBtn").on("click",function(){localStorage.setItem("termsandconditions","true"),$("#termsandconditions").fadeOut()}),$("#details").validate({rules:{ID:{required:!0}}})});

