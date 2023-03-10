export default workouts = {
  initialTest: ()=>`Test – Max pull-ups to failure (MTF)\n2 min rest, \n5-min AMRAP,\n& Test Day Total (TDT)`,
  chinUps: (mtf) => `Chin-ups x ${Math.floor(2 * mtf)} (2x current MTF), \n2 min rest, \nPullups x ${Math.floor(1.4 * mtf)} (1.4x MTF)`,
  commando: (mtf) => `Commando Pullups x ${Math.floor(2 * mtf)} (2x current MTF), \n2 min rest, \nPullups x ${Math.floor(1.5 * mtf)} (1.5x MTF)`,
  scapHang: (mtf) => `Scap-Pull Hang (until failure or prev time +5 sec), \n2 min rest, \nPullups x ${Math.floor(1.6 * mtf)} (1.6x MTF)`,
  amrapTest: (mtf) => `Test – Do TDT from day one w/in 5 min`,
  mtfTest: (mtf) => `Test – Update MTF pullups`,
};

/*
## Program Outline
Four-day block, repeated five times over 20 days:
1. Test – Max to failure (MTF), 2 min rest, 5-min AMRAP, & Test Day Total (TDT)
2. Chin-ups (2x current MTF), 2 min rest, Pullups (1.4x MTF)
3. Commando Pullups (2x current MTF), 2 min rest, Pullups (1.5x MTF)
4. Scap-Pull Hang (until failure or prev time +5 sec), 2 min rest, Pullups (1.6x MTF)
…
21. Test – Do TDT from day one w/in 5 min
22. Test – Update MTF pullups

*/