/**
 * @desc 依赖注入
 */

function $inject(services, f, scope) {
    var $params = f.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1].split(',');
    for (var i in $params) { 
        $params[i] = services[$params[i]]; 
    }
    return function(){
        f.apply(scope || {}, $params);
    } 
}

module.exports = $inject;