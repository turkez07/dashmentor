import React, { useState } from 'react';

import CheckList from './CheckList';
import Anticipation from './Anticipation';
import Levels from './Levels';
import Structure from './Structure';

import {
  Container,
  TabNavigation,
  TabNavigationHeader,
  TabNavigationHeaderItem,
  TabNavigationContent,
  NavigationBottom,
} from './styles';

const tabNavigationItems = [
  { title: 'Níveis de acesso', element: <Levels /> },
  { title: 'Onboarding', element: <Anticipation /> },
  { title: 'Estrutura', element: <Structure /> },
  // { title: 'Checklist', element: <CheckList /> },
];

const NewMentorship: React.FC = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <Container>
      <h1>Nova mentoria</h1>
      <TabNavigation>
        <TabNavigationHeader>
          {tabNavigationItems?.map((item, index) => (
            <TabNavigationHeaderItem
              onClick={() => setCurrentTabIndex(index)}
              active={currentTabIndex === index}
              key={item?.title}
            >
              {item?.title}
            </TabNavigationHeaderItem>
          ))}
        </TabNavigationHeader>
        <TabNavigationContent>
          {tabNavigationItems[currentTabIndex]?.element ?? <h2>Nenhum conteúdo..</h2>}
        </TabNavigationContent>
      </TabNavigation>
      <NavigationBottom>
        <button type="button">Salvar mentoria</button>
      </NavigationBottom>
    </Container>
  );
};

export default NewMentorship;
