printjson(db.people.aggregate ([{$group: {_id: "$sex", mean_weight: {$avg: "$weight"}, mean_height: {$avg: "$height"}} } ] ).toArray() );
