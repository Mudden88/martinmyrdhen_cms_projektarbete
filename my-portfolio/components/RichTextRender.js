import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';

const RichTextRenderer = ({ content }) => {

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="font-semibold">{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, title } = node.data.target.fields.file;
        return (
          <Image
            src={url}
            alt={title || 'Please add alt text'}
            className="my-4 max-w-full h-auto"
          />
        );
      },
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichTextRenderer;
