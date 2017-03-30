// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    reject('Not a number');
  });
}

addPromise(1, 4).then(function (sum) {
  console.log('promise sucess', sum);
}, function (err) {
  console.log('promise error', err);
})

addPromise('d', 4).then(function (sum) {
  console.log('promise sucess', sum);
}, function (err) {
  console.log('promise error', err);
})
