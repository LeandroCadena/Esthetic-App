export const findService = (array, searchTerm) => {
  if (searchTerm === "") return array;
  return array.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const editAddress = (addresses, addressId, newAddress) => {
  let array = [...addresses];

  function prueba(a, i) {
    if (a._id === addressId) {
      array[i] = newAddress;
    }
  }
  array.map((a, i) => prueba(a, i));

  return array;
};
