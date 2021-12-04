import React, {useState} from "react"

const UserForm = ({ addComment }) => {
  const [comment, setComment] = useState('')
  const commentChange = (e) => {
    setComment(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(comment)
    setComment('')
  }

  return (
    <div className="container">
    <form onSubmit={onSubmit}>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Add Comment</label>
        <textarea onChange={commentChange}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default UserForm
