export default function tabProps(key) {
    return {
        id: `full-width-tab-${key}`,
        'aria-controls': `full-width-tabpanel-${key}`,
    };
}
