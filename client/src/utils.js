export const linkWorks = async (link) => {
    const res = await fetch(link);
    
   if (res.ok) {
       return true;
   } else {
       return false;
   }
}