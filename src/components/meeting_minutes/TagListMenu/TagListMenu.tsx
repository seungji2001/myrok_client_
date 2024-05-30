import Text from '~/components/common/Text/Text';
import type { RecordTag } from '~/types/record';
import * as S from '~/components/meeting_minutes/TagListMenu/TagListMenu.styles';

interface TagListMenuProps {
  totalCount: number;
  tagList: RecordTag[];
  clickedTag: string;
  handleTagClick: (tag: string) => void;
}

const TagListMenu = (props: TagListMenuProps) => {
  const { totalCount, tagList, clickedTag, handleTagClick } = props;

  return (
    <div css={S.tagListMenuContainer}>
      <Text weight="semiBold" size="lg" css={S.borderBottom}>
        태그 목록 ({totalCount})
      </Text>
      <Text
        css={[clickedTag === '전체보기' && S.clickedText, S.cursorPoint]}
        onClick={() => handleTagClick('전체보기')}
      >
        전체보기 ({totalCount})
      </Text>
      {tagList.map((tag) => {
        return (
          <Text
            key={tag.tagName}
            css={[clickedTag === tag.tagName && S.clickedText, S.cursorPoint]}
            onClick={() => handleTagClick(tag.tagName)}
          >
            {tag.tagName} ({tag.count})
          </Text>
        );
      })}
    </div>
  );
};

export default TagListMenu;
