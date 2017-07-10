//******NOT a full refactor - playing around....please ignore********

class Comment{
  constructor(text) {
    this.text = text
  } //end constructor

  render() {
    return (
      `<li>${text}</li>`
    )
  } //end render

} //end class Comment


class CommentList {
  constructor(comments) {
    this.commentListComments = [new Comment('test')]
  } //end constructor

  renderCommentList() {
    return this.commentListComments.map(comment => render())

  } //end render

  addComment(text) {
    let comment = newComment(text)
    this.commentListComments.push(comment)

  } //end addComment

} //end class CommentList
