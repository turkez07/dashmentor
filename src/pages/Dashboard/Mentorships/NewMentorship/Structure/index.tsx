import React, { useState } from 'react';
import { RiEditLine, RiDeleteBin5Line } from 'react-icons/ri';

import LevelsModal from '../../../../../components/LevelsModal';
import DeleteModal from '../../../../../components/DeleteModal';

import {
  Container,
  AnticipationHeader,
  AnticipationContentList,
  AnticipationContentItem,
  AnticipationLeftContent,
  ActionButtons,
} from './styles';

const structureItems = [
  { title: 'Posicionamento' },
  { title: 'Proposta' },
  { title: 'Método' },
  { title: 'Funil' },
  { title: 'Conexão' },
  { title: 'Bloqueios' },
  { title: 'Missões' },
];

const Structure: React.FC = () => {
  const [toggledModal, setToggledModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'new' | 'edit' | 'view'>('new');
  const [selectedLevelId, setSelectedLevelId] = useState<number | string>('');
  const [visibleConfirmationModal, setVisibleConfirmationModal] = useState<boolean>(false);

  return (
    <Container>
      <AnticipationContentList>
        {structureItems.map((item) => (
          <AnticipationContentItem key={item?.title}>
            <AnticipationLeftContent>
              <h4>{item?.title}</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
            </AnticipationLeftContent>
            <ActionButtons>
              <button type="button">
                <RiEditLine />
              </button>
            </ActionButtons>
          </AnticipationContentItem>
        ))}
      </AnticipationContentList>

      <LevelsModal
        toggled={toggledModal}
        toggleModal={() => setToggledModal(false)}
        modalType={modalType}
        selectedLevel={selectedLevelId}
      />

      {visibleConfirmationModal && (
        <DeleteModal
          handleDeleteConfirmation={() => {
            setVisibleConfirmationModal(false);
          }}
          handleToggleModal={() => setVisibleConfirmationModal(false)}
        />
      )}
    </Container>
  );
};

export default Structure;
