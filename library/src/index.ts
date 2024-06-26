import { compile } from "./ts_compiler";

console.log("Hello world!");

export function add(a: number, b: number): number {
  return a + b;
}

const results = compile(`let a = 0; console.log(a);
class Dog {
  private name: string;
  private fuzzy: boolean;
  public age: number;
}
export function alpha(beta: string): number {
  return 7;
}`);
console.log(results);
// eslint-disable-next-line @typescript-eslint/no-base-to-string
console.log(results.diagnostics.map(d => d.messageText.toString()).join("\n"));

import { setupRunners } from "./setup_runners";
setupRunners();