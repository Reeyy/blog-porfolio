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
import Seo, { SeoData } from './Seo';
import ActionButton from 'components/Atoms/ActionButton';
import Thumbnail from './Thumbnail';

export interface FinalPost extends SeoData {
  title: string;
  content: string;
  thumbnail?: File | string;
}

interface Props {
  onSubmit: (post: FinalPost) => void;
  initialPost?: FinalPost;
  btnText?: string;
  busy?: boolean;
}

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
const Editor: FC<Props> = ({
  onSubmit,
  busy = false,
  btnText = 'submit',
  initialPost,
}): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>();
  const [showGalery, setShowGalery] = useState(false);
  const [images, setImages] = useState<{ src: string }[]>([]);
  const [seoInitialValue, setSeoInitialValue] = useState<SeoData>();
  const [uploading, setUploading] = useState(false);

  const [post, setPost] = useState<FinalPost>({
    title: '',
    content: '',
    meta: '',
    tags: '',
    slug: '',
  });

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
  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPost((prev) => ({ ...prev, title: value }));
  };
  const updateSeoData = (result: SeoData) => {
    setPost((prev) => ({ ...prev, ...result }));
  };
  const updateThumbmail = (result: File | string) => {
    setPost((prev) => ({ ...prev, thumbnail: result }));
  };
  const handleSubmit = () => {
    if (!editor) return;
    onSubmit({ ...post, content: editor.getHTML() });
  };
  useEffect(() => {
    if (initialPost) {
      setPost({ ...initialPost });
      editor?.commands.setContent(initialPost.content);
      const { meta, tags, slug } = initialPost;
      setSeoInitialValue({ meta, tags, slug });
    }
  }, [editor?.commands, initialPost]);

  return (
    <>
      <div className='p-3 bg-primary dark:bg-primary-dark transition'>
        <div className='sticky top-0 z-10   h-full w-full bg-secondary-light px-4 py-4 mb-2 rounded  '>
          {/* thumbnail image  and og:image*/}
          <div className='flex  items-center justify-between mb-3'>
            <Thumbnail onChange={updateThumbmail} />
            <div className='inline-block'>
              <ActionButton
                title={btnText}
                busy={busy}
                onClick={handleSubmit}
              />
            </div>
          </div>
          {/* title  */}
          <input
            onChange={updateTitle}
            type='text'
            value={post.title}
            placeholder='Title....'
            className='py-2 outline-none  text-secondary-dark z-40 bg-transparent  w-full border-0 border-b-[1px] border-secondary-dark text-3xl font-semibold italic mb-3'
          />

          <ToolBar
            onOpenImageClick={() => setShowGalery(true)}
            editor={editor}
          />
          <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3 ' />
        </div>

        {editor ? <EditLink editor={editor} /> : null}

        <EditorContent
          editor={editor}
          className='min-h-[500px]  bg-secondary-light p-3 rounded-md mb-10'
        />
        <Seo
          onChange={updateSeoData}
          initialValue={seoInitialValue}
          title={post.title}
        />
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
