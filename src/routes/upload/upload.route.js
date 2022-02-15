import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context";
import css from "./upload.module.css";


export default function UploadRouteComponent(){
    const navigator = useNavigate();
    const [context, setContext] = useContext(DataContext);
    const [fileLines, setFileLines] = useState(null);
    const [format, setFormat] = useState('hhh');
    const serializeFile = async(e) => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onload = async(e) => {
            const lines = e.target.result.replace('\r', '').split('\n');
            
            if(lines.length){
                setFileLines(lines);
            }
        }
        reader.readAsBinaryString(e.target.files[0]);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setContext({
            format: format,
            lines: fileLines
        });

        navigator("/view");
    }

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <div className={ css.logStep }>
                    <h2>Log format</h2>
                    <p>
                        please enter the logging format, to view serialized options, please view: <br/>
                        %s %D %d %m %M %Y 
                    </p>
                    <input className={ css.formatInp } type='text' />
                </div>

                <div className={ css.logStep }>
                    <h2>File upload</h2>
                    <input type='file' onChange={ e => serializeFile(e) } />
                </div>

                <div className={ css.fileContent }>
                        {
                            fileLines?.map((line, i) => {
                                return <p key={ i }>{ line }</p>
                            })
                        }
                </div>

                <button className={ css.submitFile } type='submit'>view</button>
            </form>
        </div>
    );
}
