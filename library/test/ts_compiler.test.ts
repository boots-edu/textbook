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
        // No
        namespace Alpha {}
        const enum Beta {}
        interface Gamma {}
        declare const Delta = 0;
        declare function Epsilon(): any;
        declare class Eta {}
        type Theta = Eta;

        // Yes
        abstract class first {}
        class second {}
        function third() {}
        let fourth = 0;
        const fifth = 0;
        var sixth = 0;
        enum seventh {}
        `;
        const result = await compile(code);
        expect(Array.from(result.locals.keys())).toEqual(expect.arrayContaining(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']));
        expect(Array.from(result.locals.keys())).not.toContain('Alpha');
        expect(Array.from(result.locals.keys())).not.toContain('Beta');
        expect(Array.from(result.locals.keys())).not.toContain('Gamma');
        expect(Array.from(result.locals.keys())).not.toContain('Delta');
        expect(Array.from(result.locals.keys())).not.toContain('Epsilon');
        expect(Array.from(result.locals.keys())).not.toContain('Eta');
        expect(Array.from(result.locals.keys())).not.toContain('Theta');
    });
});