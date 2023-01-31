import React, { useState } from 'react';
import Checkbox from '../../../../../components/Checkbox';

import {
  Container,
  TasksList,
  TaskItem,
  TaskItemTexts,
} from './styles';

const checkListItem = [
  { title: 'Criar níveis de acesso', subTitle: 'Sua proximidade com o seu mentorado.' },
  { title: 'Definir posicionamento', subTitle: 'Público que você vai atingir e palavras-chave do seu método.' },
  { title: 'Construir proposta', subTitle: 'Promessa e Headlines' },
  { title: 'Criar método', subTitle: 'Metodologia e ferramenta de ensino' },
  { title: 'Construir funil', subTitle: 'Dica: Funnelytics' },
  { title: 'Criar páginas', subTitle: 'Dica: Orbit Pages, HeroSpark.' },
  { title: 'Desenvolver anúncios', subTitle: 'Dica: Canva' },
  { title: 'Escrever scripts de conexão', subTitle: 'Apresentação, qualificação, diagnóstico e fechamento.' },
  { title: 'Configurar automações', subTitle: 'Dica: Manychat, SellFlux, Devzapp.' },
  { title: 'Listar objeções', subTitle: 'E como resolvê-las.' },
];

const CheckList: React.FC = () => (
  <TasksList>
    {checkListItem.map((item) => (
      <TaskItem key={item?.title}>
        <Checkbox />
        <TaskItemTexts>
          {item?.title}
          <small>{item?.subTitle}</small>
        </TaskItemTexts>
      </TaskItem>
    ))}
  </TasksList>
);

export default CheckList;
