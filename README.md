# d3-intro

i followed scott murray's d3 tutorial (on the previous version of d3), that tracks d3 v4 closely.

check out the [final visualization](https://jaymccormick.github.io/d3-intro/),
a scatterplot of randomly generated points from the dataset array

```javascript
// initialize dataset list
var dataset = [];

// make dataset m-by-n matrix of random points
for (var i = 0; i < 20; i++){
  var randX = Math.round(Math.random() * 250 + 1);
  var randY = Math.round(Math.random() * 250 + 1);

  dataset.push([randX, randY]);
}
```

See [scott's d-3 tutorial](http://alignedleft.com/tutorials/d3)
