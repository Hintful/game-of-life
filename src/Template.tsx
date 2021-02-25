export const templates = [
  //******* Still lifes ********
  {
    name: 'Block',
    grid: [
      [1, 1],
      [1, 1]]
  },
  {
    name: 'Beehive',
    grid: [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 0]]
  },
  {
    name: 'Loaf',
    grid: [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 0]]
  },
  {
    name: 'Tub',
    grid: [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0]]
  },

  //******* Oscillators ********
  {
    name: 'Blinker',
    grid: [
      [1, 1, 1]]
  },
  {
    name: 'Toad',
    grid: [
      [0, 1, 1, 1],
      [1, 1, 1, 0]]
  },
  {
    name: 'Beacon',
    grid: [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 1]]
  },
  {
    name: 'Pulsar',
    grid: [
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]]
  },
  {
    name: 'Pentadecathlon',
    grid: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [0, 1, 0]
    ]
  },


  //******* Spaceships ********
  {
    name: 'Glider',
    grid: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    name: 'Light-weight Spaceship',
    grid: [
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0]
    ]
  },


  //****** Methuselahs ********
  {
    name: 'R-pentomino',
    grid: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    name: 'Diehard',
    grid: [
      [0, 0, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 1, 1]
    ]
  },
  {
    name: 'Acorn',
    grid: [
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 1]
    ]
  },


  //***** Guns **********
  {
    name: 'Gosper Glider Gun',
    grid: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
      [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
  },

  //******** Infinite Growth ***********
  {
    name: '10-cell Infinite Growth',
    grid: [
      [0,0,0,0,0,0,1,0],
      [0,0,0,0,1,0,1,1],
      [0,0,0,0,1,0,1,0],
      [0,0,0,0,1,0,0,0],
      [0,0,1,0,0,0,0,0],
      [1,0,1,0,0,0,0,0]
    ]
  },
  {
    name: '2x12 Infinite Growth',
    grid: [
      [1,0,0,1,1,0,1,1,1,1,0,1],
      [1,1,1,1,1,1,0,1,1,0,0,1]
    ]
  },
  {
    name: '5x5 Infinite Growth',
    grid: [
      [1,1,1,0,1],
      [1,0,0,0,0],
      [0,0,0,1,1],
      [0,1,1,0,1],
      [1,0,1,0,1]
    ]
  },
  {
    name: 'One-cell think Infinite Growth',
    grid: [[1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1]]
  }
]