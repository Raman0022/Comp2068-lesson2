function parent(){
    let message = "hello world"

    function child(){
        console.log(message)
    }
    return child
}
let childFunction = parent()
childFunction();