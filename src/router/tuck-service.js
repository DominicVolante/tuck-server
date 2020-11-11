const tuckService = {
    getAllSymptoms(knex) {
      return knex.select('*').from('symptoms');
    },
    insertSymptom(knex, newSymptom){
        return knex
        .insert(newSymptom)
        .into('symptoms')
        .returning('*')
        .then(rows =>{
            return rows[0];
        });
    }
};
module.exports = tuckService