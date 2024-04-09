
import { Bar } from 'react-chartjs-2';

const ResultadoChart = ({ data }) => {
  // Procesa los datos para prepararlos para el gráfico
  const labels = data.map(item => item.titulo_pregunta);
  const respuestas = data.map(item => item.contenido_respuesta);

  // Configura los datos del gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Respuestas',
        data: respuestas,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Configura las opciones del gráfico
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default ResultadoChart;
