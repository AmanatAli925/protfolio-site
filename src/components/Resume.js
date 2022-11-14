
import Accordion from './Accordion.js'
import PercentageBar from './PercentageBar';

let placeholers=[
	['\\[Job Title\\]', 'Software Engineering'],
	['\\[Task\\]', 'Web Development'],
	['\\[Skill\\]', 'Html, CSS, Javascript, NodeJs and ReactJs'],
	['\\[Industry\\]', 'Computer Science field.']
] 
let resume_text=`Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level [Job Title] position. Ready to help team achieve company goals. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. Enthusiastic [Job Title] eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of [Task] and training in [Skill]. Motivated to learn, grow and excel in [Industry].`
placeholers.forEach(function(ph){
	console.log(ph[0])
	let regex = new RegExp(ph[0], 'g', 'i' );
	resume_text=resume_text.replace(regex, ph[1])
})

let sidebar_items=[
	[
		{
			innerHtml: <h3>Contact</h3>
		},
		{
			innerHtml: 
			<div>
				<strong>Phone</strong><br/>
				<p>03157601264</p>
			</div>
		},
		{
			innerHtml: 
			<div>
				<strong>Email</strong><br/>
				<p>mani.bhood1234@gmail.com</p>
			</div>
		}
	],[
		{
			innerHtml: <h3 >Skill</h3>
		},
		{
			innerHtml: 
			<div >
				<h4>Html</h4>
				<PercentageBar
					backgroundColor="rgb(0, 49, 92)" 
					foregroundColor="white"
					percentage={70}
				/>
			</div>
		},
		{
			innerHtml: 
			<div>
				<h4>CSS</h4>
				<PercentageBar
					backgroundColor="rgb(0, 49, 92)" 
					foregroundColor="white"
					percentage={80}
				/>
			</div>
		},
		{
			innerHtml: 
			<div>
				<h4>Javascript</h4>
				<PercentageBar
					backgroundColor="rgb(0, 49, 92)" 
					foregroundColor="white"
					percentage={90}
				/>
			</div>
		},
		{
			innerHtml: 
			<div>
				<h4>React Js</h4>
				<PercentageBar
					backgroundColor="rgb(0, 49, 92)" 
					foregroundColor="white"
					percentage={75}
				/>
			</div> 
		},
		{
			innerHtml: 
			<div>
				<h4>Node Js</h4>
				<PercentageBar
					backgroundColor="rgb(0, 49, 92)" 
					foregroundColor="white"
					percentage={80}
				/>
			</div>
		}


	]
]

function Resume(props){
	
	return (
		<div className="resume">
			<div className="sidebar">
				<div className="name-section">
					<h1>Amanat Ali</h1>
					<p>Software Engineer</p>
				</div>
				<Accordion items={sidebar_items}  />
			</div>

			<div className="main">
				<div className="experience">
					<p>
						{[resume_text]}
					</p>
					<hr></hr>
					<h3>Work History</h3>
					<hr></hr>
					<div className="job-item">
						<p>Current</p>
					</div>
				</div>
				<div className="education">
					<hr></hr>
					<h3>Education</h3>
					<hr></hr>
					<div className="education-item">
						<p className="education-time">
							2024-05-07 <br/>
							<span style={{color: "gray"}}>(Near Future)</span>
						</p>
						<div className="education-details">
							<h4>Bachelor of Science: Software engineering</h4>
							<p>
								INTERNATIONAL ISLAMIC UNIVERSITY- ISLAMABAD, PAKISTAN
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}


export default Resume