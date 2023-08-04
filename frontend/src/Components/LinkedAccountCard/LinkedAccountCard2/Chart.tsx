import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);
interface Logic {
  data: {
    labels: [];
    datasets: [
      {
        label: string;
        data: [];
        backgroundColor: [];
        borderColor: [];
        borderWidth: number;
      }
    ];
  };
}

export function Chart(props: Logic) {
  return (
    <Doughnuts>
      <Doughnut data={props.data} />
    </Doughnuts>
  );
}

const Doughnuts = styled.div`
  width: 80%;
`;
