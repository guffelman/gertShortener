$( "#submitbtn" ).prop( "disabled", true );
const urlvalid = function validURL(str) {
    var pattern = new RegExp('^(http|https)://'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test((str1).value);
    }

$('#webform').on('input', function(){
    str1 = document.getElementById("webform")
    const results = urlvalid(str1)
    if(results == true){
        $( "#submitbtn" ).prop( "disabled", false ); 
    }
    else{
        $( "#submitbtn" ).prop( "disabled", true );
    }
}
)
