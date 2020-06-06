use pokemonsample;
db.samples_pokemon.aggregate( [
   {
      $graphLookup: {
         from: "samples_pokemon",
         startWith: "$next_evolution.name",
         connectFromField: "next_evolution",
         connectToField: "name",
         as: "evolutions",
      }
   },
   { 
       $match: { 
           $expr: {
               $gt: [ { $size : "$evolutions" }, 0 ]
	   } 
       }
   },
   {
   $project: {
       "_id": 0,
      "name": 1,
      "num": 1,
      "spawn_time" : 1,
      "evolutions" : { 
          "name" : 1,
          "num": 1,
          "spawn_time":1 
        }
    }
   }
] );

