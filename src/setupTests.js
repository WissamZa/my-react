import { beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';

beforeAll(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    
});