import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUserReservations } from '../../../../Redux/actions/user.actions';
import Purchase from './Purchase/Purchase';

function Section() {

const [ID, setID] = useState("");
const dispatch = useDispatch();
const data = useSelector((state) => state.userReservations.data);
  useEffect(() => {
    if (localStorage.getItem("loggedSpatifyApp")) {
      const storageData = JSON.parse(localStorage.getItem("loggedSpatifyApp"));
      if (storageData.userFound.roles[0].name === "user") {
        setID(storageData.userFound._id);
      }
    }
  }, []);

  useEffect(() => {
    if (ID) {
      dispatch(getUserReservations(ID));
    }
  }, [ID]);


  let purchases = [];
  if (data && data.length) {
    purchases = data;
  }

    return (
        <div>
            {purchases &&purchases.map((p,i) => <div>


                    
                    <Purchase 
                    />



            </div>)}

            
            
        </div>
    )
}

export default Section
