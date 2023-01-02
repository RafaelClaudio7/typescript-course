/* eslint-disable */
const coresObj = {
    vermelho: "red",
    verde: "green",
    azul: "blue"
};

type colorsObj = typeof coresObj;
type colorObjKeys = keyof colorsObj;

function traduzirCor(cor: colorObjKeys, cores: typeof coresObj) {
    return cores[cor];
}


console.log(traduzirCor("vermelho", coresObj));

export default 1;
