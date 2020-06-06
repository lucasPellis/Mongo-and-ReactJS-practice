use pokemonsample;
db.samples_pokemon.aggregate( [
   {
      $graphLookup: {
         from: "samples_pokemon",
         startWith: "$next_evolution.name",
         connectFromField: "next_evolution",
         connectToField: "name",
         as: "evolutions",
         restrictSearchWithMatch: { avg_spawns:{$gt:4} }
      }
   },
   { 
       $match: { 
           $expr: {
                $and: [
                  { $gt: [ { $size : "$evolutions" }, 0 ] },
                  { $not: { $isArray: "$prev_evolution" } }
                ]
           } 
      }
   },
   {
   $project: {
       "_id": 0,
      "name": 1,
      "num": 1,
    }
   },
   
] );

