// What if game

var date = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");
     
$("#date").on("click", function (event) {
  
  event.preventDefault()

   var dateEntered = $('#dateInput').val();

      if (!moment(dateEntered,'MM-DD-YYYY').isValid()) {
          console.log('Invalid Date');
      } else {
          console.log('Valid Date');
      };

  var investment = $("#investmentInput").val().trim();
  var dateFrom = moment($("#dateInput").val().trim(), "MM-DD-YYYY").format("X");
  var currency = $(".dropbtn").text();
  var currencyArray = [];
  var historicalURL = "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + currency + "&tsyms=USD&ts=" + dateFrom;
  var currentURL = "https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD";

  console.log(currency);

    var curr = $(".dropbtn").text();
    currencyArray.push(curr);

  console.log(currencyArray);

    $.ajax({
          url: historicalURL,
          method: "GET"
        })
        .then(function(response) {
          
        console.log(response);
        for (var i = 0; i < currencyArray.length; i++) {

        var c = ($("#investmentInput").val() / response[currencyArray[i]].USD)
        }
        console.log(c);

        $.ajax({
              url: currentURL,
              method: "GET"
            })
          .then(function(response2) {

          console.log(response2);

          var final = (c * response2.USD)
          console.log(final);
          });
        });
    });
};