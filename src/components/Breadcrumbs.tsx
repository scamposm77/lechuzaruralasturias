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

  // Generate default breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    const hash = location.hash;
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: language === "es" ? "Inicio" : "Home",
        href: "/",
      },
    ];

    // Add Cabranes as context
    breadcrumbs.push({
      label: "Cabranes",
      href: "/#ubicacion",
    });

    // Add section based on hash or path
    if (hash === "#habitaciones" || path.includes("habitaciones")) {
      breadcrumbs.push({
        label: language === "es" ? "Habitaciones" : "Rooms",
      });
    } else if (hash === "#espacios" || path.includes("espacios")) {
      breadcrumbs.push({
        label: language === "es" ? "Espacios" : "Spaces",
      });
    } else if (hash === "#servicios" || path.includes("servicios")) {
      breadcrumbs.push({
        label: language === "es" ? "Servicios" : "Services",
      });
    } else if (hash === "#opiniones" || path.includes("opiniones")) {
      breadcrumbs.push({
        label: language === "es" ? "Opiniones" : "Reviews",
      });
    } else if (hash === "#ubicacion") {
      breadcrumbs.push({
        label: language === "es" ? "Ubicación" : "Location",
      });
    } else if (hash === "#contacto") {
      breadcrumbs.push({
        label: language === "es" ? "Contacto" : "Contact",
      });
    } else if (path === "/como-llegar") {
      breadcrumbs.push({
        label: language === "es" ? "Cómo llegar" : "Directions",
      });
    } else if (path === "/blog" || path.startsWith("/blog/")) {
      breadcrumbs.push({
        label: "Blog",
      });
    }
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Don't show breadcrumbs if only home
  if (breadcrumbItems.length <= 1) return null;

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