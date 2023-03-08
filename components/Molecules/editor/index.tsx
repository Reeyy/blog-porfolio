import { FC, useEffect, useState } from 'react';
import { useEditor, EditorContent, getMarkRange, Range } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TitapImage from '@tiptap/extension-image';

import ToolBar from './Toolbar';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-Placeholder';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import EditLink from './EditLink';
import scss from 'highlight.js/lib/languages/scss';
import stylus from 'highlight.js/lib/languages/stylus';

import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import md from 'highlight.js/lib/languages/markdown';

import bash from 'highlight.js/lib/languages/bash';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';

import { lowlight } from 'lowlight';
import ImageUploadGalery, { ImageSelectionResult } from './imageUploadModal';
import axios from 'axios';

interface Props {}

// CSS and friends
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('scss', scss);
lowlight.registerLanguage('stylus', stylus);
// JS and friends
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('javascript', js);
lowlight.registerLanguage('jsx', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('tsx', ts);
lowlight.registerLanguage('typescript', ts);
lowlight.registerLanguage('json', json);

// Bash
lowlight.registerLanguage('bash', bash);

// HTML and friends
lowlight.registerLanguage('html', xml);
lowlight.registerLanguage('xml', xml);
lowlight.registerLanguage('md', md);
lowlight.registerLanguage('markdown', md);
const Editor: FC<Props> = (props): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>();
  const [showGalery, setShowGalery] = useState(false);
  const [images, setImages] = useState<{ src: string }[]>([]);
  const [uploading, setUploading] = useState(false);

  const getImages = async () => {
    const { data } = await axios('/api/imageshandler');
    setImages(data);
  };
  const handleImageUpload = async (image: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post('/api/imageshandler', formData);
    setUploading(false);
    setImages([data, ...images]);
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Link.configure({
        autolink: false,
        linkOnPaste: true,
        openOnClick: false,
        HTMLAttributes: {
          target: '',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write your story...',
      }),
      Youtube.configure({
        width: 840,
        height: 472.5,
        HTMLAttributes: {
          class: 'mx-auto rounded',
        },
      }),
      TitapImage.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'mx-auto rounded',
        },
      }),
    ],
    editorProps: {
      handleClick(view, pos, event) {
        const { state } = view;
        const selectionRange = getMarkRange(
          state.doc.resolve(pos),
          state.schema.marks.link
        );
        if (selectionRange) {
          setSelectionRange(selectionRange);
        }
      },
      attributes: {
        class:
          'prose prose-lg focus:outline-none  dark:prose-invert max-w-full h-full mx-auto',
      },
    },
  });
  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange);
    }
  }, [editor, selectionRange]);
  useEffect(() => {
    getImages();
  }, []);
  const handleImageSelected = (result: ImageSelectionResult) => {
    editor
      ?.chain()
      .focus()
      .setImage({ src: result.src, alt: result.altText })
      .run();
  };
  return (
    <>
      <div className='p-3 bg-primary dark:bg-primary-dark transition'>
        <ToolBar onOpenImageClick={() => setShowGalery(true)} editor={editor} />
        <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3 ' />
        {editor ? <EditLink editor={editor} /> : null}

        <EditorContent editor={editor} />
      </div>
      <ImageUploadGalery
        onSelect={handleImageSelected}
        visible={showGalery}
        onClose={() => setShowGalery(false)}
        images={images}
        uploading={uploading}
        onFileSelect={handleImageUpload}
      />
    </>
  );
};

export default Editor;
