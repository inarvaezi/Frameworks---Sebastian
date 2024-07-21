// Menu toggle script
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("wrapper").classList.toggle("toggled");
});

// Chart.js script
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    datasets: [
      {
        label: 'Today',
        backgroundColor: 'rgba(78, 115, 223, 0.1)',
        borderColor: 'rgba(78, 115, 223, 1)',
        data: [0, 10, 5, 2, 20, 30, 45, 35, 20, 10, 30, 40, 50, 45, 20, 15, 30, 20, 25, 40, 45, 50, 60],
        fill: true
      },
      {
        label: 'Yesterday',
        backgroundColor: 'rgba(78, 115, 223, 0.1)',
        borderColor: 'rgba(78, 115, 223, 1)',
        data: [0, 5, 10, 8, 15, 20, 25, 30, 40, 35, 30, 20, 10, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55],
        fill: true
      }
    ]
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Tickets'
        }
      }
    }
  }
});