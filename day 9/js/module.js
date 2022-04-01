/*let demo=(
  function() {
      let privatedata="admin@13$"  
      function privateMethod(){
          console.log(privatedata)
      }
      return{
          publicMethod:function(){
              privateMethod();
          }  
      }
  } 
)()
//demo.privateMethod()
demo.publicMethod()
let demo=(
    function() {
        let privatedata="admin@13$"  
        function privateMethod(){
            console.log(privatedata)
        }
        function publicMethod(){
            console.log("public method")
            privateMethod()
        }
        return{
            publicMethod:publicMethod,
            privateMethod:privateMethod
        }
    } 
  )()
  //demo.privateMethod()
  demo.publicMethod()
  demo.privateMethod()*/
