import React, { useEffect, useState } from "react" ;
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Post from "./components/Post";


const App = () => {
const [posts, setPosts] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
    console.log(data);
  };

  fetchData();
}, []);

  return (
       <Container>
            <h1>I'm a nav bar</h1>
        </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  background-color: black;
  display: flex;
  )`


export default App;
