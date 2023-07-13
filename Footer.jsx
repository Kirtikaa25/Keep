import React from "react";
function Footer(){
    const date=new Date();
    let time=date.getFullYear();
    return <footer>
       <p> Copyright {time} </p>
    </footer>
   
}
export default Footer;