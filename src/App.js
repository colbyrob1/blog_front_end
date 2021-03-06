import React, { useEffect, useState } from "react" ;
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Post from "./components/Post";


const App = () => {
const [posts, setPosts] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "GET",
    });
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };

  fetchData();
}, []);

  return (
       <Container>
         <Navbar />
            <h1>I'm a nav bar</h1>
            <PostContainer>
              {posts.map((post, index) => {
                return <Post post={Post} />;
              })}
            </PostContainer>
        </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  background-color: black;
  display: flex;
  `;

  const PostContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-wrap: wrap;
  `;


export default App;
