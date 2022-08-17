import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCovidVaccinated = ({ data }) => {
  const dataSet = {
    labels: [
      "Vaccinated",
      data.vaccinationDoseStatus === "oneDose"
        ? "Not Vaccinated"
        : "Not fully Vaccinated",
    ],
    datasets: [
      {
        label: "Vaccinated",
        data: [data.percentage, 100 - data.percentage],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <h3>
        % Vaccinated{" "}
        {data.vaccinationDoseStatus === "oneDose" ? "(One dose)" : "(Fully)"}
      </h3>

      <Doughnut data={dataSet} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  width: 300px;
`;

export default ChartCovidVaccinated;
