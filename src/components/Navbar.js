

let nav_links=[
	{
		href:"/",
		text:"Home",
		pageName: "home"
	},
	{
		href:"/resume",
		text:"Resume",
		pageName: "resume"
	}/*,
	{
		href:"/cirtificates",
		text:"Cirtificates",
		pageName: "cirtificates"
	}*/
]

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function NavBar(props) { 
  return (
    <nav className="navbar">
		<div className="width-limit">
			<ul className="nav-items" >
				{
					nav_links.map(function(nav_link){
						return (
						<li className="nav-item"><a  
							onClick={
								function(event){
									window.history.pushState(
										'',
										capitalize(nav_link.pageName)+' page',
										'/?page='+nav_link.pageName
										);

									props.setAppState({currentPage: nav_link.pageName})
								} 
							}	
						>{nav_link.text}</a></li>)
					})
				}
			</ul>
		</div>
	</nav>
	
  );
}

export default NavBar;
