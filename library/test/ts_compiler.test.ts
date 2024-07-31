import {compile} from '../src/ts_compiler';

describe('ts_compiler', () => {
    it('should compile basic typescript code', async () => {
        const code = `
        export const add = (a: number, b: number) => a + b;
        console.log(add(1, 2));
        `;
        const result = await compile(code);
        expect(result.code).toContain(`const add = (a, b) => a + b;`);
        expect(result.code).toContain(`console.log(add(1, 2));`);
        expect(result.diagnostics).toEqual([]);
        expect(Array.from(result.locals.keys())).toEqual(['add']);
    });

    it('interfaces should not be returned as locals', async () => {
        const code = `
        export class Dog {}
        let ada: Dog = {};
        function bark(dog: Dog) {}
        export interface Ghost {
            foo: string;
        }
        export type Phantom = Ghost;
        `;
        const result = await compile(code);
        expect(Array.from(result.locals.keys())).toEqual(expect.arrayContaining(['Dog', 'ada', 'bark']));
        expect(Array.from(result.locals.keys())).not.toContain('Ghost');
        expect(Array.from(result.locals.keys())).not.toContain('Phantom');
    });
});