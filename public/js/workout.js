/ Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // Mark the workout as crushed when crush button is clicked
    $('.change-crushed').on('click', function(event) {
        const id = $(this).data('id');
        const newCrushed = !$(this).data('crushed');
        let newCrushedState = {
            crushed: newCrushed
        };
        // Send the PUT request to set crushed to true in db
        $.ajax('/api/workouts/' + id, {
            type: 'PUT',
            data: newCrushedState
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });
    // Add a new workout from the form
    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        const workoutInput = $('#workout').val().trim();
        // check to make sure the workout input isn't blank before adding the workout to the db
        if (workoutInput) {
            const newWorkout = {
                workout_name: workoutInput,
                crushed: 0
            };
            // Send the POST request to add the new workout to the db
            $.ajax('/api/workouts', {
                type: 'POST',
                data: newWorkout
            }).then(function() {
                // Reload the page to get the updated list
                location.reload();
            });
        }
    });
    // Delete the workout when the trash button is clicked
    $('.delete-workout').on('click', function(event) {
        var id = $(this).data('id');
        // Send the DELETE request to remove the workout from the db
        $.ajax('/api/workouts/' + id, {
            type: 'DELETE'
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});