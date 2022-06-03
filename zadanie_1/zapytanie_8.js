var bulk = db.people.initializeUnorderedBulkOp();
bulk.find( { "location.city": "Moscow" } ).update( { $set: { "location.city": "Moskwa" } } );
printjson(bulk.execute());