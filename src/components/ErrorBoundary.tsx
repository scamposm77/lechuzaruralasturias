import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

/**
 * Evita pantallas en blanco en producción: si algo rompe el render,
 * mostramos un fallback visible y dejamos el error en consola.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // console.error NO se elimina en producción (solo console.log/info)
    console.error("[ErrorBoundary] Render failed:", error);
    console.error("[ErrorBoundary] Component stack:", info.componentStack);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full bg-card border border-border rounded-xl p-6 shadow-lg">
          <h1 className="font-display text-2xl md:text-3xl mb-2">
            {"Ha ocurrido un error al cargar la página"}
          </h1>
          <p className="font-body text-muted-foreground mb-4">
            {"Prueba a recargar. Si el problema persiste, hay un error de JavaScript que está impidiendo el renderizado."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              {"Recargar"}
            </button>
            <a
              href="mailto:info@lechuzaruralasturias.es"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 font-body text-sm font-semibold hover:bg-muted transition-colors"
            >
              {"Contactar"}
            </a>
          </div>

          {this.state.error?.message ? (
            <details className="mt-5">
              <summary className="font-body text-sm cursor-pointer text-primary">
                {"Ver detalles técnicos"}
              </summary>
              <pre className="mt-3 whitespace-pre-wrap break-words text-xs bg-muted/40 border border-border rounded-md p-3">
                {this.state.error.message}
              </pre>
            </details>
          ) : null}
        </div>
      </div>
    );
  }
}
