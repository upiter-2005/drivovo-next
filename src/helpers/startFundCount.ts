export const startFundCount = (carObject: any): number => {

    const result = (
      parseInt(carObject.car_price_ex_showroom.number.toFixed(0)) +
      parseFloat(carObject.pension_fund.formula.number.toFixed(0)) +
      parseFloat(carObject.insurance_1_year.formula.number) +
      parseFloat(carObject.registration.formula.number) +
      parseFloat(carObject.luxury_tax.number) +
      parseFloat(carObject.tinted_glass.formula.number) +
      parseFloat(carObject.tires.number) +
      parseFloat(carObject.carpets.number) +
      parseFloat(carObject.safety_net.formula.number) +
      parseFloat(carObject.radiator_protection.number) +
      parseFloat(carObject.armored_film.number)
    ).toFixed(2);
  


  return parseFloat(result);
};