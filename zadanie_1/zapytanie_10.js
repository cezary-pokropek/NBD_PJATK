bulkRemoveEmail = db.people.initializeUnorderedBulkOp();
bulkRemoveEmail.find( { "job": "Editor" } ).update( { $unset: { "email": "" } } )
printjson(bulkRemoveEmail.execute());