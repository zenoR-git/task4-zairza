
exports.up = function(knex) {

    return knex.schema.createTable('emailDetails', tbl => {
        tbl.increments();
        tbl.text('senderId')
           .notNullable();
        tbl.text('topic')
           .notNullable();
        tbl.timestamps( true, true );
    })
  
};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('emailDetails');

};