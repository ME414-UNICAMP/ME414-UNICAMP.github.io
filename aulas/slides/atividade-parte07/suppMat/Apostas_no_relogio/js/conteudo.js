	var codigo_do_experimento = "apostas_no_relogio";
	var nome_do_experimento = "Apostas no relógio";
	var tipo = "experimento";
	
	
	var Impressao = $H({
		experimento: {
			titulo: 'O Experimento',
			arquivo: 'o_experimento.pdf',
			conteudo: 'Essa é a versão do Experimento adequada para impressão caseira (formato PDF).'
		},
		folha_aluno: {
			titulo: 'Folha do aluno',
			arquivo: 'folha_do_aluno.pdf',
			conteudo: 'Para ser impresso, fotocopiado e distribuído aos alunos, mas pode ser visualizado também na tela.'
		},/*
		mapa_conceitual: {
			titulo: 'Mapa conceitual',
			arquivo: 'Mapa_Conceitual.pdf',
			conteudo: 'Não foi escrito ainda.'
		},*/
		guia_professor: {
			titulo: 'Guia do Professor',
			arquivo: 'guia_do_professor.pdf',
			conteudo: 'Essa é a versão do Guia do Professor adequada para impressão caseira (formato PDF).'
		}
	});
	var Visualizacao = $H({
		experimento: {
			titulo: 'O Experimento',
			arquivo: 'o_experimento.pdf',
			conteudo: 'Essa é a versão do Experimento adequada para visualização em tela (formato PDF).'
		},
		guia_professor: {
			titulo: 'Guia do Professor',
			arquivo: 'guia_do_professor.pdf',
			conteudo: 'Essa é a versão do Guia do Professor adequada para visualização em tela (formato PDF).'
		}
	});
	var FichaTecnica = $H({
	
		tema: {
			titulo: 'Tema',
			conteudo: 'Análise de dados e probabilidade'
		},
		sinopse: {
			titulo: 'Sinopse',
			conteudo: 'Este experimento trata de um jogo muito simples: sorteamos dois números de 0 a 59 e, utilizando dois ponteiros em um relógio, representamos os números sorteados como seus minutos. Dessa forma, o relógio será dividido em duas regiões (setores circulares).<br/>Jogaremos com dois times: um deles vence se a marca de 0 min estiver na maior região e o outro, se estiver na menor. O que queremos saber é se algum dos times tem mais chances de vencer do que outro.'
		},
		conteudos: {
			titulo: 'Conteúdo',
			conteudo: 'Probabilidade: Interpretação geométrica de probabilidade, Representação gráfica, Independência.'
		},
		objetivos: {
			titulo: 'Objetivos',
			conteudo: 'Capacitar o aluno a tomar decisões de acordo com o resultado de um experimento aleatório;<br/>Aplicar o conceito de interpretação geométrica de probabilidade.'
		},
		duracao: {
			titulo: 'Duração',
			conteudo: 'Uma aula dupla.'
		},
		recursos: {
			titulo: 'Recursos relacionados',
			conteudo: 'Vídeo: O Crime da Rua do Gasômetro;<br />Áudio: Fraude 171;<br/>Software: Probabilidade com Urnas'
		}
	});
	
	var como_usar = 'Aqui você encontra três arquivos: O Experimento, a Folha do Aluno e o Guia do Professor. O Experimento traz as orientações básicas para que as atividades propostas possam ser executadas em sala de aula. A Folha do Aluno pode ser útil para os alunos acompanharem as propostas. O Guia do Professor traz mais informações e aprofundamentos, principalmente em termos de conteúdo, que podem auxiliar o professor na realização da atividade';
	var sobre_projeto = 'M³ &ndash; Matemática MultiMídia é uma coleção de materiais didáticos disponíveis em mídias digitais para o uso do professor de matemática do ensino médio no Brasil e facilitar o ensino-aprendizagem. Composta por áudios, experimentos, softwares e vídeos, a coleção foi desenvolvida, entre 2008 e 2010, por uma grande equipe de professores e estudantes da Unicamp e vários colaboradores, tendo contado com recursos do FNDE, do MEC e do MCT. Para maiores detalhes sobre a utilização da coleção M³&nbsp;&ndash;&nbsp;Matemática Multimídia, consulte o Guia do Professor.';
	var sobre_licensas = 'Este material esta licencidado sob uma licença Creative Commons.  É permitido copiar, distribuir, exibir e executar a obra, criar obras derivadas mas não é permitido o uso comercial ou o relicensiamento sobre uma licença mais restritiva. Clique no link à esquerda para obter mais informações.';
	var link_fnde    = 'http://www.fnde.gov.br/';
	var link_seed    = 'http://portal.mec.gov.br/seed';
	var link_mct     = 'http://www.mct.gov.br/';
	var link_mec     = 'http://www.mec.gov.br/';
	var link_governo = 'http://www.brasil.gov.br/';
	var site_projeto = 'http://m3.ime.unicamp.br/portal/';
	