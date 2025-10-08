// Script principal para o site POP Evento e Sinistro

// Função para formatar data
function formatarData(dataStr) {
    if (!dataStr) return '-';
    const data = new Date(dataStr.replace(' ', 'T'));
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Função para formatar número
function formatarNumero(num, decimais = 2) {
    if (num === null || num === undefined) return '-';
    return num.toFixed(decimais);
}

// Função para obter classe de status
function getStatusClass(status) {
    const classes = {
        'encerrado': 'status-encerrado',
        'aberto': 'status-aberto',
        'em-analise': 'status-em-analise'
    };
    return classes[status] || 'status-aberto';
}

// Função para obter texto de status
function getStatusText(status) {
    const texts = {
        'encerrado': 'Encerrado',
        'aberto': 'Aberto',
        'em-analise': 'Em Análise'
    };
    return texts[status] || status.toUpperCase();
}

// Preencher tabela de processos
function preencherTabelaProcessos() {
    const tbody = document.getElementById('processos-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    processosData.forEach(processo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${processo.id}</strong></td>
            <td>${processo.placa}</td>
            <td>${processo.tipo}</td>
            <td><span class="status-badge ${getStatusClass(processo.status)}">${getStatusText(processo.status)}</span></td>
            <td>${formatarData(processo.recebimento)}</td>
            <td>${formatarData(processo.analiseInicial)}</td>
            <td>${formatarData(processo.autorizacao)}</td>
            <td>${formatarNumero(processo.tmai)}</td>
            <td>${formatarNumero(processo.tmar)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Preencher checklist de auditoria
function preencherChecklist() {
    const container = document.getElementById('checklist-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    checklistData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'checklist-item';
        div.innerHTML = `
            <div class="checklist-icon">${item.conforme ? '✅' : '❌'}</div>
            <div class="checklist-content">
                <div class="checklist-section">${item.secao}</div>
                <div class="checklist-text">${item.item}</div>
            </div>
        `;
        container.appendChild(div);
    });
}

// Calcular e atualizar círculo de conformidade
function atualizarCirculoConformidade() {
    const conformes = checklistData.filter(item => item.conforme).length;
    const total = checklistData.length;
    const percentual = (conformes / total) * 100;
    
    // Atualizar texto
    const scoreValue = document.querySelector('.score-value');
    if (scoreValue) {
        scoreValue.textContent = `${percentual.toFixed(0)}%`;
    }
    
    // Atualizar círculo SVG
    const scoreFill = document.querySelector('.score-fill');
    if (scoreFill) {
        const circumference = 2 * Math.PI * 45; // raio = 45
        const offset = circumference - (percentual / 100) * circumference;
        scoreFill.style.strokeDashoffset = offset;
    }
}

// Smooth scroll para links de navegação
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Highlight do link ativo na navegação
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNav() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
}

// Animação de números ao entrar na viewport
function initCounterAnimation() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => observer.observe(stat));
}

// Inicializar tudo quando o DOM estiver pronto
function init() {
    preencherTabelaProcessos();
    preencherChecklist();
    atualizarCirculoConformidade();
    initSmoothScroll();
    initActiveNavLink();
    initCounterAnimation();
    
    console.log('✅ POP Evento e Sinistro - Site inicializado com sucesso!');
    console.log(`📊 ${processosData.length} processos carregados`);
    console.log(`✅ ${checklistData.length} itens de auditoria carregados`);
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
