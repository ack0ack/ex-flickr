var exercise = {};

// Adds markers to the map and into array
exercise.addMarkers = function(data){
    data.photos.photo.forEach(function(photo){
        exercise.addMarker(photo);
    });
};

exercise.addMarker = function(photo){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(photo.latitude,photo.longitude),
        icon: {
            path:google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 0.5,
            scale:7,
            strokeWeight:1
        },
        map: map,
        title: photo.title
    });
    markers.push(marker);
};

exercise.addPhotos = function(data){
    var html = exercise.buildHtmlForImages(data);
    document.getElementById('images').innerHTML = html;
};

exercise.buildHtmlForImages = function(data){
    console.log(data);
    console.log(data.photos.photo[0].url_s);


   var imageTags = ""; // set it to an empty string right away 

    data.photos.photo.forEach(function(abc){ //we're building the callback function definition below
        imageTags += '<img src = "' + abc.url_s + '">'; //+= takes the first image tag and adds the next one 
    });

    console.log(imageTags);

    Return imageTags;

 /*  Var urls = data.photos.photo.map(getURL)

   function getURL(url_s){
       return (url_s);
   }

    urls.toString();

    // ------------------------------------------------
    //   YOUR CODE
    //     use forEach to construct html to
    //     display every image in flickr data
    // ------------------------------------------------
};