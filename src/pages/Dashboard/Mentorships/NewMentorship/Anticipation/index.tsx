import React, { useState } from 'react';
import { RiEditLine, RiDeleteBin5Line } from 'react-icons/ri';

import OnboardingModal from '../../../../../components/OnboardingModal';
import DeleteModal from '../../../../../components/DeleteModal';

import {
  Container,
  AnticipationHeader,
  AnticipationContentList,
  AnticipationContentItem,
  AnticipationLeftContent,
  ActionButtons,
} from './styles';

const Anticipation: React.FC = () => {
  const [toggledModal, setToggledModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'new' | 'edit' | 'view'>('new');
  const [selectedLevelId, setSelectedLevelId] = useState<number | string>('');
  const [visibleConfirmationModal, setVisibleConfirmationModal] = useState<boolean>(false);

  return (
    <Container>
      <AnticipationHeader>
        <small>Conteúdos de antecipação</small>
        <button
          type="button"
          onClick={() => {
            setModalType('new');
            setToggledModal(true);
          }}
        >
          Inserir conteúdo de antecipação
        </button>
      </AnticipationHeader>

      <AnticipationContentList>
        <AnticipationContentItem>
          <AnticipationLeftContent>
            <h4>Conteudo de antecipação #1</h4>
            <small>Descrição do conteúdo</small>
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
            <button
              type="button"
              onClick={() => setVisibleConfirmationModal(true)}
            >
              <RiDeleteBin5Line />
            </button>
          </ActionButtons>
        </AnticipationContentItem>
      </AnticipationContentList>

      <OnboardingModal
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

export default Anticipation;
