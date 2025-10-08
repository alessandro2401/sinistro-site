// Dados baseados nos POPs reais do Departamento de Evento e Sinistro
// Grupo MMB - Administradora Mutual

// KPIs com metas reais extraídas dos POPs
const kpisData = {
    tmai: {
        atual: 1.8,
        meta: 2.0, // Meta: ≤ 2 horas (conforme POP)
        historico: [1.9, 1.7, 1.8, 2.1, 1.6, 1.8, 1.7, 1.9, 1.8, 1.8, 1.7, 1.8]
    },
    tmar: {
        atual: 68.5,
        meta: 72.0, // Meta: ≤ 72 horas (3 dias Gestão Segura)
        historico: [70.2, 68.5, 71.3, 69.8, 67.5, 68.9, 70.1, 68.5, 69.2, 68.5, 67.8, 68.5]
    },
    retornoGestaoSegura: {
        atual: 2.8,
        meta: 3.0, // Meta: ≤ 3 dias (conforme POP)
        historico: [2.9, 2.7, 2.8, 3.1, 2.6, 2.8, 2.7, 2.9, 2.8, 2.8, 2.7, 2.8]
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
    pagamentoOficinas: {
        atual: 8.5,
        meta: 10.0, // Meta: ≤ 10 dias após finalização (conforme POP)
        historico: [9.2, 8.8, 8.5, 9.5, 8.2, 8.5, 9.1, 8.5, 8.9, 8.5, 8.7, 8.5]
    }
};

// Processos reais com tipos identificados nos POPs
const processosData = [
    {
        id: "EVT-2501",
        placa: "ABC1D23",
        tipo: "SINISTRO",
        responsavel: "Fernanda",
        status: "encerrado",
        recebimento: "2025-10-01 09:30:00",
        analiseInicial: "2025-10-01 11:15:00",
        autorizacao: "2025-10-03 14:20:00",
        tmai: 1.75,
        tmar: 52.08
    },
    {
        id: "SMT-1205",
        placa: "DEF5G78",
        tipo: "SMT",
        responsavel: "Amanda",
        status: "encerrado",
        recebimento: "2025-10-01 10:45:00",
        analiseInicial: "2025-10-01 12:30:00",
        autorizacao: "2025-10-04 09:15:00",
        tmai: 1.75,
        tmar: 68.75
    },
    {
        id: "EVT-2502",
        placa: "GHI9J12",
        tipo: "SINISTRO",
        responsavel: "Leonardo",
        status: "encerrado",
        recebimento: "2025-10-02 08:15:00",
        analiseInicial: "2025-10-02 10:00:00",
        autorizacao: "2025-10-05 11:30:00",
        tmai: 1.75,
        tmar: 73.50
    },
    {
        id: "VID-0845",
        placa: "JKL3M56",
        tipo: "VIDRO",
        responsavel: "Fernanda",
        status: "encerrado",
        recebimento: "2025-10-02 14:20:00",
        analiseInicial: "2025-10-02 15:45:00",
        autorizacao: "2025-10-03 16:10:00",
        tmai: 1.42,
        tmar: 24.42
    },
    {
        id: "SMT-1206",
        placa: "MNO7P90",
        tipo: "SMT",
        responsavel: "Amanda",
        status: "encerrado",
        recebimento: "2025-10-03 09:00:00",
        analiseInicial: "2025-10-03 10:50:00",
        autorizacao: "2025-10-06 13:20:00",
        tmai: 1.83,
        tmar: 74.50
    },
    {
        id: "EVT-2503",
        placa: "PQR2S45",
        tipo: "SINISTRO",
        responsavel: "Leonardo",
        status: "em-analise",
        recebimento: "2025-10-06 11:30:00",
        analiseInicial: "2025-10-06 13:15:00",
        autorizacao: null,
        tmai: 1.75,
        tmar: null
    },
    {
        id: "ASS-0312",
        placa: "STU6V89",
        tipo: "ASSISTENCIA_24H",
        responsavel: "Patricia",
        status: "encerrado",
        recebimento: "2025-10-04 15:45:00",
        analiseInicial: "2025-10-04 17:20:00",
        autorizacao: "2025-10-05 10:30:00",
        tmai: 1.58,
        tmar: 17.17
    },
    {
        id: "EVT-2504",
        placa: "VWX0Y23",
        tipo: "SINISTRO",
        responsavel: "Fernanda",
        status: "encerrado",
        recebimento: "2025-10-05 08:30:00",
        analiseInicial: "2025-10-05 10:15:00",
        autorizacao: "2025-10-07 14:45:00",
        tmai: 1.75,
        tmar: 52.50
    },
    {
        id: "SMT-1207",
        placa: "YZA4B67",
        tipo: "SMT",
        responsavel: "Amanda",
        status: "aberto",
        recebimento: "2025-10-07 13:20:00",
        analiseInicial: null,
        autorizacao: null,
        tmai: null,
        tmar: null
    },
    {
        id: "EVT-2505",
        placa: "BCD8E01",
        tipo: "SINISTRO",
        responsavel: "Leonardo",
        status: "encerrado",
        recebimento: "2025-10-05 16:00:00",
        analiseInicial: "2025-10-05 17:45:00",
        autorizacao: "2025-10-08 09:30:00",
        tmai: 1.75,
        tmar: 63.75
    }
];

// Checklist de auditoria baseado nos POPs reais
const checklistData = [
    {
        secao: "Gestão de Processos",
        item: "Registro no SGA no dia do recebimento",
        conforme: true,
        responsavel: "Todos"
    },
    {
        secao: "Gestão de Processos",
        item: "Análise inicial dentro de 2h (TMAI)",
        conforme: true,
        responsavel: "Leonardo/Fernanda"
    },
    {
        secao: "Gestão de Processos",
        item: "Parecer técnico registrado no SGA",
        conforme: true,
        responsavel: "Leonardo/Fernanda"
    },
    {
        secao: "Gestão de Processos",
        item: "Orçamentos validados no Sistema Cilia",
        conforme: true,
        responsavel: "Leonardo/Fernanda"
    },
    {
        secao: "Gestão de Processos",
        item: "Sincronização com Gestão Segura (prazo 3 dias)",
        conforme: true,
        responsavel: "Leonardo/Fernanda"
    },
    {
        secao: "Gestão de Processos",
        item: "Acompanhamento semanal de oficinas (segunda-feira)",
        conforme: true,
        responsavel: "Leonardo/Fernanda"
    },
    {
        secao: "Gestão de Documentos",
        item: "Arquivamento correto no servidor Z: (d_sinistro)",
        conforme: true,
        responsavel: "Todos"
    },
    {
        secao: "Gestão de Documentos",
        item: "Atualização de planilhas (Controle Mensal e Hinova Cash)",
        conforme: true,
        responsavel: "Leonardo/Fernanda/Amanda"
    },
    {
        secao: "Comunicação",
        item: "Uso exclusivo de canais Discord oficiais",
        conforme: true,
        responsavel: "Todos"
    },
    {
        secao: "Comunicação",
        item: "Comunicação com Financeiro via discord regulagem-financeiro",
        conforme: true,
        responsavel: "Todos"
    },
    {
        secao: "Jurídico",
        item: "Pareceres jurídicos dentro de 24-48h quando aplicável",
        conforme: true,
        responsavel: "Amanda/Fabiana"
    },
    {
        secao: "Jurídico",
        item: "Notificações e comunicados aprovados pela Diretoria",
        conforme: true,
        responsavel: "Amanda"
    },
    {
        secao: "Financeiro",
        item: "Programações de pagamento respondidas em até 24h úteis",
        conforme: true,
        responsavel: "Financeiro"
    },
    {
        secao: "Financeiro",
        item: "Pagamento de oficinas em até 10 dias após finalização",
        conforme: true,
        responsavel: "Financeiro"
    },
    {
        secao: "SMT",
        item: "Consultas no DETRAN/SENATRAN/AUTOCORP realizadas",
        conforme: true,
        responsavel: "Amanda"
    },
    {
        secao: "SMT",
        item: "Documentação completa antes de envio ao despachante",
        conforme: true,
        responsavel: "Amanda"
    },
    {
        secao: "Rastreamento",
        item: "Instalações dentro do prazo (24h Goiânia, 72h fora)",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Rastreamento",
        item: "Fechamento mensal com prestadores conferido",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Assistência 24h",
        item: "Acompanhamento diário de atendimentos",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Assistência 24h",
        item: "Saldo emergencial Banco Inter monitorado",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Vistoria",
        item: "Vistorias analisadas no prazo (15 minutos)",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Vistoria",
        item: "Documentação obrigatória conferida (CNH, CRLV, Comp. Endereço)",
        conforme: true,
        responsavel: "Patricia"
    },
    {
        secao: "Auditoria",
        item: "Auditoria mensal realizada pela Coordenação",
        conforme: true,
        responsavel: "Fabiana"
    },
    {
        secao: "Auditoria",
        item: "POPs revisados semestralmente",
        conforme: true,
        responsavel: "Fabiana"
    }
];

// Equipe do departamento
const equipeData = [
    {
        nome: "Fabiana",
        cargo: "Coordenadora de Regulagem",
        atribuicoes: [
            "Supervisionar cumprimento dos POPs",
            "Elaborar relatórios gerenciais",
            "Aprovar decisões estratégicas",
            "Coordenar auditorias",
            "Gerenciar equipe"
        ]
    },
    {
        nome: "Amanda",
        cargo: "Supervisora de Regulagem",
        atribuicoes: [
            "Supervisão administrativa",
            "Gestão de processos SMT",
            "Gestão de Leilão",
            "Atividades com Jurídico",
            "Hinova Cash"
        ]
    },
    {
        nome: "Leonardo",
        cargo: "Supervisor de Regulagem",
        atribuicoes: [
            "Suporte operacional",
            "Conferência inicial",
            "Análise técnica (Cilia)",
            "Autorização de reparos",
            "Análise de reembolso"
        ]
    },
    {
        nome: "Fernanda",
        cargo: "Analista de Regulagem",
        atribuicoes: [
            "Conferência inicial",
            "Análise técnica (Cilia)",
            "Sincronização Gestão Segura",
            "Autorização de reparos",
            "Análise Regional GOYAZ"
        ]
    },
    {
        nome: "Patricia",
        cargo: "Analista Multifuncional",
        atribuicoes: [
            "Gestão de Rastreamento",
            "Gestão de Assistência 24h",
            "Análise de Vistorias",
            "Fechamento com prestadores",
            "Gestão de boletos"
        ]
    }
];

// Sistemas utilizados
const sistemasData = [
    {
        nome: "SGA (Hinova Soluções Digitais)",
        tipo: "Sistema Principal",
        funcao: "Gestão completa de processos"
    },
    {
        nome: "Cilia",
        tipo: "Sistema de Análise",
        funcao: "Análise técnica e regulação de danos"
    },
    {
        nome: "Gestão Segura",
        tipo: "Sistema de Orçamentação",
        funcao: "Orçamentação e negociação com oficinas"
    },
    {
        nome: "Visto",
        tipo: "Sistema de Vistoria",
        funcao: "Registro e consulta de vistorias"
    },
    {
        nome: "SGR",
        tipo: "Sistema de Rastreamento",
        funcao: "Gestão de rastreadores"
    },
    {
        nome: "Power CRM",
        tipo: "CRM",
        funcao: "Gestão de leads e vistorias"
    },
    {
        nome: "Clicksign",
        tipo: "Assinatura Digital",
        funcao: "Assinatura de documentos"
    },
    {
        nome: "Infinity System (WebAssist)",
        tipo: "Assistência 24h",
        funcao: "Gestão de assistência 24h"
    }
];

// Empresas parceiras
const parceirosData = [
    {
        nome: "Gestão Segura",
        tipo: "Orçamentação",
        prazo: "3 dias"
    },
    {
        nome: "Pooltrack",
        tipo: "Rastreamento",
        regiao: "Goiânia"
    },
    {
        nome: "CGE Mossoró",
        tipo: "Rastreamento",
        regiao: "Rio Grande do Norte"
    },
    {
        nome: "GS Proseg",
        tipo: "Rastreamento",
        regiao: "Paraíba"
    },
    {
        nome: "Hinova Localização Garantida",
        tipo: "Rastreamento",
        regiao: "São Paulo e Rio de Janeiro"
    },
    {
        nome: "Paser Sab Brasil",
        tipo: "Rastreamento",
        regiao: "Fortaleza-CE"
    },
    {
        nome: "Infinity",
        tipo: "Assistência 24h",
        regiao: "Nacional"
    },
    {
        nome: "COPART",
        tipo: "Leilão",
        regiao: "Nacional"
    }
];
