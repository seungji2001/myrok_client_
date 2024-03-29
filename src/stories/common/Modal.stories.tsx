import type { Meta, StoryObj } from '@storybook/react';
import Modal from '~/components/common/Modal/Modal';
import Text from '~/components/common/Text/Text';

/**
 * 하위 컴포넌트 조합으로 원하는 형태의 모달을 만들 수 있는 컴포넌트
 */
const meta = {
  title: 'common/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Modal>
        <Modal.Button act="open" variant="primary">
          모달 열기
        </Modal.Button>
        <Modal.Backdrop />
        <Modal.Layout>
          <div
            css={{
              top: '50%',
              right: '50%',
              width: '100px',
              height: '100px',
              backgroundColor: 'white',
            }}
          >
            <Text>모달 열림</Text>
            <Modal.Button act="close" variant="primary">
              모달 닫기
            </Modal.Button>
          </div>
        </Modal.Layout>
      </Modal>
    );
  },
};

export const UnableToCloseWithBackdrop: Story = {
  render: () => {
    return (
      <Modal>
        <Modal.Button act="open" variant="primary">
          모달 열기
        </Modal.Button>
        <Modal.Backdrop />
        <Modal.Layout isBackdropClosable={false}>
          <div
            css={{
              top: '50%',
              right: '50%',
              width: '100px',
              height: '100px',
              backgroundColor: 'white',
            }}
          >
            <Text>모달 열림</Text>
            <Modal.Button act="close" variant="primary">
              모달 닫기
            </Modal.Button>
          </div>
        </Modal.Layout>
      </Modal>
    );
  },
};
