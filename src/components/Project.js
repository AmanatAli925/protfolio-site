function Project(props){
	return(
		<div className="project-section">
			<div className="text-section">
				<div className="heading-section">
					<div className="custom-bullet">
						
					</div>
					<h2>
						{ props.heading }
					</h2>
				</div>
				<p>
					{ props.text }
				</p>
				
			</div>
			<div className="image-wrapper">
				<img src={props.img} alt="project image"></img>
			</div>
			<div className="project-link">
				<a href={props.projectLink}><span className="right-arrow">&#8594;&nbsp;</span> Go to Project</a>
			</div>
		</div>
	);
}


export default Project;