var create = function(x,y,color){
    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '50px';    
    div.style.height = '50px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    return div;        
};
var randomColor = function (){    
    
    // random color
    let r = Math.floor(255*(Math.random()));
    let g = Math.floor(255*(Math.random()));
    let b = Math.floor(255*(Math.random()));        
    let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color;
}
var color = function(div, color){
    div.style.background = color; 
 };