
function Footer(props){
    return(
        <div className="footer">
            {props.items.map(function(item){
                return(
                    <div className="footer-item">
                        <h3 className="footer-heading">{item.heading}</h3>
                        <ul className="footer-links-list">
                            {
                                item.links.map(function(lnk){
                                    return (
                                        <li className="footer-link"><a href={lnk.href}>{lnk.text}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Footer;