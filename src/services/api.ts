// Camada de dados local da demonstração DM Motos.
// Todos os registros são fictícios e ficam apenas no navegador atual.
type Row = Record<string, any>;
const STORAGE_KEY = 'dmotos-demo-data-v1';
const USER_ID = 'demo-admin';

const now = new Date();
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000).toISOString();
const id = () => globalThis.crypto?.randomUUID?.() ?? `demo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const seed: Record<string, Row[]> = {
  clientes: [
    { id: 'cli-001', user_id: USER_ID, nome: 'Rafael Mendes', telefone: '(11) 98845-1200', email: 'rafael.mendes@example.com', endereco: 'Rua das Palmeiras, 120 - Centro', observacoes: 'Prefere contato por WhatsApp.', created_at: daysAgo(40), updated_at: daysAgo(4) },
    { id: 'cli-002', user_id: USER_ID, nome: 'Camila Oliveira', telefone: '(11) 97731-8842', email: 'camila.oliveira@example.com', endereco: 'Av. Brasil, 450 - Jardim América', observacoes: '', created_at: daysAgo(32), updated_at: daysAgo(10) },
    { id: 'cli-003', user_id: USER_ID, nome: 'Marcos Ferreira', telefone: '(11) 99602-7711', email: 'marcos.ferreira@example.com', endereco: 'Rua São Jorge, 88 - Vila Nova', observacoes: 'Cliente recorrente.', created_at: daysAgo(24), updated_at: daysAgo(2) },
    { id: 'cli-004', user_id: USER_ID, nome: 'Juliana Costa', telefone: '(11) 99114-6632', email: 'juliana.costa@example.com', endereco: 'Rua do Comércio, 32 - Centro', observacoes: '', created_at: daysAgo(18), updated_at: daysAgo(8) },
    { id: 'cli-005', user_id: USER_ID, nome: 'André Santos', telefone: '(11) 98420-5566', email: 'andre.santos@example.com', endereco: 'Av. Independência, 710 - Parque Sul', observacoes: '', created_at: daysAgo(8), updated_at: daysAgo(1) },
  ],
  motos: [
    { id: 'moto-001', user_id: USER_ID, cliente_id: 'cli-001', marca: 'Honda', modelo: 'CG 160 Fan', ano: 2022, cor: 'Vermelha', placa: 'ABC1D23', km: 18450, observacoes: '', created_at: daysAgo(39), updated_at: daysAgo(4) },
    { id: 'moto-002', user_id: USER_ID, cliente_id: 'cli-002', marca: 'Yamaha', modelo: 'Fazer 250', ano: 2021, cor: 'Azul', placa: 'DEF4G56', km: 26300, observacoes: 'Revisão periódica.', created_at: daysAgo(31), updated_at: daysAgo(10) },
    { id: 'moto-003', user_id: USER_ID, cliente_id: 'cli-003', marca: 'Honda', modelo: 'CB 300F Twister', ano: 2023, cor: 'Cinza', placa: 'GHI7J89', km: 12100, observacoes: '', created_at: daysAgo(23), updated_at: daysAgo(2) },
    { id: 'moto-004', user_id: USER_ID, cliente_id: 'cli-004', marca: 'Yamaha', modelo: 'Factor 150', ano: 2020, cor: 'Preta', placa: 'JKL1M23', km: 34700, observacoes: '', created_at: daysAgo(17), updated_at: daysAgo(8) },
    { id: 'moto-005', user_id: USER_ID, cliente_id: 'cli-005', marca: 'Honda', modelo: 'XRE 300', ano: 2022, cor: 'Branca', placa: 'MNO4P56', km: 22100, observacoes: '', created_at: daysAgo(7), updated_at: daysAgo(1) },
  ],
  pecas: [
    { id: 'pec-001', user_id: USER_ID, nome: 'Óleo 10W30 semissintético', modelo: '1 litro', compatibilidade: 'Honda / Yamaha', categoria: 'Lubrificantes', sku: 'LUB-001', quantidade: 18, estoque_minimo: 8, preco: 39.90, preco_custo: 25, fornecedor: 'Distribuidora Central', created_at: daysAgo(60), updated_at: daysAgo(3) },
    { id: 'pec-002', user_id: USER_ID, nome: 'Filtro de óleo', modelo: 'HF-204', compatibilidade: 'CG 160 / CB 300', categoria: 'Filtros', sku: 'FLT-002', quantidade: 4, estoque_minimo: 8, preco: 28.50, preco_custo: 16, fornecedor: 'Moto Peças Brasil', created_at: daysAgo(50), updated_at: daysAgo(2) },
    { id: 'pec-003', user_id: USER_ID, nome: 'Pastilha de freio dianteira', modelo: 'Cerâmica', compatibilidade: 'Fazer 250', categoria: 'Freios', sku: 'FRE-003', quantidade: 2, estoque_minimo: 6, preco: 75, preco_custo: 42, fornecedor: 'Moto Peças Brasil', created_at: daysAgo(45), updated_at: daysAgo(1) },
    { id: 'pec-004', user_id: USER_ID, nome: 'Kit relação', modelo: '428H T', compatibilidade: 'CG 160', categoria: 'Transmissão', sku: 'TRA-004', quantidade: 9, estoque_minimo: 4, preco: 189.90, preco_custo: 120, fornecedor: 'Distribuidora Central', created_at: daysAgo(40), updated_at: daysAgo(8) },
    { id: 'pec-005', user_id: USER_ID, nome: 'Vela de ignição', modelo: 'CPR8EA-9', compatibilidade: 'Honda 150/160', categoria: 'Ignição', sku: 'IGN-005', quantidade: 15, estoque_minimo: 5, preco: 32, preco_custo: 18, fornecedor: 'Auto Center', created_at: daysAgo(35), updated_at: daysAgo(5) },
    { id: 'pec-006', user_id: USER_ID, nome: 'Câmara de ar 18', modelo: 'Aro 18', compatibilidade: 'CG / Factor', categoria: 'Pneus e câmaras', sku: 'PNE-006', quantidade: 3, estoque_minimo: 5, preco: 48, preco_custo: 29, fornecedor: 'Auto Center', created_at: daysAgo(30), updated_at: daysAgo(2) },
    { id: 'pec-007', user_id: USER_ID, nome: 'Cabo de embreagem', modelo: 'Original', compatibilidade: 'CG 160', categoria: 'Cabos', sku: 'CAB-007', quantidade: 7, estoque_minimo: 3, preco: 42.90, preco_custo: 23, fornecedor: 'Distribuidora Central', created_at: daysAgo(22), updated_at: daysAgo(7) },
    { id: 'pec-008', user_id: USER_ID, nome: 'Lâmpada LED H4', modelo: '6000K', compatibilidade: 'Universal', categoria: 'Elétrica', sku: 'ELE-008', quantidade: 1, estoque_minimo: 4, preco: 89.90, preco_custo: 55, fornecedor: 'Auto Center', created_at: daysAgo(15), updated_at: daysAgo(1) },
  ],
  ordens_servico: [
    { id: 'os-001', user_id: USER_ID, numero: 'OS-2026-0142', cliente_id: 'cli-001', moto_id: 'moto-001', problema_relatado: 'Revisão geral e troca de óleo.', descricao_servico: 'Revisão de rotina, inspeção de freios e relação.', status: 'em_andamento', valor_mao_obra: 120, valor_total: 188.40, created_at: daysAgo(1), updated_at: daysAgo(1) },
    { id: 'os-002', user_id: USER_ID, numero: 'OS-2026-0141', cliente_id: 'cli-002', moto_id: 'moto-002', problema_relatado: 'Ruído ao acionar o freio dianteiro.', descricao_servico: 'Substituição das pastilhas e limpeza do conjunto.', status: 'aberta', valor_mao_obra: 90, valor_total: 165, created_at: daysAgo(2), updated_at: daysAgo(2) },
    { id: 'os-003', user_id: USER_ID, numero: 'OS-2026-0140', cliente_id: 'cli-003', moto_id: 'moto-003', problema_relatado: 'Motor falhando em baixa rotação.', descricao_servico: 'Troca de vela e diagnóstico de alimentação.', status: 'finalizada', valor_mao_obra: 110, valor_total: 142, created_at: daysAgo(5), updated_at: daysAgo(3), finalizado_em: daysAgo(3) },
    { id: 'os-004', user_id: USER_ID, numero: 'OS-2026-0139', cliente_id: 'cli-004', moto_id: 'moto-004', problema_relatado: 'Pneu traseiro perdendo pressão.', descricao_servico: 'Inspeção e substituição da câmara.', status: 'finalizada', valor_mao_obra: 55, valor_total: 103, created_at: daysAgo(8), updated_at: daysAgo(7), finalizado_em: daysAgo(7) },
    { id: 'os-005', user_id: USER_ID, numero: 'OS-2026-0138', cliente_id: 'cli-005', moto_id: 'moto-005', problema_relatado: 'Barulho na transmissão.', descricao_servico: 'Inspeção do conjunto de transmissão.', status: 'cancelada', valor_mao_obra: 0, valor_total: 0, created_at: daysAgo(12), updated_at: daysAgo(11) },
  ],
  ordem_itens: [
    { id: 'item-001', ordem_id: 'os-001', peca_id: 'pec-001', quantidade: 1, preco_unitario: 39.90, subtotal: 39.90 },
    { id: 'item-002', ordem_id: 'os-001', peca_id: 'pec-002', quantidade: 1, preco_unitario: 28.50, subtotal: 28.50 },
    { id: 'item-003', ordem_id: 'os-003', peca_id: 'pec-005', quantidade: 1, preco_unitario: 32, subtotal: 32 },
    { id: 'item-004', ordem_id: 'os-004', peca_id: 'pec-006', quantidade: 1, preco_unitario: 48, subtotal: 48 },
  ],
  categorias_peca: ['Lubrificantes', 'Filtros', 'Freios', 'Transmissão', 'Ignição', 'Pneus e câmaras', 'Cabos', 'Elétrica'].map((nome, i) => ({ id: `cat-${i+1}`, user_id: USER_ID, nome, created_at: daysAgo(30-i), updated_at: daysAgo(30-i) })),
  configuracoes: [{ id: 'config-demo', user_id: USER_ID, nome_oficina: 'DM Motos - Peças e Serviços', notificacoes_ativas: true, alerta_estoque_ativo: true, limite_estoque_baixo: 5, updated_at: daysAgo(1) }],
  fotos: [],
};

function readStore(): Record<string, Row[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...seed, ...JSON.parse(raw) };
  } catch (error) {
    console.warn('[demo] Não foi possível ler os dados locais; restaurando dados de exemplo.', error);
  }
  const initial = structuredClone(seed);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}
function writeStore(store: Record<string, Row[]>) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
  catch { throw new Error('Armazenamento do navegador cheio. Remova algumas fotos ou redefina a demonstração.'); }
}
function table<T extends Row = Row>(name: string): T[] { return readStore()[name] as T[]; }
function saveTable(name: string, rows: Row[]) {
  const store = readStore(); store[name] = rows; writeStore(store);
}
function createRow<T extends Row>(data: T): T {
  const stamp = new Date().toISOString();
  return { id: id(), user_id: USER_ID, created_at: stamp, updated_at: stamp, ...data } as T;
}
function byNewest(rows: Row[]) { return [...rows].sort((a,b) => (b.created_at || '').localeCompare(a.created_at || '')); }
function withCliente(moto: Row) {
  const cliente = table('clientes').find(c => c.id === moto.cliente_id);
  return { ...moto, clienteNome: cliente?.nome || '', clientes: cliente ? { nome: cliente.nome, telefone: cliente.telefone } : null };
}
function withOrdemRelations(ordem: Row) {
  const cliente = table('clientes').find(c => c.id === ordem.cliente_id);
  const moto = table('motos').find(m => m.id === ordem.moto_id);
  return {
    ...ordem,
    clienteNome: cliente?.nome || '', clienteTelefone: cliente?.telefone || '',
    motoDescricao: moto ? `${moto.marca} ${moto.modelo} ${moto.ano || ''}`.trim() : '',
    motoPlaca: moto?.placa || '',
    criadoPor: 'Administrador da demonstração',
    clientes: cliente ? { nome: cliente.nome, telefone: cliente.telefone } : null,
    motos: moto ? { marca: moto.marca, modelo: moto.modelo, ano: moto.ano, placa: moto.placa } : null,
    profiles: { nome: 'Administrador da demonstração' },
    itens: table('ordem_itens').filter(i => i.ordem_id === ordem.id).map(i => {
      const peca = table('pecas').find(p => p.id === i.peca_id);
      return { ...i, pecaNome: peca?.nome || '', pecas: peca ? { nome: peca.nome } : null, subtotal: Number(i.preco_unitario || 0) * Number(i.quantidade || 0) };
    }),
  };
}
function statusPeca(p: Row) {
  return { ...p, statusEstoque: p.quantidade <= (p.estoque_minimo || 0) * 0.5 ? 'critico' : p.quantidade <= (p.estoque_minimo || 0) ? 'baixo' : 'normal' };
}
function removeOrdemItens(ordemId: string) { saveTable('ordem_itens', table('ordem_itens').filter(i => i.ordem_id !== ordemId)); }
function ajustarEstoque(pecaId: string, delta: number) {
  const rows = table('pecas');
  const peca = rows.find(p => p.id === pecaId);
  if (!peca) throw new Error('Peça não encontrada.');
  if (peca.quantidade + delta < 0) throw new Error(`Estoque insuficiente para "${peca.nome}".`);
  peca.quantidade += delta; peca.updated_at = new Date().toISOString(); saveTable('pecas', rows);
}

export const clienteService = {
  async listar() { return [...table('clientes')].sort((a,b) => a.nome.localeCompare(b.nome)); },
  async buscar(id: string) { const row = table('clientes').find(c => c.id === id); if (!row) throw new Error('Cliente não encontrado.'); return row; },
  async criar(form: Row) { const row = createRow(form); saveTable('clientes', [...table('clientes'), row]); return row; },
  async atualizar(id: string, form: Row) { const rows = table('clientes'); const i = rows.findIndex(r => r.id === id); if (i < 0) throw new Error('Cliente não encontrado.'); rows[i] = { ...rows[i], ...form, id, updated_at: new Date().toISOString() }; saveTable('clientes', rows); return rows[i]; },
  async deletar(id: string) { saveTable('clientes', table('clientes').filter(r => r.id !== id)); },
};
export const motoService = {
  async listar() { return byNewest(table('motos')).map(withCliente); },
  async listarPorCliente(clienteId: string) { return byNewest(table('motos').filter(m => m.cliente_id === clienteId)).map(withCliente); },
  async buscar(id: string) { const row = table('motos').find(m => m.id === id); if (!row) throw new Error('Moto não encontrada.'); return withCliente(row); },
  async criar(form: Row) { const row = createRow(form); saveTable('motos', [...table('motos'), row]); return row; },
  async atualizar(id: string, form: Row) { const rows = table('motos'); const i = rows.findIndex(r => r.id === id); if (i < 0) throw new Error('Moto não encontrada.'); rows[i] = { ...rows[i], ...form, id, updated_at: new Date().toISOString() }; saveTable('motos', rows); return rows[i]; },
  async deletar(id: string) { saveTable('motos', table('motos').filter(r => r.id !== id)); },
};
export const pecaService = {
  async listar() { return [...table('pecas')].sort((a,b) => a.nome.localeCompare(b.nome)).map(statusPeca); },
  async criar(form: Row) { const row = createRow({ estoque_minimo: 5, ...form }); saveTable('pecas', [...table('pecas'), row]); return statusPeca(row); },
  async atualizar(id: string, form: Row) { const rows = table('pecas'); const i = rows.findIndex(r => r.id === id); if (i < 0) throw new Error('Peça não encontrada.'); rows[i] = { ...rows[i], ...form, id, updated_at: new Date().toISOString() }; saveTable('pecas', rows); return statusPeca(rows[i]); },
  async deletar(id: string) { saveTable('pecas', table('pecas').filter(r => r.id !== id)); },
  async buscarOSVinculadas(pecaId: string) { return table('ordem_itens').filter(i => i.peca_id === pecaId).map(item => { const os = table('ordens_servico').find(o => o.id === item.ordem_id); const cliente = os && table('clientes').find(c => c.id === os.cliente_id); return { ordemId: item.ordem_id, numero: os?.numero || '', status: os?.status || '', clienteNome: cliente?.nome || '', quantidade: item.quantidade }; }); },
  async deletarForce(id: string) { saveTable('ordem_itens', table('ordem_itens').filter(i => i.peca_id !== id)); saveTable('pecas', table('pecas').filter(p => p.id !== id)); },
  async entradaEstoque(pecaId: string, quantidade: number) { ajustarEstoque(pecaId, Math.max(0, Number(quantidade))); return table('pecas').find(p => p.id === pecaId); },
};
export const ordemService = {
  async listar() { return byNewest(table('ordens_servico')).map(withOrdemRelations); },
  async listarPorMoto(motoId: string) { return byNewest(table('ordens_servico').filter(o => o.moto_id === motoId)).map(withOrdemRelations); },
  async listarPorCliente(clienteId: string) { return byNewest(table('ordens_servico').filter(o => o.cliente_id === clienteId)).map(withOrdemRelations); },
  async buscar(id: string) { const row = table('ordens_servico').find(o => o.id === id); if (!row) throw new Error('Ordem de serviço não encontrada.'); return withOrdemRelations(row); },
  async criar(form: Row) {
    for (const item of form.itens || []) { const p = table('pecas').find(x => x.id === item.peca_id); if (!p || p.quantidade < item.quantidade) throw new Error(`Estoque insuficiente para "${p?.nome || 'peça'}".`); }
    const rows = table('ordens_servico');
    const seq = rows.length + 143;
    const valorPecas = (form.itens || []).reduce((t: number, i: Row) => t + Number(i.preco_unitario) * Number(i.quantidade), 0);
    const stamp = new Date().toISOString();
    const ordem = createRow({ numero: `OS-${new Date().getFullYear()}-${String(seq).padStart(4,'0')}`, cliente_id: form.cliente_id, moto_id: form.moto_id, problema_relatado: form.problema_relatado, descricao_servico: form.descricao_servico || '', status: 'aberta', valor_mao_obra: Number(form.valor_mao_obra || 0), valor_total: valorPecas + Number(form.valor_mao_obra || 0), created_at: stamp, updated_at: stamp });
    saveTable('ordens_servico', [...rows, ordem]);
    const itens = (form.itens || []).map((item: Row) => createRow({ ordem_id: ordem.id, peca_id: item.peca_id, quantidade: Number(item.quantidade), preco_unitario: Number(item.preco_unitario), subtotal: Number(item.preco_unitario) * Number(item.quantidade) }));
    saveTable('ordem_itens', [...table('ordem_itens'), ...itens]);
    itens.forEach(item => ajustarEstoque(item.peca_id, -item.quantidade));
    return withOrdemRelations(ordem);
  },
  async atualizar(id: string, form: Row) { const rows = table('ordens_servico'); const i = rows.findIndex(r => r.id === id); if (i < 0) throw new Error('Ordem não encontrada.'); rows[i] = { ...rows[i], ...form, id, updated_at: new Date().toISOString() }; saveTable('ordens_servico', rows); return withOrdemRelations(rows[i]); },
  async atualizarStatus(id: string, status: string) { const patch: Row = { status, updated_at: new Date().toISOString() }; if (status === 'finalizada') patch.finalizado_em = new Date().toISOString(); return this.atualizar(id, patch); },
  async atualizarItens(ordemId: string, itens: Row[], novoTotal: number) {
    const old = table('ordem_itens').filter(i => i.ordem_id === ordemId);
    const available = new Map(table('pecas').map(p => [p.id, Number(p.quantidade || 0)]));
    old.forEach(item => available.set(item.peca_id, (available.get(item.peca_id) || 0) + Number(item.quantidade || 0)));
    for (const item of itens) {
      const p = table('pecas').find(x => x.id === item.peca_id);
      if (!p || (available.get(item.peca_id) || 0) < Number(item.quantidade)) throw new Error(`Estoque insuficiente para "${p?.nome || 'peça'}".`);
      available.set(item.peca_id, (available.get(item.peca_id) || 0) - Number(item.quantidade));
    }
    old.forEach(item => ajustarEstoque(item.peca_id, item.quantidade));
    saveTable('ordem_itens', table('ordem_itens').filter(i => i.ordem_id !== ordemId));
    const fresh = itens.map(item => createRow({ ordem_id: ordemId, peca_id: item.peca_id, quantidade: Number(item.quantidade), preco_unitario: Number(item.preco_unitario), subtotal: Number(item.preco_unitario) * Number(item.quantidade) }));
    saveTable('ordem_itens', [...table('ordem_itens'), ...fresh]);
    fresh.forEach(item => ajustarEstoque(item.peca_id, -item.quantidade));
    await this.atualizar(ordemId, { valor_total: novoTotal });
  },
  async deletar(id: string) { removeOrdemItens(id); saveTable('ordens_servico', table('ordens_servico').filter(o => o.id !== id)); },
};
export const dashboardService = {
  async obter() {
    const clientes = table('clientes'), pecas = table('pecas'), ordens = byNewest(table('ordens_servico')).slice(0,10).map(withOrdemRelations);
    const alertas = pecas.filter(p => p.quantidade <= (p.estoque_minimo || 0)).map(p => ({ pecaId: p.id, pecaNome: p.nome, quantidade: p.quantidade, estoqueMinimo: p.estoque_minimo, status: p.quantidade <= (p.estoque_minimo || 0) * 0.5 ? 'critico' as const : 'baixo' as const })).sort((a,b) => a.quantidade-b.quantidade);
    return { totalClientes: clientes.length, totalItensEstoque: pecas.reduce((t,p) => t + Number(p.quantidade || 0),0), totalMotosNaOficina: new Set(ordens.filter(o => o.status === 'aberta' || o.status === 'em_andamento').map(o => o.moto_id)).size, itensComEstoqueBaixo: alertas, ordensRecentes: ordens };
  },
};
export const configService = {
  async obter() { return table('configuracoes')[0] || createRow({ nome_oficina: 'DM Motos - Peças e Serviços', notificacoes_ativas: true, alerta_estoque_ativo: true, limite_estoque_baixo: 5 }); },
  async atualizar(form: Row) { const rows = table('configuracoes'); const current = rows[0] || {}; const updated = { ...current, ...form, id: current.id || id(), user_id: USER_ID, updated_at: new Date().toISOString() }; saveTable('configuracoes', [updated]); return updated; },
};
export const vinculoService = {
  async osDeCliente(clienteId: string) { return table('ordens_servico').filter(o => o.cliente_id === clienteId).map(o => ({ id: o.id, numero: o.numero, status: o.status })); },
  async osDeMoto(motoId: string) { return table('ordens_servico').filter(o => o.moto_id === motoId).map(o => ({ id: o.id, numero: o.numero, status: o.status })); },
  async deletarClienteForce(clienteId: string) { const motoIds = table('motos').filter(m => m.cliente_id === clienteId).map(m => m.id); const os = table('ordens_servico').filter(o => o.cliente_id === clienteId || motoIds.includes(o.moto_id)); os.forEach(o => removeOrdemItens(o.id)); saveTable('ordens_servico', table('ordens_servico').filter(o => !os.some(x => x.id === o.id))); saveTable('motos', table('motos').filter(m => m.cliente_id !== clienteId)); saveTable('clientes', table('clientes').filter(c => c.id !== clienteId)); },
  async deletarMotoForce(motoId: string) { const os = table('ordens_servico').filter(o => o.moto_id === motoId); os.forEach(o => removeOrdemItens(o.id)); saveTable('ordens_servico', table('ordens_servico').filter(o => o.moto_id !== motoId)); saveTable('motos', table('motos').filter(m => m.id !== motoId)); },
};
export const categoriaService = {
  async listar() { return [...table('categorias_peca')].sort((a,b) => a.nome.localeCompare(b.nome)); },
  async criar(nome: string) { const row = createRow({ nome }); saveTable('categorias_peca', [...table('categorias_peca'), row]); return row; },
  async atualizar(id: string, nome: string) { const rows = table('categorias_peca'); const i = rows.findIndex(c => c.id === id); if (i < 0) throw new Error('Categoria não encontrada.'); rows[i] = { ...rows[i], nome, updated_at: new Date().toISOString() }; saveTable('categorias_peca', rows); return rows[i]; },
  async deletar(id: string) { saveTable('categorias_peca', table('categorias_peca').filter(c => c.id !== id)); },
};
export const fotoService = {
  async upload(ordemId: string, file: File, tipo: 'problema' | 'servico'): Promise<string> {
    if (file.size > 1024 * 1024) throw new Error('Na demonstração, cada foto pode ter no máximo 1 MB.');
    const dataUrl = await new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = () => reject(new Error('Não foi possível ler a imagem.')); reader.readAsDataURL(file); });
    const row = createRow({ ordem_id: ordemId, nome: file.name, tipo, url: dataUrl, path: `${ordemId}/${tipo}_${Date.now()}` });
    saveTable('fotos', [...table('fotos'), row]);
    return dataUrl;
  },
  async listar(ordemId: string) { return table('fotos').filter(f => f.ordem_id === ordemId).map(f => ({ path: f.path, url: f.url, tipo: f.tipo })); },
  async deletar(path: string) { saveTable('fotos', table('fotos').filter(f => f.path !== path)); },
};

// A demonstração é isolada por navegador. Esta ação restaura os registros fictícios.
export function resetDemoData() { writeStore(structuredClone(seed)); }
