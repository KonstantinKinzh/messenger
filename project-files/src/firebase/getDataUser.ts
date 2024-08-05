import "./firebase";

export const getDataUser = async () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Промис успешно выполнен");
        }, 3000);
    });
};