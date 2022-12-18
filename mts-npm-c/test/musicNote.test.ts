import { MusicNote } from "../src";

test("Midi number is ok", () => {
  const nc5 = new MusicNote("C5");
  console.log(nc5);
  expect(nc5.number).toBe(72);
  const nc4 = new MusicNote("C4");
  expect(nc4.number).toBe(60);
  const nc3 = new MusicNote("C3");
  expect(nc3.number).toBe(48);
  const ne3 = new MusicNote("E3");
  expect(ne3.number).toBe(52);
  const nes3 = new MusicNote("E#3");
  expect(nes3.number).toBe(53);
  const ness3 = new MusicNote("E##3");
  expect(ness3.number).toBe(54);
  const neb3 = new MusicNote("Eb3");
  expect(neb3.number).toBe(51);
  const nebb3 = new MusicNote("Ebb3");
  expect(nebb3.number).toBe(50);
});
