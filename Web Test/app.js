let selected = document.getElementById("select");
let parograph1 = document.getElementById("parograph1");
let parograph2 = document.getElementById("parograph2");
function chbackg() {
    if (select != "white") {
    document.body.style.background = document.getElementById('select').value;

    selected.style.backgroundColor = "rgb(37, 129, 138)";

    select.style.backgroundColor = "rgb(10, 10, 10,100)";
    select.style.color = "white";

    textarea.style.backgroundColor = "black";
    textarea.style.color = "white";

    result.style.backgroundColor = "black";
    result.style.color = "white";
    
    parograph1.style.backgroundColor = "rgb(37, 129, 138)";

    parograph2.style.backgroundColor = "rgb(37, 129, 138)";
} else {
    select.addEventListener("click", ()=>{
       location.reload();
    })
}
}






// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64

let text = "Destiny Encoder";
let encode_text = window.btoa(text);

let decode_text = window.atob(encode_text);

let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("selected");

textarea.addEventListener("input",()=>{
    make_result();
});
select.addEventListener("change",()=>{
    make_result();
});
function make_result(){
   if(select.value == "decode"){
    result.value = window.atob(textarea.value) ;
   }else{
    result.value = window.btoa(textarea.value) ;
   }
}