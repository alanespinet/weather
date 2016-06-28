$.ajax({
  url: "http://ipinfo.io/json",
  success: function(resp, txt, xhr){
    $("#location").html(resp.city + ", " + resp.region + ", " + resp.country);
    // d82584a521ae673b1d3d837008607159       from openweathermap.org
    // api.openweathermap.org/data/2.5/weather?zip=94040,us
    // appid

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + resp.postal + ",us&appid=d82584a521ae673b1d3d837008607159",
      success: function(innerresp, innertxt, innerxhr){
        var ans = "The Mininum Temperature is: <span class='value'>" + innerresp.main.temp_min + "</span><br />" +
                  "The Maximun Temperature is: <span class='value'>" + innerresp.main.temp_max + "</span><br />" +
                  "The Humidity average is: <span class='value'>" + innerresp.main.humidity + "%</span>";
        $("#weather").html(ans);
      }
    });
  }
});
