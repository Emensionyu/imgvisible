function foo(){
    return axios.get("https://www.easy-mock.com/mock/5ceccfd17930865af982c368/example/")
}
function *main(){
    try{
        var text=yield foo();
        console.log(text);
    }catch{

    }
}
var it=main();
var p=it.next().value

p.then(function(text){
    it.next(text);
},
function(err){
    it.throw(err)
})