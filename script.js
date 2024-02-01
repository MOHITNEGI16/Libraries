const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April','May'],
    datasets: [{
      label: 'Monthly Sales',
      data: [65,59,80,81,55],
      borderColor: 'rgba(219,242,242,4)',
      backgroundColor:'rgba(219,242,242,0.7)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
