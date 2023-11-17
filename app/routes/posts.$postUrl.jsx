import { isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react'
import { getPost } from './../models/post.server'
import { formatearFecha }from './../utils/helpers'
import stlyes from './../styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stlyes
    }
  ]
}

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
  return <p className="error">Guitarra No Encotrada</p>;
}

export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post
}


export default function Posts() {
    const post = useLoaderData()
 
    const { titulo, contenido, imagen, publishedAt, } = post?.data[0]?.attributes

  return (
         <article className="contenido post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen de Blog ${titulo}`}></img>
   <hr/>
    <div className="contenido">
      <h3>{titulo}</h3>
      <p className="fecha">{formatearFecha(publishedAt)}</p>
      <p className="texto">{contenido}</p>
      
    </div>  
    </article>
  )
}
