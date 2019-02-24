const workers = localStorage.getItem('workers');
console.log(JSON.parse(workers));
const table = document.querySelector('#table');
// console.log(worker)
// for(let i = 0; i < workers.length; i++) {
//     const tr = document.createElement('tr');
//     Object.keys(workers[i]).forEach(item => {
//         const td = document.createElement('td');
//         td.innerHTML = item;
//         tr.appendChild(td);
//     })
//     table.appendChild(tr)
// }