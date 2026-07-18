function sizeSideRails(){
  var h = document.body.scrollHeight;
  document.querySelectorAll('.rail').forEach(function(rail){
    rail.style.height = h + 'px';
  });
}

window.addEventListener('load', sizeSideRails);
window.addEventListener('resize', sizeSideRails);