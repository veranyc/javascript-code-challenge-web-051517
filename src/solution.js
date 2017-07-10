$(document).ready(function(){
  addComment()
  filterComments()

})

function addComment() {
  $('#note-form').on('submit' function(){
    event.preventDefault()
    let comment = $(this).val()
    $('#comments-list').append(`<li>${comment}</li>`)
  })
}


function filterComments() {
  $('#search-form').on('submit' function(){
    event.preventDefault()
    let searchterm = $(this).val()
    $(#comments-list).filter(searchterm)
  })
}
