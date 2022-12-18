const SPNDegrees = new Map<String, number>([
  ["C", -9],
  ["D", -7],
  ["E", -5],
  ["F", -4],
  ["G", -2],
  ["A", 0],
  ["B", 2],
]);
const NOTE_NAME_RE = /^(A|B|C|D|E|F|G)(#*|b*)(-?[0-9])$/;
const stRatio = 2 ** (1 / 12);
export class MusicNote {
  number: number; // midi not number A4 = 69
  degree: string;
  accident: number;
  octave: number;
  constructor(name: string) {
    const m = name.match(NOTE_NAME_RE);
    console.log("M:", m);
    if (m && SPNDegrees.has(m[1])) {
      this.degree = m[1];
      this.accident = m[2].length * (m[2][0] == "b" ? -1 : 1);
      this.octave = parseInt(m[3]);
      this.number =
        69 +
        SPNDegrees.get(this.degree)! +
        this.accident +
        (this.octave - 4) * 12;
    } else {
      throw new Error(`Invalid note name ${name}.`);
    }
  }
}
