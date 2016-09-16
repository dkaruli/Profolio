app.controller('Nav', function ($scope,$location,$http,$window){
    // Must use a wrapper object, otherwise "activeItem" won't work
    $scope.states = {};
    $scope.states.activeItem = $location.path();
    $scope.items = [{
        id: '/',
        title: 'Home',
        address: "/"
    },
    {
        id: '/Projects',
        title: 'Projects',
        address: "/Projects"
    },
    {
        id: '/Contact',
        title: 'Contact Me',
        address: "/Contact"
    }];
    $scope.source = '/Resume.pdf';
    $scope.toggle = false;
/*
    $scope.download=function(){
    $http.get('resume.pdf', {responseType: "arraybuffer"}).success(function(data){       
    var arrayBufferView = new Uint8Array( data );
    var blob = new Blob( [ arrayBufferView ], { type: 'application/pdf'} );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    var img = document.querySelector( "#resume" );
    img.src = imageUrl;
    SaveToDisk(imageUrl,'resume.pdf');
    //  window.URL.revokeObjectURL(imageUrl);
             // code to download image here
        }).error(function(err, status){})
    }
function SaveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var event = document.createEvent('Event');
        event.initEvent('click', true, true);
        save.dispatchEvent(event);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
    }
    */
});
