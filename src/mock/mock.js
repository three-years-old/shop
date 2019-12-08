import Mock from 'mockjs'
// import server from '../server.config.js'
Mock.mock('http://www.a123.com/list', {
    'info|10-20': [
        {
            'index|+1': 1,
            'name': '@first @last',
            'id': '@integer(1000,999999)',
            'data': 'datatime',
            'img': '@image(200*200)',
            'text': '@sentence(6,22)'
        }
    ]
})
let Random = Mock.Random;

let productData = req => {
    let productList = [];//存放农机信息的数组
    for (let i = 0; i < 100; i++) {
        let product = {
            name: Random.first(5, 20),
            img: Random.dataImage('200x200', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        }
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.a123.com/getVarietyItem', productData);