import Plot from "react-plotly.js";

type Props = {
  probability: number;
  reward: number;
  loss: number;
};

function ProbabilityChart({ probability, reward, loss }: Props) {
  return (
    <Plot
      data={[
        {
          x: [`+$${reward}`, `-$${loss}`],
          y: [probability, 1 - probability],
          type: "bar",
        },
      ]}
      layout={{
        title: "Probability Distribution",
        yaxis: {
          title: "Probability",
        },
      }}
    />
  );
}

export default ProbabilityChart;