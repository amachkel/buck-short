import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const BlogList = ({
  blogPosts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!blogPosts.length) {
    return <h3>Your blog posts will display here.</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {blogPosts &&
        blogPosts.map((blogPost) => (
          <div key={blogPost._id}>
            <Card
              sx={{
                p: 2,
                mt: 3,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <CardContent>
                {" "}
                {showUsername ? (
                  <Typography variant="h4">
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "secondary.extraLight",
                        borderRadius: "3px",
                      }}
                    >
                      <Link
                        underline="hover"
                        href={`/blogPosts/${blogPost._id}`}
                      >
                        {blogPost.blogTitle} <br />
                      </Link>
                      <Typography>{blogPost.blogPostText}</Typography>
                    </Box>
                  </Typography>
                ) : (
                  <>
                    <Typography sx={{ fontSize: "1rem" }}>
                      You created this on {blogPost.createdAt}
                    </Typography>
                  </>
                )}
                <Typography sx={{ color: "secondary.main" }}>
                  Posted by {blogPost.postAuthor}
                </Typography>
                <Button variant="contained">
                  <Link
                    underline="none"
                    href={`/blogPosts/${blogPost._id}`}
                    sx={{ color: "black" }}
                  >
                    <FontAwesomeIcon
                      icon={faCommentAlt}
                      color="#6B3567"
                      size="lg"
                    />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
