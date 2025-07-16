function double(a: number): number;
function double(a: string): string;
function double(a: number | string): number | string {
  if (typeof a === "number") {
    return a * 2;
  }
  return a + a;
}

const num: number = double(10);
const str: string = double("hi");
