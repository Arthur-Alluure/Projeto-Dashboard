//interatividade sidebar

$("#toggle-btn").click(function () {
    $("#sidebar").toggleClass("expanded");
});






/*---------------------------charts------------------------*/

var ctx = $("#myChart").get(0).getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        maintainAspectRatio : false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




var ctx2 = $("#myChart2").get(0).getContext('2d');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        maintainAspectRatio : false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



var ctx3 = $("#myChart3").get(0).getContext('2d');
var meuDonut = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Meta Atingida', 'Meta Não Atingida'],
        datasets: [{
            label: 'Desempenho',
            data: [75, 25], // Ajuste os valores conforme necessário
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});