function renderEmployees(boston, container) {
  var people = boston.data;
  const len = boston.data.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

function renderTopSalaries(boston, container) {
  var people = boston.data;
  //Copy all employees names and salaries into a new array
  var allEmployees = [];
  const allLen = boston.data.length;
  for (let i = 0; i < allLen; i++) {
    allEmployees.push([people[i][8],people[i][11]]);
  }

  //Sort by salary and keep the top 5 only
  const top = 5; //Length of top empolyees list required to be rendered
  var topEmployees = allEmployees.sort((a, b) => b[1] - a[1]).slice(0, top);

  //Create a list of top empolyees names and salaries to be added to and HTML element
  var html = '';
  for (let i = 0; i < top; i++) {
    html +=
      '<li class="top">' +
      '<h2>' +
      topEmployees[i][0] +
      '</h2>' +
      '<h3>' +
      topEmployees[i][1] +
      '</h3>';
  }

  //Add unordered list tags and element to the index html div with id "topSalaries"
  container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

function renderTopEmployees(boston, container) {
  
  var people = boston.data;
   //Copy all employees names and salaries into a new array
   var allEmployees = [];
   const allLen = boston.data.length;
   for (let i = 0; i < allLen; i++) {
     allEmployees.push([people[i][8],people[i][11]]);
   }

  //Filter by salary
  const salaryCut = 200000; 
  var topEmployees = allEmployees.filter(a => a[1] > salaryCut);
  
  //Create a list of top empolyees names and salaries to be added to and HTML element
  const len = topEmployees.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' +
      '<h2>' +
      topEmployees[i][0] +
      '</h2>' +
      '<h3>' +
      topEmployees[i][1] +
      '</h3>';
  }

  //Add unordered list tags and element to the index html div with id "topEmployees"
  container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
}

//renderTopSalaries(boston, document.getElementById('container')); //step 1 solution
renderTopEmployees(boston, document.getElementById('container')); //step 2 solution
