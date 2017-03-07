function click(callback = function(){}) {
    callback();
}
click(); // Ok
click(undefined); // Ok
click(null);