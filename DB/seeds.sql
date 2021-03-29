
INSERT INTO users (user_name, email, pass_word)
VALUES("ernieperez", "ernie@perez.com", "perez"), ("crizzo", "clint@rizzo.com", "clint"), ("smahmody", "shakofa@mahmody.com", "shakofa") , ("danelaban", "dane@laban.com", "laban");


INSERT INTO condition_fitness(user_name, exercise, distance, user_number)
VALUES("ernieperez",  "elliptical", "5", "1"), 
	  ("crizzzo",  "weight training", "5", "2"),
      ("smahmody", "cycle", "15", "3"),
      ("danelaban", "stairs", "8", "4");


INSERT INTO strength_fitness (user_name, exercise, weight, sets, reps, rest, user_number)
VALUES("ernieperez", "bench press", "100", "3", "9", "30", "1"),
	  ("crizzo", "overhead press", "80", "5", "10", "15", "2"),
      ("smahmody", "deadlift", "75", "6", "10", "30", "3"),
      ("danelaban", "squat", "200", "5", "9", "15", "4") ;

SELECT users.id, users.user_name, users.email, condition_fitness.exercise, condition_fitness.distance,
strength_fitness.exercise, strength_fitness.weight, strength_fitness.sets, strength_fitness.reps, strength_fitness.rest
FROM users
INNER JOIN condition_fitness ON users.id = condition_fitness.user_number
INNER JOIN strength_fitness ON users.id = strength_fitness.user_number
 WHERE users.id = "1"