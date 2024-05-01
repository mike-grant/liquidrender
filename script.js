console.log(typeof Liquid); // Should log 'function' if Liquid is correctly loaded
const engine = new liquidjs.Liquid();
document.getElementById('contextInput').addEventListener('input', updateOutput);
document.getElementById('templateInput').addEventListener('input', updateOutput);

function updateOutput() {
    const contextValue = document.getElementById('contextInput').value;
    const templateValue = document.getElementById('templateInput').value;

    try {
        const context = JSON.parse(contextValue || '{}');
        engine.parseAndRender(templateValue, context).then(result => {
            document.getElementById('output').innerText = result;
        }).catch(error => {
            document.getElementById('output').innerText = `Error: ${error.message}`;
        });
    } catch (e) {
        document.getElementById('output').innerText = 'Invalid JSON in context.';
    }
}

updateOutput();  // Initial call to render template with default/empty input
