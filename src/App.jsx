// import logo from './logo.svg';
import './App.css';

function App() {

//colorpicker
// var reed1 = document.getElementById('content');
// reed1.addEventListener('click', deed1);
// var reed2 = document.getElementById('ColorPicker2');
// reed2.addEventListener('input',deed);
// var reed4 = document.getElementById("ColorPicker1");
// reed4.addEventListener('input', deed1);

// // // Text-Color
// function deed1(){
//   var reed5 = reed4.value;
//   reed1.style.color = reed5;
// }
// // // Background-color
// function deed(){
//   reed1.style.backgroundColor = reed2.value;
// }

  // Toolbars functionality
  function formatBold(){
    var value = document.getElementById('content');
    value.setAttribute('style','font-weight:bold');
  }
  function formatUnderline(){
    var value = document.getElementById('content');
    value.setAttribute('style','text-decoration:underline');
  }
  function formatItalic(){
    var value = document.getElementById('content');
    value.setAttribute('style','font-style:italic');
  }
  function formatstrikethrough(){
    var value = document.getElementById('content');
    value.setAttribute('style','text-decoration:line-through');
  }
  function formatAlignLeft(){
    var value = document.getElementById('content');
    value.setAttribute('style','float:left');
  }
  function formatAlignRight(){
    var value = document.getElementById('content');
    value.setAttribute('style','float:right');
  }

  function formatAlignC(){
    var value = document.getElementById('content');
    value.setAttribute('style','display:flex; justify-content:center');
  }
 
           
  return (
    <>
      <div className="container ">
        <div className="toolbars">
          <div className="head">
            <input type="text" placeholder='FileName' value='untitled' id='filename'/>
            
            <select id='Heading'>
              <option value="" selected='' hidden='' disabled=''>Format</option>
              <option value="h1">Heading 1</option>
              <option value="h4">Heading 4</option>
              <option value="h6">Heading 6</option>
            </select>

            <select>
              <option value="" selected='' hidden='' disbale=''>Font Size</option>
              <option value="1">smaller</option>
              <option value="2">Medium</option>
              <option value="3">large</option>              
            </select>

            <div className="color">
              <span>Color</span>
              <input type="color" id='ColorPicker1' />
            </div>

            <div className="color">
              <span>Background</span>
              <input id="ColorPicker2" type="color"/>
            </div>
          </div>

          <div className="btntool">
           <button onClick={formatBold
            }><i class='bx bx-bold'></i></button>
            <button onClick={formatUnderline}><i class='bx bx-underline' ></i></button>
            <button onClick={formatItalic}><i class='bx bx-italic' ></i></button>
            <button onClick={formatstrikethrough}><i class='bx bx-strikethrough' ></i></button>
            <button onClick={formatAlignLeft}><i class='bx bx-align-left' ></i></button>
            <button onClick={formatAlignC}><i class='bx bx-align-middle' ></i></button>
            <button onClick={formatAlignRight}><i class='bx bx-align-right' ></i></button>
            <button onClick={formatAlignC}><i class='bx bx-align-justify' ></i></button>
            </div>

        </div>

        <div id="content" contentEditable='true'>
          Lorem, ipsum dolor.
        </div>

      </div>
    </>
  );
}

export default App;
