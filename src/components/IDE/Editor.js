import React from 'react';
import Container from 'react-bootstrap/Container';
import MonacoEditor from 'react-monaco-editor';

function Welcome() {
    function editorWillMount(monaco) {
        // validation settings
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        });
    
        // compiler options
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES6,
            allowNonTsExtensions: true
        });
    
    }
    return (
        
        <MonacoEditor
        height='87vh'
        language="javascript"
        theme="vs-dark"
        value={'Hello world !'}
        options={{
            selectOnLineNumbers: true,
            quickSuggestions: true
          }}
        onChange={()=>{}}
        editorWillMount={editorWillMount}
        editorDidMount={()=>{}}
      />
            
    );
}

export default Welcome;