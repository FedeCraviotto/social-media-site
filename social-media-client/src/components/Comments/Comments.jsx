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

  // useQuery(queryKey, queryFn)
  const { isLoading, error, data } = useQuery(["comments", postId], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments/add", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate AND REFRESH
        // Osea el punto es que, como el usuario realizo cierto cambio, vas a querer indicarle al queryClient
        // Que cierta quert (en este caso 'comments') realizada con anterioridad ya quedo desactualizada,
        // y que -por lo tanto- va a tener que hacerla de nuevo (refresh).
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  async function handleClick(e) {
    e.preventDefault();
    mutation.mutate({description, postId});
    setDescription("");
  }


  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.avatar?.includes('http', 0)? currentUser.avatar : process.env.REACT_APP_URL_FOR_ROOT+ currentUser.avatar} alt={currentUser.name} />
        <input type="text" placeholder="Write a comment..." onChange={(e)=>{setDescription(e.target.value)}} value={description} />
        <button onClick={handleClick}>Send</button>
      </div>
      {data.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}
export default Comments;
