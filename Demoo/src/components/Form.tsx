import { useState } from "react";

export const Form = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (comment.length <= 0) {
      alert("Proper feedback is required!");
      return;
    } else {
      alert("Feedback received!");
      setScore(10);
      setComment("");
    }
  };
  return (
    <div className="container w-25">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>
            <h2>Feedback form</h2>
          </legend>
          <div className="form-group">
            <label htmlFor="rating">Rating : {score} ⭐️</label>
            <input
              id="rating"
              className="form-range"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};
