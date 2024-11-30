function woodCalculator(chairQuantity,tableQuantity,bedQuantity,almariQuantity) {
    const perchairwood = 4;
    const pertablewood = 8;
    const perbedwood = 20;
    const peralmariwood = 40;

    const totalchairwood = perchairwood * chairQuantity;
    const totaltablewood = pertablewood * tableQuantity;
    const totalbedwood = perbedwood * bedQuantity;
    const totalalmariwood = peralmariwood * almariQuantity;

    const totalNeedWood = totalchairwood + totaltablewood + totalbedwood + totalalmariwood;

    console.log('Total Wood for Chair:',totalchairwood );
    console.log('Total Wood for Table:',totaltablewood );
    console.log('Total Wood for Bed:', totalbedwood);
    console.log('Total Wood for Almari:', totalalmariwood);

    console.log('Total Wood for All item:', totalNeedWood);
}
const woodlist = woodCalculator(20,5,4,4);

