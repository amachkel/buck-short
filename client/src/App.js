import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/css/colorPalette";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Events from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Store from "./pages/Store";
import BsAdmin from "./pages/BsAdmin";
import Post from "./pages/Post";
import Contact from "./pages/Contact";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:id" element={<Post />} />
            <Route path="/BsAdmin" element={<BsAdmin />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
