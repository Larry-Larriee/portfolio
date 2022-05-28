// When the user clicks a key, it sends the key to the server and runs the function below
document.onkeydown = function(key) {

    // key property (char name)
    if (key.key == "Enter") {
        window.alert("Secret Message: Hello :D");
    }
}

function setupCookie(cName, cValue, exDay){
    // Const variables cannot be reassigned
    const d = new Date();

    // set the time to expire in x days (starts in miliseconds)
    d.setTime(d.getTime() + (exDay*24*60*60*1000)); 

    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }