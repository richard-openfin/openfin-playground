import { fin } from "@openfin/core";

const defaultSize = {
    width: 800,
    height: 500,
};

const newSize = {
    width: 500,
    height: 300,
};

function App() {
    const animate = async () => {
        const win = fin.Window.wrapSync(fin.me.identity);
        const { width, height } = await fin.me.getBounds();
        await win.animate(
            {
                size: {
                    width:
                        width === defaultSize.width
                            ? newSize.width
                            : defaultSize.width,
                    height:
                        height === defaultSize.height
                            ? newSize.height
                            : defaultSize.height,
                    duration: 150,
                },
            },
            { interrupt: true }
        );
    };

    return (
        <div>
            <button onClick={animate}>animate</button>
        </div>
    );
}

export default App;
