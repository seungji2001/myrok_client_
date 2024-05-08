import { type KeyboardEventHandler, useEffect, useRef } from 'react';
import Input from '~/components/common/Input/Input';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import * as S from '~/components/meeting_minutes/RecordWriteInfoBox/RecordWriteInfoBox.styles';
import { useRecordWriteInfoBox } from '~/components/meeting_minutes/RecordWriteInfoBox/useRecordWriteInfoBox';

export interface RecordWriteInfoBoxProps {
  handleTagListChange: (tagList: string[]) => void;
  handleRecordNameChange: (recordName: string) => void;
}

const RecordWriteInfoBox = (props: RecordWriteInfoBoxProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const {
    title,
    tag,
    tags,
    isWarn,
    warnText,

    handler: { handleTitleChange, handleTagChange, handleTagDelete },
  } = useRecordWriteInfoBox(props);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleNextInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      tagRef.current?.focus();
    }
  };

  return (
    <div css={S.recordWriteInfoBoxContainer}>
      <div css={S.titleContainer}>
        <Text size="xxl" weight="bold">
          회의명
        </Text>
        <Input
          css={S.inputStyling}
          width="80%"
          height="22px"
          value={title}
          onKeyDown={handleNextInput}
          onChange={handleTitleChange}
          ref={titleRef}
        ></Input>
      </div>
      <div css={S.tagContainer}>
        <div css={S.tagInputContainer}>
          <Text size="xxl" weight="bold">
            태그
          </Text>
          <Input
            css={S.inputStyling}
            width="80%"
            height="22px"
            placeholder="띄어쓰기로 구분(최대 10개)"
            value={tag}
            onChange={handleTagChange}
            ref={tagRef}
          ></Input>
        </div>
        {isWarn && (
          <Text size="sm" css={S.warningText}>
            {warnText}
          </Text>
        )}

        <div css={S.tagsGrid}>
          {[...tags].map((newTag) => {
            return (
              <Tag.Delete
                key={newTag}
                content={newTag}
                act="delete"
                handleTagDelete={() => handleTagDelete(newTag)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecordWriteInfoBox;
