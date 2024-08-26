import { setupRunners } from "./setup_runners";

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setupRunners();
    }
};