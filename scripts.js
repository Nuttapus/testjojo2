var idLength,postLength,telHomeLength,telLength,mobileLength;
var checkEmail = false;
function isNumber1(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function isNumber2(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function isNumber3(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function isNumber4(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function isNumber5(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function reloadPage(){
    window.location.reload();
}
function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    checkEmail = re.test(String(email).toLowerCase());
}
function submit(){
    var check1 = true
    var check2= true
    var check3= true
    var check4= true
    var check5= true
    var check6= true
    var prefixThai,nickname,city,homeNumber,name,birthday,
    aumpher,road,lastname,tumbon;

    idLength = document.getElementById('id').value;
    postLength =  document.getElementById('post').value;
    telHomeLength =  document.getElementById('telHome').value;
    telLength =  document.getElementById('tel').value;
    mobileLength =  document.getElementById('mobile').value;

    prefixThai =  document.getElementById('prefixThai').value; 
    nickname =  document.getElementById('nickname').value; 
    city =  document.getElementById('city').value; 
    homeNumber =  document.getElementById('homeNumber').value; 
    name =  document.getElementById('name').value; 
    birthday =  document.getElementById('datepickerfrom').value; 
    aumpher =  document.getElementById('aumpher').value; 
    road =  document.getElementById('road').value; 
    lastname =  document.getElementById('lastname').value; 
    tumbon =  document.getElementById('tumbon').value; 

    console.log(prefixThai)
    console.log(nickname)
    console.log(city)
    console.log(homeNumber)
    console.log(name)
    console.log(birthday)
    console.log(aumpher)
    console.log(road)
    console.log(lastname)
    console.log(tumbon)
    validateEmail()
    if(checkEmail == false){
        alert("กรุณาใส่ email ให้ถูกต้อง")
        check1=false;
    }
    if(idLength.length!=13){
        alert("กรุณาใส่เลขบัตรประจำตัวประชาชนให้ถูกต้อง")
        check2=false;
    }
    if(postLength.length!=5){
        alert("กรุณาใส่รหัสไปรษณีย์ให้ถูกต้อง")
        check3=false;
    }
    if(telHomeLength.length!=9){
        alert("กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง")
        check4=false;
    }
    if(telLength.length!=9){
        alert("กรุณาใส่เบอร์โทรสารให้ถูกต้อง")
        check5=false;
    }
    if(mobileLength.length!=10){
        alert("กรุณาใส่เบอร์โทรศัพท์มือถือให้ถูกต้อง")
        check6=false;
    }
    if(check1 == true && check2 == true && check3 == true && check4 ==true &&
        check5 == true && check6 == true){
            alert("ข้อมูลถูกต้อง")
            localStorage.setItem("prefixThai", prefixThai);
            localStorage.setItem("nickname", nickname);
            localStorage.setItem("city", city);
            localStorage.setItem("homeNumber", homeNumber);
            localStorage.setItem("name", name);
            localStorage.setItem("birthday", birthday);
            localStorage.setItem("aumpher", aumpher);
            localStorage.setItem("road", road);
            localStorage.setItem("lastname", lastname);
            localStorage.setItem("tumbon", tumbon);
            localStorage.setItem("id", idLength);
            localStorage.setItem("post", postLength);
            localStorage.setItem("telHome", telHomeLength);
            localStorage.setItem("tel", telLength);
            localStorage.setItem("mobile", mobileLength);
            window.location.href="./Report.html";

    }
    
}
