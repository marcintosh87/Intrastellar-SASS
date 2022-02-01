import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsArticle() {
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
        </Container>
      )}
    </Box>
  );
}
