export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (store) => {
    try {
        store = store.getState();
        const serializedState = JSON.stringify(store);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};
