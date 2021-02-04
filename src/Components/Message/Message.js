import React, {useEffect, useState} from 'react';
import './RenterPage.css';


const userId = '3';

  
export default function RenterPage(props) {


    const [renterMessages, setRenterMessages] = useState("");



    useEffect(() => {
      // fetch(`https://instarent-1st.herokuapp.com/api/users/${userId}`)
        fetch(`http://localhost:3000/api/messages?RenterId=${userId}`)
          .then(response => response.json())
          .then(result =>  {
            setRenterMessages(result)
            // console.log(result)
          })
          
      }, [renterMessages])



    

    return (
		<div className={""}>
			
	    </div>
	);
}

