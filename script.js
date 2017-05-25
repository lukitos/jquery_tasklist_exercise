$(document).ready(function() {

  function addToList() {
    if ($('#itemInput').val().trim() === '') {
      alert('Please type a task into the input before attempting to add it to the list');
    } else {
      // $('#taskList').append('<li class="list-item">' + $('#itemInput').val() + '</li>');
      var newli = $('<li>').html($('#itemInput').val());
      newli.addClass('list-item');
      $('#taskList').append(newli);
      var btn = $('<input>', {
        type: 'button',
        value: 'Mark Complete',
        on: {
          click: function() {
            $(this).parent().addClass('complete');
            $(this).remove();
          }
        }
      });
      btn.appendTo($('#taskList li').last());
    }
    return;
  }

  function removeCompleted() {
    $('.complete').remove();
    return;
  }

  $('#appendButton').click(function() {
    addToList();
  });

  $('#removeComplete').click(function () {
    removeCompleted();
  });

  $('#taskList li').mouseover(function () {
    console.log('mouseover', $(this));
  });

});
