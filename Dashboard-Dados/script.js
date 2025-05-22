//interatividade sidebar

$("#toggle-btn").click(function () {
    $("#sidebar").toggleClass("expanded");
});

const apiUrl = 'https://v6.exchangerate-api.com/v6/ec47586b483aa7d4b5869fca/latest/USD';


$(document).ready(function () {

    //Chamada api

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados completos da API:', data);

            // Acessar as taxas de câmbio

            var cotacao = data.conversion_rates; //pegando o parametro conversion_rates do json do retorno

            console.log(cotacao)


            var brl = cotacao.BRL;
            var eur = cotacao.EUR;

            var labelsBarra = ['Real','Euro']
            var valoresBarra = [brl,eur]


            var ctx2 = $("#chart2").get(0).getContext('2d');
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: labelsBarra,
                    datasets: [{
                        label: 'Taxa de câmbio (USD →)',
                        data: valoresBarra,
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ],
                        borderColor: 'rgba(75, 192, 192, 1)',
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

         
        })
        .catch(error => {
            console.error('Erro ao processar API:', error);
        });

    





    /*---------------------------charts------------------------*/

    var ctx1 = $("#chart1").get(0).getContext('2d');
    new Chart(ctx1, {
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
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });




    var ctx3 = $("#chart3").get(0).getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });








});


