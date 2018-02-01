  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  event.preventDefault()
    document.getElementById("myDropdown").classList.toggle("show");
    $(function(){
    $(".dropdown a").click(function(){
      $(".dropbtn").text($(this).text());
      $(".dropbtn").val($(this).text());
    });
  });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  event.preventDefault()
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Currency Ticker
var currencyURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC&tsyms=USD";

    $(function(){
        setInterval(oneSecondFunction, 1);
    });

    function oneSecondFunction() {
        var currencyURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC&tsyms=USD";

        $.ajax({
            url: currencyURL,
            method: "GET"
        })
        .then(function(response) {


            $("#BTC").text(response.BTC.USD);
            $("#ETH").text(response.ETH.USD);
            $("#XRP").text(response.XRP.USD);
            $("#BCH").text(response.BCH.USD);
            $("#LTC").text(response.LTC.USD);

        });
    };

//News

var newsURL = 'https://newsapi.org/v2/top-headlines?' +
          'q=cryptocurrency&' +
          'pageSize=10&' +
          'sortBy=popularity&' +
          'apiKey=974292774cf04f52908d323234d03c1f';


    $.ajax({
          url: newsURL,
          method: "GET"
        })
        .then(function(response) {

        for (var i = 0; i < response.articles.length; i++) {
        

        var title = $("<a>").text(response.articles[i].title);
        var p = $("<p>").text("Source: " + response.articles[i].source.name);
        
        $("#lead").append(title);
        $("#lead").append(p);

        title.attr("href", response.articles[i].url);
        title.attr("target", "_blank");
        //p.class("<br>")
        };
    });



//What if game


// var date = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");
     
 
// $("#date").on("click", function (event) {
  
//   event.preventDefault()

//    var dateEntered = $('#dateInput').val();

//       if (!moment(dateEntered,'MM-DD-YYYY').isValid()) {
//           console.log('Invalid Date');
//       } else {
//           console.log('Valid Date');
//       };

//   var investment = $("#investmentInput").val().trim();
//   var dateFrom = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");
//   var currency = $(".dropbtn").text();
//   var currencyArray = [];
//   var historicalURL = "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + currency + "&tsyms=USD&ts=" + dateFrom;
//   var currentURL = "https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD";

//   console.log(currency);

//     var curr = $(".dropbtn").text();
//     currencyArray.push(curr);

//   console.log(currencyArray);

//     $.ajax({
//           url: historicalURL,
//           method: "GET"
//         })
//         .then(function(response) {
          
//         console.log(response);
//         for (var i = 0; i < currencyArray.length; i++) {

//         var c = ($("#investmentInput").val() / response[currencyArray[i]].USD)
//         }
//         console.log(c);

//         $.ajax({
//               url: currentURL,
//               method: "GET"
//             })
//           .then(function(response2) {

//           console.log(response2);

//           var final = (c * response2.USD)
//           console.log(final);
//           });
//         });
//     });
// };



//guessing game (unfinished)

// var config = {
//     apiKey: "AIzaSyByTyY0xDLiY4IM3j3mpLYh_XUVyKnSPy0",
//     authDomain: "crypto-fun-1750c.firebaseapp.com",
//     databaseURL: "https://crypto-fun-1750c.firebaseio.com",
//     projectId: "crypto-fun-1750c",
//     storageBucket: "crypto-fun-1750c.appspot.com",
//     messagingSenderId: "899224804893"
//   };

// firebase.initializeApp(config);

// var database = firebase.database();

// function validateForm() {
//   var guessInput = document.BettingForm.Guess;

//   if (guessInput.value == "") {
//     $("#tracker").append("Please enter a valid number.");
//     guessInput.focus();
//     return false;
//   }
// }


// $("#date").on("click", function (event) {

//   var guess = $("#investmentInput").val().trim();
//   var currency = $(".dropbtn").text();
//   var currencyArray = [];
//   var currentURL = "https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD";
//   var now = moment().format("X");

//   validateForm();

//   event.preventDefault()

//   console.log(currency);

//   var curr = $(".dropbtn").text();
//   currencyArray.push(curr);

//   console.log(currencyArray);

//   $.ajax({
//         url: currentURL,
//         method: "GET"
//       })
//       .then(function(response) {
          
//       console.log(response);
//       for (var i = 0; i < currencyArray.length; i++) {

//       database.ref("current").push({
//         guess: guess,
//         price: response.USD,
//         time: now
//       });
//       };
//     });

//     $(function(){
//       setTimeout(timerFunction, 10000);
//     });

//     function timerFunction() {
//       now = moment().format("X");
//         $.ajax({
//           url: currentURL,
//           method: "GET"
//         })
//         .then(function(response) {
          
//           //console.log(response);
//           for (var i = 0; i < currencyArray.length; i++) {

//             database.ref("updated").push({
//               price2: response.USD,
//               time2: now
//             });
//           }
//         });
//     };
// });

// database.ref("current").on("child_added", function(snapshot) {
//       // storing the snapshot.val() in a variable for convenience
//       var sv = snapshot.val();

//       // Console.loging the last user's data
//       console.log(sv);

//       // // Change the HTML to reflect
//         $("#tracker").append("Guess: $" + sv.guess);
//         $("#tracker").append("Current: $" + sv.price);
//         $("#tracker").append(moment().format('MMMM Do YYYY, h:mm:ss a'));
// });

// database.ref("updated").on("child_added", function(snapshot) {
//       // storing the snapshot.val() in a variable for convenience
//         var sv = snapshot.val();

//       console.log(sv);
//       //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//       // // Change the HTML to reflect
//         $("#tracker").append("Current: $" + sv.price2);
//         $("#tracker").append(moment().format('MMMM Do YYYY, h:mm:ss a'));
// });