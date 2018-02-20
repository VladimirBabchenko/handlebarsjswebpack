export default function greeting(context) {
  // this.context= context;
  // Greeting.prototype.hello = function() {
  //   this.context.items.forEach(function (name) {
  //     console.log(`Hello ${name.title}`)
  //   })
  // };

  function hello() {
    context.items.forEach(function(item) {
      console.log(`Hello ${item.title}`)
    })
  }

  return {
    hello: hello
  }
};