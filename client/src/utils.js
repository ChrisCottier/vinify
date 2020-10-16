export const linkWorks = async (link) => {
    try {
        const res = await fetch(link);
    } catch (err) {
        return false;
    }
    return true;
}