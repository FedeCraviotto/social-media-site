import "./comments.scss";
import Comment from "./Comment/Comment";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

function Comments({ postId }) {
  const { currentUser } = useContext(AuthContext);
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments/add", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate AND REFRESH
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  async function handleClick(e) {
    e.preventDefault();
    mutation.mutate({description, postId});
    setDescription("");
  }

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="comments">
      <div className="write">
        <img src={process.env.REACT_APP_URL_FOR_ROOT + currentUser.avatar} alt={currentUser.name} />
        <input type="text" placeholder="Write a comment..." onChange={(e)=>{setDescription(e.target.value)}} value={description} />
        <button onClick={handleClick}>Send</button>
      </div>
      {data.map((comment, index) => (
        <Comment
          key={comment.userName + comment.commentId + index}
          comment={comment}
        />
      ))}
    </div>
  );
}
export default Comments;
