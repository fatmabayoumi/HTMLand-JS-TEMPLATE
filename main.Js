var SiteName= document.getElementById("siteName");
var siteURL= document.getElementById("siteURL");

var datalist=[];
if (localStorage.getItem("listdata") !== null) {
    datalist = JSON.parse(localStorage.getItem("listdata"));
    displaydata();
}

function addsite() {
  if (validationname() && validationurl()) {
    var data = {
      name: SiteName.value,
      url: siteURL.value
    };
    datalist.push(data);
    console.log(datalist);
    localStorage.setItem("listdata", JSON.stringify(datalist));
    displaydata();
    cleardata();
  }
}


function displaydata(){
    var tabel="";
for(var i=0 ; i<datalist.length;i++){
    tabel+=`
     <tr>
              <td>${i+1}</td>
              <td>${datalist[i].name}</td>
              <td>
                <button onclick="visiturl(${i})" class="visit">
                  <i class="fa-solid fa-eye pe-2"></i>
                  Visit
                </button>
              </td>
              <td>
                <button onclick="Delete(${i})" class="delete">
                  <i class="fa-solid fa-trash-can pe-2"></i>
                  Delete
                </button>
              </td>
            </tr>
    `
};
document.getElementById("tableContent").innerHTML=tabel;

 
}
function cleardata(){
    SiteName.value=null,
    siteURL.value=null

}

function visiturl(index){
    var  datalist = JSON.parse(localStorage.getItem("listdata"));
    window.open(datalist[index].url,"_blank")

}
function Delete(index){

    datalist.splice(index, 1); 
    localStorage.setItem("listdata", JSON.stringify(datalist));
  displaydata()}


  function validationname(){
    var regexname=/^[a-zA-Z0-9 ]{3,}$/;
    if(regexname.test(SiteName.value)||null){
      
          document.getElementById("errorMsg").classList.add("is-valid");
          document.getElementById("errorMsg").classList.add("d-none");
                     document.getElementById("errorMsg").classList.remove("is-invalid");
 return true;

    }else{
          
        document.getElementById("errorMsg").classList.remove("d-none");
           document.getElementById("errorMsg").classList.add("is-invalid");
                     document.getElementById("errorMsg").classList.remove("is-valid");


 return false;


    }

  }


  function validationurl(){
  const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-z]{2,}(\S*)?$/;
  if (urlRegex.test(siteURL.value)) {
     
          document.getElementById("errorurl").classList.add("is-valid");
          document.getElementById("errorurl").classList.add("d-none");
                     document.getElementById("errorurl").classList.remove("is-invalid");
                     return true;


    }else{
         
        document.getElementById("errorurl").classList.remove("d-none");
           document.getElementById("errorurl").classList.add("is-invalid");
                     document.getElementById("errorurl").classList.remove("is-valid");

return false;

 

    }

  }