// Configuração dos gráficos com Chart.js

// Configuração padrão para todos os gráficos
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#64748b';

// Função para criar gráfico de linha com meta
function createLineChartWithGoal(canvasId, data, meta, label, color) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: label,
                    data: data,
                    borderColor: color,
                    backgroundColor: color + '20',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5
                },
                {
                    label: 'Meta',
                    data: Array(12).fill(meta),
                    borderColor: '#ef4444',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y.toFixed(2);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Função para criar gráfico de barra com meta
function createBarChartWithGoal(canvasId, data, meta, label, color, isPercentage = false) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: label,
                    data: data,
                    backgroundColor: color + '80',
                    borderColor: color,
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y.toFixed(2);
                            if (isPercentage) {
                                label += '%';
                            }
                            return label;
                        },
                        afterLabel: function(context) {
                            return 'Meta: ' + meta + (isPercentage ? '%' : '');
                        }
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: meta,
                            yMax: meta,
                            borderColor: '#ef4444',
                            borderWidth: 2,
                            borderDash: [5, 5]
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e2e8f0'
                    },
                    ticks: {
                        font: {
                            size: 10
                        },
                        callback: function(value) {
                            return value + (isPercentage ? '%' : '');
                        }
                    }
                }
            }
        }
    });
}

// Inicializar todos os gráficos
function initCharts() {
    // TMAI
    createLineChartWithGoal(
        'chart-tmai',
        kpisData.tmai.historico,
        kpisData.tmai.meta,
        'TMAI (horas)',
        '#3b82f6'
    );
    
    // TMAR
    createLineChartWithGoal(
        'chart-tmar',
        kpisData.tmar.historico,
        kpisData.tmar.meta,
        'TMAR (horas)',
        '#0ea5e9'
    );
    
    // Retrabalho
    createBarChartWithGoal(
        'chart-retrabalho',
        kpisData.retrabalho.historico,
        kpisData.retrabalho.meta,
        'Retrabalho (%)',
        '#f59e0b',
        true
    );
    
    // Conformidade
    createBarChartWithGoal(
        'chart-conformidade',
        kpisData.conformidade.historico,
        kpisData.conformidade.meta,
        'Conformidade (%)',
        '#10b981',
        true
    );
    
    // Prazo SMT
    createBarChartWithGoal(
        'chart-prazo-smt',
        kpisData.prazoSmt.historico,
        kpisData.prazoSmt.meta,
        'Prazo SMT (%)',
        '#8b5cf6',
        true
    );
    
    // Resposta Financeiro
    createLineChartWithGoal(
        'chart-resp-fin',
        kpisData.respFin.historico,
        kpisData.respFin.meta,
        'Resp. Financeiro (horas)',
        '#06b6d4'
    );
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
} else {
    initCharts();
}
