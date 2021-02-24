import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import "react-awesome-button/dist/styles.css";
import { templates } from './Template';
import ViewTemplates from './ViewTemplates';

export const NUM_ROWS = 50; // max 50
export const NUM_COLS = 120; // max 120

export const GRID_WIDTH = 15;
export const GRID_HEIGHT = 15;

const INITIAL_SIMULATION_SPEED = 300; // one tick = 300ms

const neighbour_coords = [
  [-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]
]

function App() {
  const [grid, setGrid] = useState(() => {
    return Array(NUM_ROWS).fill(Array(NUM_COLS).fill(0))
  })
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  const [wrapAround, setWrapAround] = useState(true);
  const wrapAroundRef = useRef(wrapAround);
  runningRef.current = running;
  wrapAroundRef.current = wrapAround;

  const [simulationSpeed, setSimulationSpeed] = useState(INITIAL_SIMULATION_SPEED);
  const speedRef = useRef(simulationSpeed);
  speedRef.current = simulationSpeed;

  function resetGrid() {
    setGrid((curGrid) => {
      return (produce(curGrid, gridCopy => {
        for (let y = 0; y < NUM_ROWS; y++) {
          for (let x = 0; x < NUM_COLS; x++) {
            gridCopy[y][x] = 0
          }
        }
      }))
    })
  }

  function loadTemplate(template: number[][]) {
    // load the template on the approximate center of the grid
    const originX = Math.floor(NUM_COLS / 2) - Math.floor(template[0].length / 2);
    const originY = Math.floor(NUM_ROWS / 2) - Math.floor(template.length / 2);

    resetGrid();
    setGrid((curGrid) => {
      return (produce(curGrid, gridCopy => {
        for (let y = 0; y < template.length; y++) {
          for (let x = 0; x < template[0].length; x++) {
            gridCopy[y + originY][x + originX] = template[y][x];
          }
        }
      }))
    })
  }

  const runSimulation = useCallback(() => {
    if (!runningRef.current) { return; }
    else {
      setGrid((curGrid) => {
        return produce(curGrid, gridCopy => {
          for (let y = 0; y < NUM_ROWS; y++) {
            for (let x = 0; x < NUM_COLS; x++) {
              let neighbour_cells = 0
              neighbour_coords.forEach(([a, b]) => {
                if (!wrapAroundRef.current) {
                  const newY = y + a;
                  const newX = x + b;
                  if (newY >= 0 && newY < NUM_ROWS && newX >= 0 && newX < NUM_COLS) {
                    neighbour_cells += curGrid[newY][newX];
                  }
                } else {
                  const newY = (y + a + NUM_ROWS) % NUM_ROWS;
                  const newX = (x + b + NUM_COLS) % NUM_COLS;
                  neighbour_cells += curGrid[newY][newX];
                }
              })

              if (neighbour_cells < 2 || neighbour_cells > 3) {
                gridCopy[y][x] = 0; // kill cell
              } else if (curGrid[y][x] === 0 && neighbour_cells === 3) {
                gridCopy[y][x] = 1;
              }
            }
          }
        })
      })
    }
    setTimeout(runSimulation, speedRef.current);
  }, [])

  return (
    <div className="App">
      <div className="grid-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${NUM_COLS}, ${GRID_WIDTH}px)`
        }}>
          {grid.map((rows, y) =>
            rows.map((col: number[], x: number) =>
              <div
                onClick={() => {
                  // all element must be updated simultaneously
                  // create gridCopy to calculate values first, then copy over
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[y][x] = 1 - gridCopy[y][x]; // toggle
                  });
                  setGrid(newGrid)
                }}
                key={`${y}-${x}`}
                style={{
                  width: GRID_WIDTH,
                  height: GRID_HEIGHT,
                  backgroundColor: grid[y][x] ? 'skyblue' : undefined,
                  border: 'solid 1px #232323'
                }} />))}
        </div>
      </div>

      <div className="menu-container">
        <div className="menu-button-container">
          <button
            style={{
              padding: "10px 30px"
            }}
            onClick={() => {
              setRunning(!running);
              runningRef.current = true;
              runSimulation();
            }}
          >{running ? 'Stop' : 'Start'}
          </button>
          <button
            style={{
              padding: "10px 30px"
            }}
            onClick={() => { resetGrid(); }}
            disabled={runningRef.current}
          >
            Reset
          </button>
          <button
            onClick={() => {
              setWrapAround(!wrapAround);
              wrapAroundRef.current = !wrapAround;
            }}
            disabled={runningRef.current}
          >{wrapAround ? 'Wrap-around: ON' : 'Wrap-around: OFF'}
          </button>
        </div>
        <div className="speed-control-container">
          <input type="range" min={20} max={1000} value={simulationSpeed} onChange={(e) => {
            setSimulationSpeed(Number(e.target.value));
          }} disabled={runningRef.current} />
          <div>{`${simulationSpeed}ms`}</div>
        </div>
        <div className="view-template-title">
          Templates
        </div>
        <div className="view-template-container">

          {templates.map(template => (
            <ViewTemplates template={template} loadTemplate={loadTemplate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
