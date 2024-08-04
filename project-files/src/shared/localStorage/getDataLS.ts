export const getDataLS = (key:string) => {
    const dataLsJSON = localStorage.getItem(key);

    if(dataLsJSON === null) {
        console.log("Запрашиваемых из localStorage данных нет!");
        return;
    };

    const dataLS = JSON.parse(dataLsJSON);

    return dataLS;
};