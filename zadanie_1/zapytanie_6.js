printjson(db.people.insert( 
        {
            "sex": "Male",
            "first_name": "Czaroslav",
            "last_name": "Himself",
            "job": "Drop Table developer",
            "email": "yakuzamaster@yakuza.jp",
            "location": {
                "city": "Tokyo",
                "address": {
                    "streetname": "Shinubi",
                    "streetnumber": "1"
                }
            },
            "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
            "height": {
                "numberDecimal":200.00
            },
            "weight": {
                "$numberDecimal": 100.00
            },
            "birth_date": {
                "$date": "1989-01-01T02:55:03.000Z"
            },
            "nationality": "Poland",
            "credit": [{
                "type": "switch",
                "number": "6000",
                "currency": "YEN",
                "balance": "123456.78"
            }]
        }
    )
)