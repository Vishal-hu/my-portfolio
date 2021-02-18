import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/post/:slug' component={SinglePost} />
				<Route exact path='/post' component={Post} />
				<Route path='/project' component={Project} />
				<Route component={Error} />
			</Switch>

			<Footer />
		</>
	);
}

export default App;
