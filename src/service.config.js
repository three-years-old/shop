

// 接口地址
const MOCKURL = 'http://www.a123.com/';

// const URL = {
//     getVarietyItem: MOCKURL + 'getVarietyItem'
// }


const SERVERURL = "http://localhost:3000/";
const URL = {
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType'
    
}
export default URL