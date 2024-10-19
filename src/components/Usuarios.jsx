import { useFetch } from "../hooks/useFetch"

export const Usuarios = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <>
      <h1>Lista de Usuarios</h1>
      {
        isLoading
          ? <h4>Cargando...</h4>
          : errors
            ? <p>Ha Ocurrido un Error: {errors}</p>
            :
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">website</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
      }
    </>
  )
}
