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

const Levels: React.FC = () => {
  const [toggledModal, setToggledModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'new' | 'edit' | 'view'>('new');
  const [selectedLevelId, setSelectedLevelId] = useState<number | string>(
    '',
  );
  const [visibleConfirmationModal, setVisibleConfirmationModal] = useState<boolean>(false);

  return (
    <Container>
      <AnticipationHeader>
        <small>Sua proximidade com o seu mentorado.</small>
        <button
          type="button"
          onClick={() => {
            setModalType('new');
            setToggledModal(true);
          }}
        >
          Criar novo nível de acesso
        </button>
      </AnticipationHeader>

      <AnticipationContentList>
        <AnticipationContentItem>
          <AnticipationLeftContent>
            <h4>Nível #1</h4>
            <small>Descrição do nível</small>
          </AnticipationLeftContent>
          <ActionButtons>
            <button
              type="button"
              onClick={() => {
                setModalType('edit');
                setToggledModal(true);
              }}
            >
              <RiEditLine />
            </button>
            <button type="button" onClick={() => setVisibleConfirmationModal(true)}>
              <RiDeleteBin5Line />
            </button>
          </ActionButtons>
        </AnticipationContentItem>
        <AnticipationContentItem>
          <AnticipationLeftContent>
            <h4>Nível #2</h4>
            <small>Descrição do nível</small>
          </AnticipationLeftContent>
          <ActionButtons>
            <button
              type="button"
              onClick={() => {
                setModalType('edit');
                setToggledModal(true);
              }}
            >
              <RiEditLine />
            </button>
            <button type="button" onClick={() => setVisibleConfirmationModal(true)}>
              <RiDeleteBin5Line />
            </button>
          </ActionButtons>
        </AnticipationContentItem>
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

export default Levels;
