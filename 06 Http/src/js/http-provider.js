const jokerUrl = "https://api.chucknorris.io/jokes/random";
const userUrl = "https://reqres.in/api/users?page=2";

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokerUrl);

    if (!resp.ok) throw "No se pudo realizar la petición";

    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

const obtenerUser = async () => {
  const resp = await fetch(userUrl);
  const { data } = await resp.json();

  return data;
};
export { obtenerChiste, obtenerUser };
