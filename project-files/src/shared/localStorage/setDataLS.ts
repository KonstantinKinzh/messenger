export const setDataLS = (key:string, data:any) => {
    
    if(data === null || data === undefined) {
        console.log("Данные,передаваемые в функцию setDataLS не инициализированы!");
        return;
    };

    localStorage.setItem(key, JSON.stringify(data));
};