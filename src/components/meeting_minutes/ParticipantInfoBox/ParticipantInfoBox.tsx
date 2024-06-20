import { useState } from 'react';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import { useGetProjectMemberNames } from '~/hooks/@query/useGetProjectMemberNames';
import * as S from '~/components/meeting_minutes/ParticipantInfoBox/ParticipantInfoBox.styles';

interface ParticipantInfoBoxProps {
  recordWriterId: number;
  handleMemberListChange: (memberList: number[]) => void;
}

const ParticipantInfoBox = (props: ParticipantInfoBoxProps) => {
  const { handleMemberListChange, recordWriterId } = props;
  const { projectMemberNames } = useGetProjectMemberNames();
  const [participants, setParticipants] = useState<number[]>([recordWriterId]);

  const handleParticipantsCheck = (memberId: number) => {
    if (participants.includes(memberId)) {
      handleMemberListChange([...participants.filter((id) => id !== memberId)]);
      setParticipants((prev) => prev.filter((id) => id !== memberId));
    } else {
      handleMemberListChange([...participants, memberId]);
      setParticipants((prev) => [...prev, memberId]);
    }
  };

  return (
    <div css={S.participantInfoBoxContainer}>
      <Text size="xxl" weight="bold">
        참가자
      </Text>
      <div css={S.participantContainer}>
        {projectMemberNames.map((projectMember) => {
          const { memberId, name } = projectMember;
          return (
            <Tag.Check
              key={memberId}
              css={S.tagStyling}
              act="check"
              handleTagCheck={() => handleParticipantsCheck(memberId)}
              content={name}
              checked={memberId === recordWriterId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantInfoBox;
