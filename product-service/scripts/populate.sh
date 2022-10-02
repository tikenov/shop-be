#!/bin/bash

aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"4ef855f0-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh apples from garden."},"price":{"N":"2.4"},"title":{"S":"Apple"},"image":{"S":"https://source.unsplash.com/rxN2MRdFJVg"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"57899d46-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh bananas from Africa."},"price":{"N":"10"},"title":{"S":"Banana"},"image":{"S":"https://source.unsplash.com/Kl3467edwsE"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"5cbff1b6-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh oranges from Egypt."},"price":{"N":"23"},"title":{"S":"Orange"},"image":{"S":"https://source.unsplash.com/EovrNaCXeS0"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"722bd5b0-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh pineapple from Costa Rica."},"price":{"N":"15"},"title":{"S":"Pineapple"},"image":{"S":"https://source.unsplash.com/Cr9hZrpC1Oc"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"6eb6fea0-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh watermelon from gardasyncen."},"price":{"N":"23"},"title":{"S":"Watermelon"},"image":{"S":"https://source.unsplash.com/wh3qvHXdGak"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"6ae8353c-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh grapes from France."},"price":{"N":"15"},"title":{"S":"Grapes"},"image":{"S":"https://source.unsplash.com/F_ilCik66Hg"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name products \
    --item '{"id":{"S":"63e7a628-429b-11ed-b878-0242ac120002"},"description":{"S":"Fresh mango countfrom Spain."},"price":{"N":"15"},"title":{"S":"Peach"},"image":{"S":"https://source.unsplash.com/vhnWTlU-ZDY"}}' \
    --return-consumed-capacity TOTAL


aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"4ef855f0-429b-11ed-b878-0242ac120002"},"count":{"N":"5"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"57899d46-429b-11ed-b878-0242ac120002"},"count":{"N":"4"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"5cbff1b6-429b-11ed-b878-0242ac120002"},"count":{"N":"6"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"722bd5b0-429b-11ed-b878-0242ac120002"},"count":{"N":"7"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"6eb6fea0-429b-11ed-b878-0242ac120002"},"count":{"N":"9"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"6ae8353c-429b-11ed-b878-0242ac120002"},"count":{"N":"12"}}' \
    --return-consumed-capacity TOTAL
aws dynamodb put-item \
    --table-name stocks \
    --item '{"product_id":{"S":"63e7a628-429b-11ed-b878-0242ac120002"},"count":{"N":"6"}}' \
    --return-consumed-capacity TOTAL
