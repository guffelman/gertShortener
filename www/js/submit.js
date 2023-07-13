
function goFetch(){
const var1 = document.getElementById("webform");
const data1 = {origUrl: var1.value};
const url1 = "https://gert.link/api/short";          
$.ajax({ 
    
  url: url1, 
  type: "POST", 
  data: data1, 
  dataType: "json", 
  success: function (result) { 
      switch (result) { 
          case true: 
              processResponse(result); 
              break; 
          default: 
          console.log(result);
          //document.getElementById("json").textContent = JSON.stringify(result, undefined, 2);
          document.getElementById("generatebox").style.visibility = "visible";
          copy(result.shortUrl)
      } 
  }, 
  error: function (xhr, ajaxOptions, thrownError) { 
  alert(xhr.status); 
  alert(thrownError); 
  } 
}); 
}
