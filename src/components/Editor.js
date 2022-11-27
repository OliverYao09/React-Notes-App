import React, { useEffect, useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

export default function Editor(props) {
  // State
  const [selectedTab, setSelectedTab] = useState('write');

  // initial component values.
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  // Render Editor component - Pass props to parent components
  return (
    <section className="pane editor">
      <ReactMde
        value={props.currentNote.body}
        onChange={props.updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
