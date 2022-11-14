import {useState, useEffect} from 'react'
let transition_time=500
let heights=[]

function setHeights(total_items, active){
	[...Array(total_items).keys()].forEach(function(item_index){
		let sub_items='accordion-item-'+item_index+'-sub-items';
		let item_arrow= "down-arrow-item-"+item_index;
		sub_items= document.getElementById(sub_items)
		item_arrow= document.getElementById(item_arrow)
		
		// item height not already filled
		if(heights.length-1<item_index) 	
			heights.push(sub_items.clientHeight)
		
		if(active.indexOf(item_index)==-1){
			// item is not in active
			// user has closed this item 
			// ( could be already closed item or new one is being closed)
			sub_items.style.maxHeight= '0px';
			item_arrow.style.transform="rotate(0deg)"

		}else{
			// item is in active
			// user is trying to expand item ( cloud be new or already expaned)
			sub_items.style.maxHeight= heights[item_index]+'px';
			item_arrow.style.transform="rotate(180deg)"
		}
	})
}
function Accordion(props){
	
	const [ active, setActive]=useState([]);
	useEffect(()=>setHeights(props.items.length, active))
	return(
		<div className="accordion">
		{
			props.items.map(function(sub_items, item_index){
				return <div className="accordion-item">
					
					<div className="accordion-item-heading" onClick={
						function(event){
							// empty state if multipleActive is false
							// use same state if multipleActive is true
						
							let new_state=[];
							if(props.multipleActive)
								new_state=active.slice()	// slice of copy by value
							
							
							const pos = active.indexOf(item_index);
							
							if (pos > -1) { // if found
								new_state.splice(pos, 1); 
							}else{	// if not found
								new_state.push(item_index)
							}

							setActive(new_state)	
						}
					}>
						{ sub_items[0].innerHtml}
						
						<span class="accordion-arrow" id={"down-arrow-item-"+item_index}>&darr;</span>	
						
					</div>
					<div class="accordion-sub-items" id={'accordion-item-'+item_index+'-sub-items'}
					>
					{
						sub_items.slice(1).map(function(item){
							return <div >{item.innerHtml}</div>
						})
					}
					</div>
				</div>
			})
		}
		
		</div>
	)
}
export default Accordion;
