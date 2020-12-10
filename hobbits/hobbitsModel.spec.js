const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');
const dbConfig = require('../data/dbConfig');

describe('hobbits model',()=>{
    describe('insert()',()=>{
        beforeEach(async ()=>{
            await db('hobbits').truncate();
        })
        test('inserts hobbits to db', async ()=>{
            await Hobbits.insert({name:'test'});
            await Hobbits.insert({name:'test2'});

            const hobbits = await db('Hobbits');
            expect(hobbits).toHaveLength(2);
        })

        test('returns object in db',async ()=>{
          let hobbit = await Hobbits.insert({name:'test3'});
          expect(hobbit.name).toBe('test3');

          hobbit = await Hobbits.insert({name: 'test4'});
          expect(hobbit.name).toBe('test4')
        })
    })
})