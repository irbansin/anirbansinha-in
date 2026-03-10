import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // log to monitoring service when I create one
    console.error("ErrorBoundary caught:", error, info);
  }

  reset = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
              maxHeight: 200,
              overflow: "auto",
            }}
          >
            {String(this.state.error)}
          </pre>
          <div style={{ marginTop: 12 }}>
            <button onClick={this.reset} style={{ marginRight: 8 }}>
              Try again
            </button>
            <button onClick={() => window.location.reload()}>
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
