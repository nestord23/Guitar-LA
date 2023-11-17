import { isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react'
import{ getGuitarra} from './../models/guitarras.server'
import styles from './../styles/guitarras.css'


/** Manejo de Erorres */
export function ErrorBoundary(){
  const error = useRouteError();
  if(isRouteErrorResponse(error)){
    return (
      <p className="error">
        {error.status}{error.statusText}
      </p>
    );
  }
  return <p className="error">Error Desconocido</p>;
}
export function meta({data}){
  if(!data){
    return[
      {title:`GuitarLA - No encotrada`},
      {
        name:'description',
        content:`Guitarras, Ventas De Guitarras, Guitarra No Encontradas`,
      },
    ];
  }
  return[
    {title:`GuitarLA - ${data.nombre}`},
    {
        name:'description',
        content:`Guitarras, Ventas De Guitarras,Guitarras ${data.nombre}`,
    },
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}){
    const{guitarrasUrl} = params
    const guitarra = await getGuitarra(guitarrasUrl)
    return guitarra
}
function Guitarra() {

    const guitarra = useLoaderData()
    const{nombre , descripcion , imagen , precio } = guitarra.data[0].attributes

  return (
    <div className='guitarra'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </div> 
  )
}

export default Guitarra