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
        var ans = "mininum temperature: " + innerresp.main.temp_min + "<br />" +
                  "maximun temperature: " + innerresp.main.temp_max + "<br />" +
                  "humidity: " + innerresp.main.humidity;
        $("#weather").html(ans);
      }
    });
  }
});
