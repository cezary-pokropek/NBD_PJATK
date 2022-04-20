var bulkAddHobby = db.people.initializeUnorderedBulkOp();
bulkAddHobby.find( { "first_name": "Antonio" }).update( { $set: { "hobby": "pingpong" } } )
printjson(bulkAddHobby.execute())