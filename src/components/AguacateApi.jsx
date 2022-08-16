

const AguacateApi = async (set) => {
  const url = "https://platzi-avo.vercel.app/api/avo";


    const response = await fetch(url);
    const datos = await response.json();
   
    set(datos.data);

};

export {
  AguacateApi
} 