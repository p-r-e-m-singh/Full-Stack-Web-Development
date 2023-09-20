function verification() {
    var uid  = document.getElementById("uid");
    if (uid.value.length() <5 || uid.value.length() > 12) {
        alert("User ID must be b/w 5 to 12 char long");
        return false;
    }
    var pwd = document.getElementById("pswd");
    if (uid.value.length() <7 || uid.value.length() > 12) {
        alert("password must be b/w 7 to 12 char long");
        return false;
    }
    var name = document.getElementById("name");
    var letters = /^[A-Za-z]+$/;
    if (name.value.length() == 0 || name.value.match(letters) != true) {
        alert("Name must be character only");
        return false;
    }
    var country = document.getElementById("dropdown");
    if (country.value == "default") {
        alert("Please select a Country");
        return false;        
    }

    // var zip = document.getElementById("zip");
    // if(zip.value.isNaN()){
    //     alert("ZIP must be numeric");
    //     return false;
    // }

    var email = document.getElementById("mail");



    

}