import {useState, useEffect} from 'react';
let orig_dims=[]
function carouselEffect(active, prev_active, items){
    let container=document.getElementById('carousel-items');

    Array.from(Array(items.length).keys())
        .forEach(function(index){
            let carouselItem='carousel-item-'+index;
            carouselItem= document.getElementById(carouselItem)
            let direction= active-prev_active;
            if(orig_dims.length-1<index)
                orig_dims[index]={
                    width: carouselItem.clientWidth,
                    height: carouselItem.clientHeight
                };
            carouselItem.style.minWidth=container.clientWidth+"px";
            let sw= container.scrollWidth;
            container.scrollLeft=active*sw/items.length;
        })
}

let prev_active=0;
function Carousel(props){
    const [active, setActive]= useState(0);
    useEffect(function(){
        carouselEffect(active, prev_active, props.items)
    })
    return(
        <div className="carousel">
            <div className="carousel-items" id="carousel-items">
            {
                props.items.map(function(item, item_index){
                    return(
                        <div className="carousel-item" 
                             id={"carousel-item-"+item_index}
                        >
                            {item.innerHtml}
                        </div>
                    );
                })
            }
            </div>
            <div className="carousel-controls">
                <div className="btn-container">
                <button className="prev-btn" onClick={function(){
                    let new_active= active-1;
                    prev_active=active;
                    if(new_active<0 ){
                        // if not rotate, simply end funciton
                        if(!props.rotate) return;
                        // otherwise rotate
                        new_active=props.items.length-1
                    }
                    setActive(new_active)
                }}>
                    &larr;
                </button>
                </div>
                <div className="carousel-btn-gap">
                </div>
                <div className="btn-container next-btn-container">
                <button className="next-btn" onClick={function(){
                    let new_active= active+1;
                    if(new_active>=props.items.length ){
                        // if not rotate, simply end funciton
                        if(!props.rotate) return;
                        // otherwise rotate
                        new_active=0;
                    }
                    setActive(new_active)
                }}>

                    &rarr;
                </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;