import {compile} from '../src/ts_compiler';

describe('ts_compiler', () => {
    it('should compile typescript code', async () => {
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
});