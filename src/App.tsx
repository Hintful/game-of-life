import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';

const NUM_ROWS = 50; // max 50
const NUM_COLS = 120; // max 120

const GRID_WIDTH = 15;
const GRID_HEIGHT = 15;

const SIMULATION_SPEED = 50; // one tick = 500ms

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

              if ( neighbour_cells < 2 || neighbour_cells > 3) {
                gridCopy[y][x] = 0; // kill cell
              } else if (curGrid[y][x] === 0 && neighbour_cells === 3) {
                gridCopy[y][x] = 1;
              }
            }
          }
        })
      })
    }

    setTimeout(runSimulation, SIMULATION_SPEED);
  }, [])

  return (
    <div className="App">
      <button
        onClick={() => {
          setRunning(!running);
          runningRef.current = true;
          runSimulation();
        }}
      >{running ? 'Stop' : 'Start'}</button>
      <button
        onClick={() => {
          setWrapAround(!wrapAround);
          wrapAroundRef.current = !wrapAround;
        }}
        disabled={runningRef.current}
      >{wrapAround ? 'Wrap-around: ON' : 'Wrap-around: OFF'}
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${NUM_COLS}, ${GRID_WIDTH}px)`
      }}>
        {grid.map((rows, y) =>
          rows.map((col: number[], x: number) =>
            <div
              onClick={() => {
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
  );
}

export default App;
