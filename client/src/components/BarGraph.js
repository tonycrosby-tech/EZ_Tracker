import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subscriptions: [],
    };
  }

  componentDidMount() {
    axios.get("/api/auth/getAllSubs").then((res) => {
      this.setState({ subscriptions: res.data.subscriptions });
    });
  }

  groomGraphData() {
    const labels = this.state.subscriptions.map(
      (item) => item.SubscriptionName
    );
    const data = this.state.subscriptions.map((item) => item.rating);

    return {
      labels,
      datasets: [
        {
          label: "Enjoyment",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Container component={Paper}>
          <Bar
            data={this.groomGraphData()}
            height={250}
            width={300}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 100,
                    },
                  },
                ],
              },
              title: {
                display: true,
                text: "Average Joy from Subscriptions",
                fontSize: 20,
              },
            }}
          />
        </Container>
      </div>

    );
  }
}
