document.addEventListener("DOMContentLoaded", () => {
    const skills = [
      "🔐 VPNs (OpenVPN, WireGuard)",
      "🌐 Redes (iptables, routing, DHCP, DNS, NAT, firewalls)",
      "🐧 Sistemas Linux (Ubuntu, Kali Linux)",
      "🧱 Administração de Servidores (Apache, Samba, SSH)",
      "📦 Virtualização (VirtualBox)",
      "💾 Bases de Dados (MySQL)",
      "🌍 Desenvolvimento Web (PHP, HTML, CSS)",
      "📊 Análise Estatística (R, JASP)"
    ];
  
    const projects = [
      "🔧 Infraestruturas VPN Seguras: OpenVPN Access Server e WireGuard em site-to-site.",
      "🧱 Firewalls Linux: Topologias com múltiplas firewalls, DMZ e controlo de tráfego.",
      "🌐 Serviços Linux: DHCP, Apache, Samba, routing em redes complexas.",
      "📊 Análise de Dados: Projetos estatísticos sobre temas como Perturbação Obsessivo-Compulsiva (OCD), com visualização de dados e testes de hipóteses."
    ];
  
    const explore = [
      "🧠 Pentesting e Hacking Ético",
      "🛡️ Segurança de Aplicações Web",
      "🔍 Análise Forense e Resposta a Incidentes",
      "🐍 Automação com Python para Cibersegurança"
    ];
  
    // Função para preencher listas
    const fillList = (listId, items) => {
      const ul = document.getElementById(listId);
      items.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item bg-dark text-light";
        li.textContent = item;
        ul.appendChild(li);
      });
    };
  
    // Preenche as listas
    fillList("skillsList", skills);
    fillList("projectsList", projects);
    fillList("exploreList", explore);
  
    // Tema claro/escuro
    const toggleThemeBtn = document.getElementById("toggleThemeBtn");
    toggleThemeBtn.addEventListener("click", () => {
      const body = document.body;
  
      if (body.classList.contains("dark-mode")) {
        // Se já estiver no modo escuro, muda para claro
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleThemeBtn.textContent = "🌙 Modo Escuro";
      } else {
        // Se estiver no modo claro, muda para escuro
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        toggleThemeBtn.textContent = "☀️ Modo Claro";
      }
    });
  
    // Definir o modo inicial (escuro ou claro)
    const initialMode = localStorage.getItem("theme") || "dark";
    document.body.classList.add(initialMode + "-mode");
    toggleThemeBtn.textContent = initialMode === "dark" ? "🌙 Modo Claro" : "☀️ Modo Escuro";
  });
  