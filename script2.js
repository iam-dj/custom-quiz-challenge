var keys = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6'];

// Loop through the keys and update the variables
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var saveButton = $('#hour-' + (i + 1) + ' .saveBtn');
  var textArea = $('#hour-' + (i + 1) + ' textarea');
  
  saveButton.on('click', function(event) {
    event.preventDefault();
    var text = textArea.val();
    localStorage.setItem(key, JSON.stringify(text));
    retrieved(key, textArea);
  });

  function retrieved(key, textArea) {
    var retrievedText = JSON.parse(localStorage.getItem(key));
    textArea.val(retrievedText);
  }
}