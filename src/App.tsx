import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ExpectedValue from "./modules/ExpectedValue/ExpectedValue";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Sidebar Dashboard */}
        <nav
          style={{
            width: "260px",
            padding: "25px",
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Visual Mathematics of Finance
          </h2>

          <Link
            to="/"
            style={{
              padding: "15px",
              backgroundColor: "#dbeafe",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1e3a8a",
              fontWeight: "bold",
            }}
          >
            Expected Value
          </Link>

          <Link
            to="/variance"
            style={{
              padding: "15px",
              backgroundColor: "#dcfce7",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#166534",
              fontWeight: "bold",
            }}
          >
            Variance
          </Link>

          <Link
            to="/covariance"
            style={{
              padding: "15px",
              backgroundColor: "#fef3c7",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#92400e",
              fontWeight: "bold",
            }}
          >
            Covariance & Correlation
          </Link>

          <Link
            to="/linear-combinations"
            style={{
              padding: "15px",
              backgroundColor: "#fce7f3",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#9d174d",
              fontWeight: "bold",
            }}
          >
            Linear Combinations & Portfolios
          </Link>

          <Link
            to="/optimization"
            style={{
              padding: "15px",
              backgroundColor: "#ede9fe",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#5b21b6",
              fontWeight: "bold",
            }}
          >
            Optimization & Efficient Frontier
          </Link>

          <Link
            to="/random-walks"
            style={{
              padding: "15px",
              backgroundColor: "#cffafe",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#155e75",
              fontWeight: "bold",
            }}
          >
            Random Walks
          </Link>

          <Link
            to="/monte-carlo"
            style={{
              padding: "15px",
              backgroundColor: "#fee2e2",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#991b1b",
              fontWeight: "bold",
            }}
          >
            Monte Carlo
          </Link>

          <Link
            to="/exponential-growth"
            style={{
              padding: "15px",
              backgroundColor: "#e0e7ff",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#3730a3",
              fontWeight: "bold",
            }}
          >
            Exponential Growth
          </Link>
        </nav>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <Routes>
            <Route path="/" element={<ExpectedValue />} />

            <Route
              path="/variance"
              element={<h2>Variance coming soon</h2>}
            />

            <Route
              path="/covariance"
              element={<h2>Covariance & Correlation coming soon</h2>}
            />

            <Route
              path="/linear-combinations"
              element={<h2>Linear Combinations & Portfolios coming soon</h2>}
            />

            <Route
              path="/optimization"
              element={<h2>Optimization & Efficient Frontier coming soon</h2>}
            />

            <Route
              path="/random-walks"
              element={<h2>Random Walks coming soon</h2>}
            />

            <Route
              path="/monte-carlo"
              element={<h2>Monte Carlo coming soon</h2>}
            />

            <Route
              path="/exponential-growth"
              element={<h2>Exponential Growth coming soon</h2>}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;