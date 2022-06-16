import React from "react";
import { Heading } from "./Heading";
import { Counter } from "./Counter";
import { Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class App extends React.Component<object, CounterState> {
  readonly state: CounterState = initialState;

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Heading />
            <Button variant="warning" size="lg">
              <Counter
                label={`Current `}
                count={this.state.count}
                onCounterIncrease={this.increment}
              />
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default App;
