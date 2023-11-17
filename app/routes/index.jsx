
import {useLoaderData}from '@remix-run/react'
import {getGuitarras} from './../models/guitarras.server' 
import {getPosts} from './../models/post.server'
import {getCurso} from './../models/curso.server'
import ListadoGuitarras from '../components/listado-guitarras'
import Curso from '../components/curso'
import ListadoPost from '../components/listado-post'
import stlyesGuitarras from './../styles/guitarras.css'
import stylesPost from './../styles/blog.css'
import stylesCurso from './../styles/curso.css'

export function meta(){

}
export function links (){
  return[
    {
      rel: 'stylesheet',
      href: stlyesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPost
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]

}
export async function loader(){
 const [guitarras, posts , curso] = await Promise.all([
  getGuitarras(),
  getPosts(),
  getCurso()
 ])
    console.log(curso)
  return{
     guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {

  const {guitarras, posts ,curso}= useLoaderData();
  return (
   <>
        <main className='contenedor'>
          <ListadoGuitarras
            guitarras={guitarras}
          />
        </main>   
           <Curso
            curso={curso.attributes}
        />


        <section className='contenedor'>
          <ListadoPost
          posts={posts}
          />
        </section>  
   </>
  )
}

export default Index