const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports ={
    add
};

async function add(emaildetail){
    const [id] = await db('emailDetails').insert({senderId:`${emaildetail.senderId}`,topic:`${emaildetail.topic}`});

}