const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbit model', () => {
 describe('insert()', () => {
    afterEach(async () => {
      await db('hobbits').truncate();
});
    it('should insert the provided hobbit in the db', async () => {
        const hobbit = await Hobbits.insert({ name: 'sam' });

        expect(hobbit.name).toBe('sam');
    });

    it('should insert the provided hobbit in the db', async () => {
        await Hobbits.insert({ name: 'gaffer' });
        await Hobbits.insert({ name: 'sam' });
        
        const hobbits = await db('hobbits');

        expect(hobbits).toHaveLength(2);
    });
 });  
});

