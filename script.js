document.getElementById("uploadForm").addEventListener("submit",function(e){

e.preventDefault();

let file=document.getElementById("document").files[0];

if(file){

document.getElementById("result").innerHTML=

"<h3>Document Uploaded Successfully ✅</h3>"+

"<p><b>File Name:</b> "+file.name+"</p>"+

"<p>Status: <span style='color:orange'>Pending Verification</span></p>";

}

});
