import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ExpectedValue from "./modules/ExpectedValue/ExpectedValue";
import Variance from "./modules/Variance/Variance";
import CovarianceCorrelation from "./modules/CovarianceCorrelation/CovarianceCorrelation";
import LinearCombinationsPortfolios from "./modules/LinearCombinationsPortfolios/LinearCombinationsPortfolios";
import OptimizationEfficientFrontier from "./modules/OptimizationEfficientFrontier/OptimizationEfficientFrontier";
import RandomWalks from "./modules/RandomWalks/RandomWalks";
import MonteCarlo from "./modules/MonteCarlo/MonteCarlo";
import ExponentialGrowth from "./modules/ExponentialGrowth/ExponentialGrowth";

function App() {
  return (
    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <          <    <    <    <    <    <    <    <    <    <    <    <    <    < Cor    <    <    <    <    <    <    <    <    <    <    <    <   "/li    <    <    <    <    <    <    <    <    <     &     <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    -f    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    < walks"    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <         <    <    <    <    <    <    <    <    <    <    <   pon    <    <    <    <    <    <    <    <    <    <    der>    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <  ect    <    <    <            <Route path="/variance" element={<Variance />} />
            <Route path="/covariance-correlation" element={<CovarianceCorrelation />} />
            <Route path="/linear-combinations-portfolios" element={<LinearCombinationsPortfolios />} />
            <Route path="/optimization-efficient-frontier" element={<OptimizationEfficientFrontier />} />
            <Route path="/random-walks" element={<RandomWalks />} />
            <Route path="/monte-carlo" element={<MonteCarlo />} />
            <Route path="/exponential-growth" element={<ExponentialGrowth />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
