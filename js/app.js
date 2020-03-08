function $(value)
{
  return document.getElementById(value);
}

var items = document.getElementsByClassName('item');

function addEL()
{
  var newItem = items[items.length-1]
  var newItemText = newItem.getElementsByTagName('h5')[0];
  var newItemIcons = newItem.getElementsByTagName('a');
  newItemIcons[0].addEventListener('click', function(){
    newItemText.classList.toggle('completed');
  });
  newItemIcons[1].addEventListener('click', function(){
    newItem.parentNode.removeChild(newItem);
  });
}

$('addItem').addEventListener('click', function(){
  var newItem = $('newItem').value;
  if (newItem.length === 0) {}
  else {
    var newText = '<div class="item"><h5>' + newItem + '</h5><div class="icons"><a href="#" class"checkIcon"><i class="fas fa-check"></i></a><a href="#" class="trashIcon"><i class="fas fa-trash-alt"></i></a></div></div>';
    $('itemsContainer').insertAdjacentHTML('beforeend', newText);
    addEL();
    $('newItem').value = '';
  }
});
