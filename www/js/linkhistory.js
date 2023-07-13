$.ajax({
    url: 'linkhistory',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + '<a href =' + '"' + data[i].origUrl+'"' +'>' + data[i].origUrl + '</a>' +  '</td><td>' + '<a href =' + '"' + data[i].shortUrl + '"' + '>' + data[i].shortUrl + '</a>' + '</td><td>');
            $('#listview').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});