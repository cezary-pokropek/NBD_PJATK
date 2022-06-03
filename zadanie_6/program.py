from typing import Dict
from riak import RiakClient

def setup_connection():
    return RiakClient(pb_port=8087)

def create_bucket(client):
    return client.bucket('s25549')

def create_document(bucket: str, key:str, value:Dict):
    document = bucket.new(key, data=value)
    document.store()
    return document

def update_document(document, data: Dict[str, str]):
    document.data[data["key"]] = data['value']
    document.store()
    return document

def delete_document(document):
    document.delete()
    return document

def program_exec():
    documentKey = "test_key"
    documentValue= {
        'name' : "test_name" ,
        'value' :  69
    }

    client = setup_connection()
    bucket = create_bucket(client)
    
    test_document = create_document(bucket, documentKey, documentValue)
    print(f'Document Added : {test_document.data}\n')

    test_documentProperty = {"key": "value", "value": 42}
    test_document = update_document(test_document, test_documentProperty)
    print(f'Document Updated : {test_document.data}\n')

    test_document = delete_document(test_document)
    print(f'Document Deleted : {test_document.data}\n')


if __name__ == "__main__":
    program_exec()