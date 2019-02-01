import React, { Component } from "react";
import ReactDOM from "react-dom";
import Portal from "react-portal";
import { Stage, Layer, Rect } from "react-konva";
import Draggable from "react-draggable";

class App extends Component {
  state = { text: "", disable: false };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Portal isOpened={true} draggable>
            <Draggable
              defaultPosition={{ x: 120, y: 300 }}
              disabled={this.state.disable}
            >
              <input
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: "200px"
                }}
                onChange={e => this.setState({ text: e.target.value })}
                onClick={() => this.setState({ disable: !this.state.disable })}
                value={this.state.text}
                placeholder="DOM input from Konva nodes"
              />
            </Draggable>
          </Portal>
          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill="red"
            shadowBlur={5}
            draggable
          />
        </Layer>
      </Stage>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
