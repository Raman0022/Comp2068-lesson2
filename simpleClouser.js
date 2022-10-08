function parent(){
    let message = "hello world"

    function child(){
        console.log(message)
    }
    child();
}
parent();
