var canvas = document.getElementById('example2');
var context = canvas.getContext('2d');
context.fillStyle = '#ff7700';
for(var x = 0; x < canvas.width; x += 25){
  for(var y = 0; y < canvas.height; y += 25){
    context.fillRect(x, y, 20, 20);
  }
}