function first(){
        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var myJson = JSON.stringify(myObj);
      console.log(myObj);
      document.getElementById("demo").innerHTML = myObj;
      var tesObj = eval("(" + this.responseText + ")");
      console.log(tesObj);
      var jsonArray = JSON.parse(this.responseText);
      var select = document.getElementById("id02");
      var option;
      var optionn;
      optionn = document.createElement('option');
      optionn.text="--choose--";
       select.add(optionn);
            for (var i = 0; i < jsonArray.length; i++) {
              option = document.createElement('option');
              option.text = jsonArray[i]["username"];
              
            }
            select.add(option);
      //w3DisplayData("id01", tesObj);
    }
  };
  xhttp.open("GET", "http://samimi.web.id/pulsa/index.php?result=3", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //xhttp.send("fname=Henry&lname=Ford");
  xhttp.send();
}