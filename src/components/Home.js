import Notes from './Notes';
// const {PythonShell}= require("python-shell");
// let options={
//     scriptPath:"E:/project school/inotebook2/src/components",
//     args:["this is from home file",2002],
// };
// PythonShell.run("pypgrm.py",options,(err,res)=>{
//     if(err) console.log(err);
//     if(res) console.log(res);
// })
// importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");
const onChange = (e)=>{
    pythonExec(e.target.name);
}


const pythonExec =async()=>{
    // const python_code=`
    // print("hello from python")
    // `;
    // const pyodide=window.pyodide;
    // pyodide.runPython(python_code);
    let pyodide = await window.loadPyodide();
        pyodide.runPython(`
            n=int(input())
            print(n*n)
            res=n*n
        `);
        pyodide.runPython("print(1 + 2)");
        console.log(pyodide.globals.get('n'));
        document.getElementById("para").innerHTML=pyodide.globals.get('res')
    
}

export const Home = (props) => {
    const {showAlert}=props
    return (
        <div>
            <Notes showAlert={showAlert}/>
        {/* <input type="email" className="form-control" id="email"  name="email" aria-describedby="emailHelp"/> */}

            <button onClick={pythonExec} onChange={onChange}>Test</button>
            <p id="para"></p>
        </div>
    )
}
export default Home;