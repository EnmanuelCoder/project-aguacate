

const AguacateApi = async (set) => {
  const url = "https://platzi-avo.vercel.app/api/avo";

  // const formatPrice = (price) => {
  //   const newPrice =  new window.Intl.NumberFormat("en-En", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(price)

  //   return newPrice;
  // };

    const response = await fetch(url);
    const datos = await response.json();
   
    set(datos.data);

};

export {
  AguacateApi
} 