import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada | La Cabaña de la Lechuza</title>
        <meta name="description" content="La página que buscas no existe. Vuelve a la página principal de La Cabaña de la Lechuza, casa rural en Asturias." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.lechuzaruralasturias.es/" />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-muted px-4">
        <div className="text-center max-w-md">
          <h1 className="mb-2 text-8xl font-display text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-display text-foreground">Página no encontrada</h2>
          <p className="mb-6 text-muted-foreground font-body">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Puede que el enlace esté desactualizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Home size={18} />
              Ir al inicio
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-sm font-body text-sm font-semibold hover:bg-muted transition-colors"
            >
              <ArrowLeft size={18} />
              Volver atrás
            </button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground font-body">
            ¿Buscabas información sobre nuestra casa rural? Visita{" "}
            <Link to="/" className="text-primary hover:underline">
              lechuzaruralasturias.es
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
