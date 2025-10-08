// Dados simulados para o POP de Evento e Sinistro

// KPIs
const kpisData = {
    tmai: {
        atual: 1.8,
        meta: 2.0,
        historico: [1.9, 1.7, 1.8, 2.1, 1.6, 1.8, 1.7, 1.9, 1.8, 1.8, 1.7, 1.8]
    },
    tmar: {
        atual: 68.5,
        meta: 72.0,
        historico: [70.2, 68.5, 71.3, 69.8, 67.5, 68.9, 70.1, 68.5, 69.2, 68.5, 67.8, 68.5]
    },
    retrabalho: {
        atual: 3.2,
        meta: 5.0,
        historico: [4.5, 3.8, 3.2, 4.1, 3.5, 3.2, 3.9, 3.2, 3.6, 3.2, 3.4, 3.2]
    },
    conformidade: {
        atual: 98.5,
        meta: 100.0,
        historico: [97.2, 98.1, 98.5, 97.8, 98.9, 98.5, 97.5, 98.5, 98.2, 98.5, 98.7, 98.5]
    },
    prazoSmt: {
        atual: 96.8,
        meta: 95.0,
        historico: [95.5, 96.2, 96.8, 95.9, 97.1, 96.8, 95.3, 96.8, 96.5, 96.8, 97.2, 96.8]
    },
    respFin: {
        atual: 18.2,
        meta: 24.0,
        historico: [20.5, 19.2, 18.2, 21.3, 17.8, 18.2, 19.8, 18.2, 19.5, 18.2, 18.9, 18.2]
    }
};

// Processos simulados
const processosData = [
    {
        id: "EVT-1001",
        placa: "ABC1234",
        tipo: "SINISTRO",
        status: "encerrado",
        recebimento: "2025-10-01 09:30:00",
        analiseInicial: "2025-10-01 11:15:00",
        autorizacao: "2025-10-03 14:20:00",
        tmai: 1.75,
        tmar: 52.08
    },
    {
        id: "EVT-1002",
        placa: "DEF5678",
        tipo: "SMT",
        status: "encerrado",
        recebimento: "2025-10-01 10:45:00",
        analiseInicial: "2025-10-01 12:30:00",
        autorizacao: "2025-10-04 09:15:00",
        tmai: 1.75,
        tmar: 68.75
    },
    {
        id: "EVT-1003",
        placa: "GHI9012",
        tipo: "SINISTRO",
        status: "encerrado",
        recebimento: "2025-10-02 08:15:00",
        analiseInicial: "2025-10-02 10:00:00",
        autorizacao: "2025-10-05 11:30:00",
        tmai: 1.75,
        tmar: 73.50
    },
    {
        id: "EVT-1004",
        placa: "JKL3456",
        tipo: "VIDRO",
        status: "encerrado",
        recebimento: "2025-10-02 14:20:00",
        analiseInicial: "2025-10-02 15:45:00",
        autorizacao: "2025-10-03 16:10:00",
        tmai: 1.42,
        tmar: 24.42
    },
    {
        id: "EVT-1005",
        placa: "MNO7890",
        tipo: "SMT",
        status: "encerrado",
        recebimento: "2025-10-03 09:00:00",
        analiseInicial: "2025-10-03 10:50:00",
        autorizacao: "2025-10-06 13:20:00",
        tmai: 1.83,
        tmar: 74.50
    },
    {
        id: "EVT-1006",
        placa: "PQR2345",
        tipo: "SINISTRO",
        status: "em-analise",
        recebimento: "2025-10-06 11:30:00",
        analiseInicial: "2025-10-06 13:15:00",
        autorizacao: null,
        tmai: 1.75,
        tmar: null
    },
    {
        id: "EVT-1007",
        placa: "STU6789",
        tipo: "CARRO_RESERVA",
        status: "encerrado",
        recebimento: "2025-10-04 15:45:00",
        analiseInicial: "2025-10-04 17:20:00",
        autorizacao: "2025-10-05 10:30:00",
        tmai: 1.58,
        tmar: 17.17
    },
    {
        id: "EVT-1008",
        placa: "VWX0123",
        tipo: "SINISTRO",
        status: "encerrado",
        recebimento: "2025-10-05 08:30:00",
        analiseInicial: "2025-10-05 10:15:00",
        autorizacao: "2025-10-07 14:45:00",
        tmai: 1.75,
        tmar: 52.50
    },
    {
        id: "EVT-1009",
        placa: "YZA4567",
        tipo: "SMT",
        status: "aberto",
        recebimento: "2025-10-07 13:20:00",
        analiseInicial: null,
        autorizacao: null,
        tmai: null,
        tmar: null
    },
    {
        id: "EVT-1010",
        placa: "BCD8901",
        tipo: "SINISTRO",
        status: "encerrado",
        recebimento: "2025-10-05 16:00:00",
        analiseInicial: "2025-10-05 17:45:00",
        autorizacao: "2025-10-08 09:30:00",
        tmai: 1.75,
        tmar: 63.75
    }
];

// Checklist de auditoria
const checklistData = [
    {
        secao: "Gestão de Processos",
        item: "Registro no SGA no dia do recebimento",
        conforme: true
    },
    {
        secao: "Gestão de Processos",
        item: "Análise inicial dentro de 2h",
        conforme: true
    },
    {
        secao: "Gestão de Processos",
        item: "Parecer técnico registrado no SGA",
        conforme: true
    },
    {
        secao: "Gestão de Processos",
        item: "Orçamentos validados no Cilia",
        conforme: true
    },
    {
        secao: "Gestão de Documentos",
        item: "Arquivamento correto no servidor Z:",
        conforme: true
    },
    {
        secao: "Comunicação",
        item: "Uso exclusivo de canais oficiais",
        conforme: true
    },
    {
        secao: "Jurídico",
        item: "Pareceres dentro de 48h quando aplicável",
        conforme: true
    },
    {
        secao: "Financeiro",
        item: "Programações respondidas em até 24h úteis",
        conforme: true
    },
    {
        secao: "Auditoria",
        item: "Amostragem mínima de 10% auditada",
        conforme: true
    },
    {
        secao: "Treinamento",
        item: "Reciclagem trimestral realizada",
        conforme: true
    }
];
