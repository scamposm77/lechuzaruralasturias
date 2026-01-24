import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { language } = useLanguage();
  const location = useLocation();

  // Only show breadcrumbs on internal pages, not on home page
  const isHomePage = location.pathname === "/" && !location.hash;
  
  // Generate default breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: language === "es" ? "Inicio" : "Home",
        href: "/",
      },
    ];

    // Add page-specific breadcrumb
    if (path === "/como-llegar") {
      breadcrumbs.push({
        label: language === "es" ? "Cómo llegar" : "Directions",
      });
    } else if (path === "/que-hacer") {
      breadcrumbs.push({
        label: language === "es" ? "Qué hacer" : "Things to do",
      });
    } else if (path === "/blog") {
      breadcrumbs.push({
        label: "Blog",
      });
    } else if (path.startsWith("/blog/")) {
      breadcrumbs.push({
        label: "Blog",
        href: "/blog",
      });
      // Could add article title here if passed via items prop
    } else if (path === "/aviso-legal") {
      breadcrumbs.push({
        label: language === "es" ? "Aviso legal" : "Legal notice",
      });
    } else if (path === "/politica-privacidad") {
      breadcrumbs.push({
        label: language === "es" ? "Privacidad" : "Privacy",
      });
    } else if (path === "/politica-cookies") {
      breadcrumbs.push({
        label: "Cookies",
      });
    } else if (path === "/terminos-reserva") {
      breadcrumbs.push({
        label: language === "es" ? "Reservas" : "Booking",
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Don't show breadcrumbs on home page or if only one item
  if (isHomePage || breadcrumbItems.length <= 1) return null;

  return (
    <nav
      aria-label={language === "es" ? "Migas de pan" : "Breadcrumb"}
      className="bg-muted/50 border-b border-border py-3"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="container mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm font-body">
          {breadcrumbItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  itemProp="item"
                >
                  {index === 0 && <Home className="w-4 h-4" aria-hidden="true" />}
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-foreground font-medium" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;