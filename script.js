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
      "📊 Análise de Dados: OCD, visualização e testes estatísticos."
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
      document.body.classList.toggle("light-mode");
      toggleThemeBtn.textContent = document.body.classList.contains("light-mode") ? "🌙 Modo Escuro" : "☀️ Modo Claro";
    });
  });
  