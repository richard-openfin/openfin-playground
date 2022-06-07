import { useEffect } from 'react';
import { Fin } from 'openfin-adapter';

declare const fin: Fin;

function App() {
    useEffect(() => {
        const init = async () => {
            await fin.Platform.init();
        }
        init();
        
    }, []);

    return <div>Playground</div>;
}

export default App;
