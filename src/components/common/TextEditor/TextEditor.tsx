import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5/build/ckeditor';
import '~/components/common/TextEditor/TextEditor.css';
interface TextEditorProps {
  handleTextDataChange: (text: string) => void;
}

const TextEditor = (props: TextEditorProps) => {
  const { handleTextDataChange } = props;

  return (
    <CKEditor
      editor={Editor}
      config={{
        placeholder: '이곳에 회의록을 작성해주세요!',
      }}
      onChange={(_, editor) => {
        handleTextDataChange(editor.getData());
      }}
    />
  );
};

export default TextEditor;
