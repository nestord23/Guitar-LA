import {Link , useLocation} from '@remix-run/react'

function Navegacion() {
    const location = useLocation()
  return (
 <nav className="navegacion">
            <Link
                to="/index"
                className={location.pathname === '/' ? 'active':''}>
                    Inicio</Link>
            <Link
            to="/nosotros"
            className={location.pathname === '/nosotros' ? 'active':''}>
                Nosostros</Link>
            <Link
            to="/tienda"
            className={location.pathname === '/tienda' ? 'active':''}>
                Tienda</Link>
             <Link
            to="/blog"
            className={location.pathname === '/blog' ? 'active':''}>
                Blog</Link> 
        </nav>
  )
}

export default Navegacion