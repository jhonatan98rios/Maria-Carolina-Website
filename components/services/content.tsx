export type IContent = {
  img: {
    src: string,
    alt: string,
    title: string
  }
  title: string
  description: () => JSX.Element
}

export const content: IContent[] = [
  {
    img: {
      src: './services/criminal.png',
      alt: 'Imagem de um martelo sobre a mesa',
      title: 'Direito Criminal',
    },
    title: 'Direito Criminal',
    description: () => (
      <p>
        <h4> Atuação em Delegacia de Polícia 24h: </h4> Acompanhamento para depoimentos; Acompanhamento de inquéritos policiais; Apoio para vitimas e familiares; Levantamento de provas favoráveis; Prisão em flagrante; Pedido de liberdade com e sem fiança; Preparação para depoimentos; Registro de boletim de ocorrência: Solicitação de medidas protetivas.
        <h4> Atuação em Tribunais: </h4> Atuação em Tribunais Estaduais, Federais, STJ e STF; Recursos Criminais; Sustentações Orais perante os tribunais
        <h4> Defesa em Processos Criminais: </h4> Audiência de Custódia; Acompanhamento de processos; Atuação em favor das vítimas; Defesa dos acusados;
            Habeas Corpus; Liberdade Provisória; Prisão domiciliar; Relaxamento de prisão; Revogação de prisão; Realização de Audiências; Tribunal do juri.
        <h4> Execução Penal: </h4> Livramento Condicional: Progressão de Regime; Pedido de Transferência; Remição de Pena.
      </p>
    )
  },
  {
    img: {
      src: './services/civil.png',
      alt: 'Imagem de um advogado',
      title: 'Direito Civil',
    },
    title: 'Direito Civil',
    description: () => (
      <ul>
        <li> Divórcio (Consensual, litigioso, extrajudicial e judicial); </li>
        <li> União Estável (Declaração, reconhecimento, escritura declaratória e dissolução de União Estável); </li>
        <li> Pensão Alimentícia (Fixação, oferta, execução e exoneração de alimentos); </li>
        <li> Regime de bens (Consultoria na escolha e alteração de regime de bens e Separação de bens) </li>
        <li> Regulamentação de Guarda de Menores (Compartilhada, alternada e unilateral); </li>
        <li> Regulamentação de Visitação (Regulamentação e alteração de guarda e convivência e direito de visitas dos avós); </li>
        <li> Investigação de Paternidade (Ação de Reconhecimento e investigação de paternidade e Ação anulatória e negatória de paternidade); </li>
        <li> Curatela e interdição (Interdição de familiares, curatela compartilhada, alteração de curador e prestação de contas de curador); </li>
        <li> Pacto antenupcial (Formulação de Pacto nupcial) </li>
        <li> Ação de alienação parental; </li>
        <li> Entre outros assuntos de direito de família. </li>
      </ul>
    )
  },
  {
    img: {
      src: './services/contratual.png',
      alt: 'Imagem de contratos sendo assinados',
      title: 'Direito Contratual',
    },
    title: 'Direito Contratual',
    description: () => (
      <ul>
        <li> Elaboração, análise e revisão de contratos em geral; </li>
        <li> Ação revisional de cláusulas contratuais (contratos de adesão); </li>
        <li> Execução judicial e extrajudicial de contratos; </li>
        <li> Ação anulatória de cláusulas abusivas; </li>
        <li> Consultoria preventiva de litígio; </li>
        <li> Demais temas relacionados a contratos. </li>
      </ul>
    )
  },
  {
    img: {
      src: './services/consumidor.png',
      alt: 'Imagem de um martelo ao lado de um carrinho de compras',
      title: 'Direito Consumidor',
    },
    title: 'Direito do Consumidor',
    description: () => (
      <ul>
        <li> Defesa e orientação dos consumidores com base no Código de Defesa do Consumidor; </li>
        <li> Representação nos órgãos de proteção ao crédito (Procon, Serasa, etc); </li>
        <li> Atuação judicial e extrajudicial no que tange a defesa do consumidor; </li>
        <li> Ações indenizatórias por vícios de produtos; </li>
        <li> Ações revisionais de juros abusivos (Financiamentos em geral); </li>
        <li> Responsabilidade civil na relação de consumo (Danos Morais e Materiais); </li>
        <li> Ações por falhas na prestação de serviços (Bancos, telefonia, concessionárias de luz, água, TV entre outras); </li>
        <li> Ação de repetição de indébito por cobranças indevidas; </li>
        <li> Negativação indevida do nome do consumidor Serasa, SCPC e outros cadatros negativos; </li>
        <li> Demais assuntos relacionados ao direito do consumidor. </li>
      </ul>
    )
  }
]