import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clap from "./images/blue-clap.png";
import comment from "./images/comment-icon.png";
import NewsCard from "./NewsCard";

export default function NewsArticle({ newsPost }) {
  const [article, setArticle] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/news_posts/${params.id}`)
      .then((res) => res.json())
      .then(setArticle);
  }, []);

  const styles = {
    paperContainer: {
      height: "400px",
      width: "100%",
      backgroundImage: `url(${article && article.image_post})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "0 auto",
    },
  };
  return (
    <Box>
      {article && (
        <Container>
          <section style={styles.paperContainer}></section>
          <Typography variant="h4" align="left" mt={2} color={"#5F5F5F"}>
            {article.title}
          </Typography>
          <Typography color={"#9B9B9B"} variant="subtitle2" align="left" mt={2}>
            {article.date}
          </Typography>
          <Typography variant="body1" align="left" color={"#9B9B9B"} mt={2}>
            {article.content}
          </Typography>
          {article.news_comments && (
            <Box mt={3} display={"flex"} alignItems={"flex-start"}>
              <Button>
                <img src={clap} alt="clap-icon" style={{ width: 20 }} />
                {article.claps}
              </Button>
              <Button>
                <img
                  src={comment}
                  alt="clap-icon"
                  style={{ width: 20, marginRight: 10 }}
                />
                {article.news_comments.length === 1
                  ? ` ${article.news_comments.length} comment `
                  : ` ${article.news_comments.length} comments `}
              </Button>
            </Box>
          )}
        </Container>
      )}
      <main>
        <Grid container>
          <Grid item xs={5}>
            <Typography
              align="left"
              variant="h3"
              ml={9}
              mt={4}
              color="secondary"
            >
              RECENT POSTS
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>

          <Grid item xs={3} mt={4.5}></Grid>
        </Grid>
        <Divider variant="inset" />
      </main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pb: 7,
          ml: 7,
        }}
      >
        {newsPost &&
          newsPost
            .slice(0, 4)
            .map((post) => (
              <NewsCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                claps={post.claps}
                image={post.image_post}
                date={post.date}
              />
            ))}
      </Box>
    </Box>
  );
}
