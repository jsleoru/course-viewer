import React from 'react';
import MonacoEditor from 'react-monaco-editor';

function Welcome(props) {
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
        value={props.code}
        options={{
            selectOnLineNumbers: true,
            quickSuggestions: true
          }}
        onChange={props.setCode}
        editorWillMount={editorWillMount}
        editorDidMount={()=>{}}
      />
            
    );
}

export default Welcome;