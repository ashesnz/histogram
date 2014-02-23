
function bar( obj, height, width ) {
    var innerDiv = document.createElement('div');
    innerDiv.className = 'bar';
    innerDiv.style.top = height + "%";
    innerDiv.style.width = width + "%";
    innerDiv.style.height = "19%";
    obj.appendChild( innerDiv );
    
    
}

function histogram( id, options ) {
    var obj = document.getElementById( id );
    obj.className = obj.className + " histogram"
    
    var yStep = 100 / options.data.length;
    var y = 0;
    for( var i=0;i<options.data.length;i++ ) {
        bar( obj, y, options.data[i] );
        y = y + yStep;
    }
    
}

