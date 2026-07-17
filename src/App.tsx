import ProbabilityChart from "./components/ProbabilityChart";
import FinanceExplanation from "./components/FinanceExplanation";
import { useState } from "react";

function App() {
  const [probability, setProbability] = useState(0.6);
  const [reward, setReward] = useState(100);
  const [loss, setLoss] = useState(50);

  const expectedValue =
    probability * reward + (1 - probability) * -loss;

  return (
    <div>
      <h1>Expected Value Visualization</h1>

      <h2>Probability of Winning</h2>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={probability}
        onChange={(e) => setProbability(Number(e.target.value))}
      />
      <p>{Math.round(probability * 100)}%</p>

      <h2>Reward</h2>
      <input
        type="range"
        min="0"
        max="500"
        value={reward}
        onChange={(e) => setReward(Number(e.target.value))}
      />
      <p>${reward}</p>

      <h2>Loss</h2>
      <input
        type="range"
        min="0"
        max="500"
        value={loss}
        onChange={(e) => setLoss(Number(e.target.value))}
      />
      <p>${loss}</p>

      <h2>Expected Value</h2>

      <p>
        E(X) = ({probability.toFixed(2)} × {reward}) + 
        ({(1 - probability).toFixed(2)} × -{loss})
      </p>

      <h1>${expectedValue.toFixed(2)}</h1>
      <ProbabilityChart
        probability={probability}
        reward={reward}
        loss={loss}
      />

      <FinanceExplanation />
    </div>
  );
}

export default App;