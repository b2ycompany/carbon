// Variáveis globais let viagemAtiva = false; let localizacaoInicial = null; let kmRodados = 0; let co2Sequestrado = 0; let creditoCarbono = 0; let saldoDinheiro = 0; // Coeficientes const co2PorKm = 0.12; // 120g de CO2 por km const valorCreditoPorKg = 0.10; // R$ 0,10 por kg de CO2 // Elementos da Dashboard const kmRodadosElement = document.getElementById('kmRodados'); const co2SequestradoElement = document.getElementById('co2Sequestrado'); const creditoCarbonoElement = document.getElementById('creditoCarbono'); const saldoDinheiroElement = document.getElementById('saldoDinheiro'); // Botões const iniciarViagemBtn = document.getElementById('iniciarViagem'); const pararViagemBtn = document.getElementById('pararViagem'); // Telas const telaCadastro = document.getElementById('cadastro'); const telaDashboard = document.getElementById('dashboard'); // Função para alternar entre telas function mostrarTela(tela) { telaCadastro.classList.add('escondido'); telaDashboard.classList.add('escondido'); tela.classList.remove('escondido'); } // Cadastro document.getElementById('cadastroForm').addEventListener('submit', (event) => { event.preventDefault(); // Aqui você pode salvar os dados do usuário (ex: localStorage) mostrarTela(telaDashboard); }); // Função para calcular a distância entre duas coordenadas (Haversine) function calcularDistancia(lat1, lon1, lat2, lon2) { const R = 6371; // Raio da Terra em km const dLat = (lat2 - lat1) * (Math.PI / 180); const dLon = (lon2 - lon1) * (Math.PI / 180); const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2); const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c; // Distância em km } // Iniciar viagem iniciarViagemBtn.addEventListener('click', () => { viagemAtiva = true; iniciarViagemBtn.disabled = true; pararViagemBtn.disabled = false; navigator.geolocation.getCurrentPosition((position) => { localizacaoInicial = { lat: position.coords.latitude, lon: position.coords.longitude }; alert('Viagem iniciada!'); }); }); // Parar viagem pararViagemBtn.addEventListener('click', () => { if (!viagemAtiva) return; navigator.geolocation.getCurrentPosition((position) => { const localizacaoFinal = { lat: position.coords.latitude, lon: position.coords.longitude }; // Calcula a distância percorrida const distancia = calcularDistancia( localizacaoInicial.lat, localizacaoInicial.lon, localizacaoFinal.lat, localizacaoFinal.lon ); // Atualiza métricas kmRodados += distancia; co2Sequestrado = kmRodados * co2PorKm; creditoCarbono = co2Sequestrado * valorCreditoPorKg; saldoDinheiro = creditoCarbono; // Atualiza a interface kmRodadosElement.textContent = `${kmRodados.toFixed(2)} km`; co2SequestradoElement.textContent = `${co2Sequestrado.toFixed(2)} kg`; creditoCarbonoElement.textContent = `${creditoCarbono.toFixed(2)}`; saldoDinheiroElement.textContent = `R$ ${saldoDinheiro.toFixed(2)}`; alert(`Viagem finalizada! Distância percorrida: ${distancia.toFixed(2)} km`); viagemAtiva = false; iniciarViagemBtn.disabled = false; pararViagemBtn.disabled = true; }); }); // Mostrar tela de cadastro inicialmente mostrarTela(telaCadastro);
