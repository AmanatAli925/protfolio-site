import './App.css';
import NavBar from './components/Navbar.js'
import Project from './components/Project.js'
import {useState} from 'react'
import Resume from './components/Resume.js'
import Carousel from './components/Carousel.js';
import Footer from './components/Footer.js'

let footerItems=[
	{
		heading: "Projects",
		links:[{
			href: "https://themovieshouse.com",
			text: "Streaming Website"
		},
		{
			href: "https://themovieshouse.com",
			text: "Typing Tutor Website"
		},
		{
			href: "https://themovieshouse.com",
			text: "Social Meida Downlaoder Website"
		}]
	},
	{
		heading: "Resume",
		links: [
			{
				href: "/?page=resume",
				text: "Resume"
			}
		]
	}
]
let projectsData=[
	{
		heading:"Typing site",
		text: "This is typing website, that i created as an early project. It has user authentication and logedIn user's progress is saved. I learnt alot of frontend javascript and node js by this project.",
		img: "/images/typing.png",
		projectLink: "http://138.2.85.188:8090"
	},
	{
		heading:"Streaming site",
		text: "This is simple website, i created for learning purposes. I learnt alot about backened while making this website like HLS streaming and DASH streaming. Also worked with API alot. Content of site is scraped from another site using python.",
		img: "/images/streaming.png",
		projectLink: "https://themovieshouse.com"

		
	},
	{
		heading:"Social Media Downloader site",
		text: "It is site to download videos from youtube, facebook and tiktok. Its backened is in django. Its my first site in django.",
		img: "/images/social-media-downloader.png",
		projectLink: "https://downloader.themovieshouse.com" 	
	}
]

let projectItems=projectsData.map(function(projectData){
	return {
		innerHtml: <Project {...projectData}/>
	}
})
	
let paramString = document.location.search;
let queryString = new URLSearchParams(paramString);
let initialPage=queryString.get('page');
initialPage= initialPage || 'home';

function App() {
	const [state, setAppState]= useState({ currentPage: initialPage })
	return (
		<div className="App">
			<NavBar setAppState={setAppState} widthPercent={80}/>
			<div className="width-limit">
				{ 
					function(){
						if( state.currentPage=="home" )
							return (
								<div>
									<h1 style={{marginLeft: "2rem"}}>Projects</h1>
									<Carousel rotate={true} items={projectItems}/>
								</div>
							) 
						else if(state.currentPage=="resume")
							return(<Resume/>)
						
					}()
				}
				
			</div>
		<Footer items={footerItems}/>
		</div>
	);
}

export default App;

