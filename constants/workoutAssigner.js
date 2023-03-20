export default workoutAssigner = (currDay) => {
  if (currDay === 22) return "mtfTest";
  if (currDay === 21) return "amrapTest";
  if (currDay % 4 === 0) return "scapHang";
  if (currDay % 4 === 3) return "commando";
  if (currDay % 4 === 2) return "chinUps";
  if (currDay % 4 === 1) return "initialTest";
  return null;
}
