import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice, getServices, getProvider} from "../redux/actions/actions";

function Providers() {


    function orderByPrice() {
        const dispatch = useDispatch();
      
        useEffect(() => {
          dispatch(getProvider());
        }, [dispatch]);
      
        const found = useSelector((store) => store.all);
        let filters = ["ASC", "DESC"];
        let options = filters.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ));
      
        function handleChange(e) {
          console.log(e.target.value);
          if (e.target.value === "All") {
            dispatch(getServices());
          } else {
            dispatch(sortByPrice(e.target.value));
          }
        }
        return (
          <div>
            <select
              className="form-select"
              aria-label="Default select example"
              id="asc"
              onChange={handleChange}
              defaultValue="Sort ASC/DESC"
            >
              <option selected disabled>
              Filtro por precio
              </option>
              <option value="All">All</option>
              {options}
            </select>
          </div>
        );
      }
      
      export default orderByPrice;


    return (
        <div>


            
        </div>
    )
}

export default Providers
