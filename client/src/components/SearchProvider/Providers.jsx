import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProviders,
  getServices,
  handleKeyword,
} from "../../Redux/actions/actions";
import ProviderCard from "./ProviderCard";
import PendingServices from "../HomeProviders/PendingServices/PendingServices";
import SearchBar from "../Searchbar/Searchbar";
import Select from "react-select";

function Providers({ data }) {
  const dispatch = useDispatch();

  const allProviders = useSelector((state) => state.allProviders);
  const services = useSelector((state) => state.services);

 
  const mayorAmenor = services.data?.sort(function (a, b) {
    if (b.price > a.price) {
      return 1;
    }
    if (b.price < a.price) {
      return -1;
    }
    return 0;
  });
  console.log(mayorAmenor)
  const keyword = useSelector((state) => state.keyword);

  const [state, setState] = useState("");
  const [select, setSelect] = useState("");
  console.log(keyword);
  console.log(state);

  const handleOrder = (e) => {
    console.log(e.label)
    setState(e.label);
   
    dispatch(handleKeyword(""));
  };
  const handleSelect = (e) => {
    console.log(e.label)
    setSelect(e.label);
  };

  useEffect(() => {
    dispatch(getAllProviders());
    dispatch(getServices());
  }, [dispatch, state]);

 
  const providersOservices = [
    { value: "Provedores", label: "Provedores" },
    { value: "Servicios", label: "Servicios" },
  ];
  const precios = [
    { value: "Mayor Precio", label: "Mayor Precio" },
    { value: "Menor Precio", label: "Menor Precio" },
  ];


  const serviceSearch = [
    <Select
      options={precios}
      placeholder="Ordenar por precio"
      onChange={(e) => handleSelect(e)}
    />,
    <SearchBar state={state} />,
  ];

  return (
    <div style={{marginTop:"1rem"}}>
      <Select
        options={providersOservices}
        placeholder="Filtrar por Proveedor o Servicio"
        onChange={(e) => handleOrder(e)}
      />
      {state === "Provedores" ? <SearchBar state={state} /> : null}
      {state === "Servicios" ? serviceSearch : null}
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
       
        {state === "Provedores" &&
          allProviders.data &&
          allProviders.data
            .filter((dato) => {
              console.log(keyword);
              return keyword?.length > 0
                ? dato.firstName?.concat(" ", dato.lastName) == keyword ||
                    dato.addresses[0]?.state == keyword ||
                    dato.addresses[0]?.city == keyword
                : dato;
            })
            .map((firstName, index) => (
              <>
                <ProviderCard data={firstName} key={index} />
              </>
            ))}

      
        {select == "Menor Precio"  || select == "Mayor Precio" ?
         select== "Menor Precio" ? mayorAmenor?.reverse().filter((dato) => {
          console.log(dato);
          return keyword?.length > 0
            ? dato.name?.indexOf(keyword) !== -1
            : dato;
        }).map((name, index) => (
          <>
            <PendingServices data={name} key={index} />
          </>
        )):
        mayorAmenor?.filter((dato) => {
          console.log(dato);
          return keyword?.length > 0
            ? dato.name?.indexOf(keyword) !== -1
            : dato;
        }).map((name, index) => (
          <>
            <PendingServices data={name} key={index} />
          </>
        ))
         : 
        state === "Servicios" &&
          services.data &&
          services.data
            .filter((dato) => {
              console.log(dato);
              return keyword?.length > 0
                ? dato.name?.indexOf(keyword) !== -1
                : dato;
            })
            .map((name, index) => (
              <>
                <PendingServices data={name} key={index} />
              </>
            ))}

      </div>
    </div>
  );
}

export default Providers;
