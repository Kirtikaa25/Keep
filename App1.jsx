import React from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <Heading/>
        <Note/>
        <Footer/>
        </div>
    )
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


