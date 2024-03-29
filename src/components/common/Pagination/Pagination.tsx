/** @jsxImportSource @emotion/react */
import Button from '~/components/common/Button/Button';
import { paginationContainer } from '~/components/common/Pagination/Pagination.styles';
import Text from '~/components/common/Text/Text';
import { arrayOf } from '~/utils/arrayOf';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalPage, currentPage, handlePageChange } = props;

  return (
    <div css={paginationContainer}>
      {arrayOf(totalPage).map((_, index) => {
        return (
          <Button
            key={index}
            variant="plain"
            onClick={() => handlePageChange(index + 1)}
          >
            <Text
              css={{ color: currentPage === index + 1 ? 'red' : 'black' }}
              size="xl"
              weight={currentPage === index + 1 ? 'bold' : 'normal'}
            >
              {index + 1}
            </Text>
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
