import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import MessageIcon from "@mui/icons-material/Message";
import { ADD_COMMENT } from "../../utils/mutations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const CommentForm = ({ blogPostId }) => {
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(commentText);
    console.log(commentAuthor);
    try {
      await addComment({
        variables: {
          commentText,
          commentAuthor,
        },
      });

      setCommentText("");
      setCommentAuthor("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
    if (name === "commentAuthor" && value.length <= 30) {
      setCommentAuthor(value);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={"h5"} sx={{ pt: 2 }}>
        Care to comment?
      </Typography>
      <Typography sx={{ pt: 2 }} variant="span">
        Character Count: {characterCount}/280
        {error && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">Something went wrong</Alert>
          </Stack>
        )}
      </Typography>
      <Box
        component="form"
        className="comment-form"
        onSubmit={handleFormSubmit}
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextField
          type="text"
          name="commentAuthor"
          placeholder="Add name here"
          className="form-input"
          value={commentAuthor}
          onChange={handleChange}
        ></TextField>
        <TextField
          type="text"
          name="commentText"
          placeholder="Add your comment"
          className="form-input"
          value={commentText}
          onChange={handleChange}
        ></TextField>
        <Button sx={{ mt: 1 }} type="submit" variant="contained" size="medium">
          <MessageIcon color="#6B3567" size="lg" />
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm;
