const orm = require('../config/orm');
// workout model with all of its query functions
const workout = {
    selectAll: function() {
        return orm.selectAll('workouts');
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals) {
        return orm.insertOne('workouts', cols, vals);
    },
    updateOne: function(objColVals, condition) {
        return orm.updateOne('workouts', objColVals, condition);
    },
    deleteOne: function(condition) {
        return orm.deleteOne('workouts', condition);
    }
};
// export the workout model to use in the workouts_controller
module.exports = workout;