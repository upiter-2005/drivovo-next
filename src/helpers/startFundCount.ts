export const startFundCount = (carObject: any): number => {
  const result = (
    parseInt(carObject.properties.car_price_ex_showroom.number) +
    parseFloat(carObject.properties.pension_fund.formula.number.toFixed(0)) +
    parseFloat(carObject.properties.insurance_1_year.formula.number) +
    parseFloat(carObject.properties.registration.formula.number) +
    parseFloat(carObject.properties.luxury_tax.number) +
    parseFloat(carObject.properties.tinted_glass.formula.number) +
    parseFloat(carObject.properties.tires.number) +
    parseFloat(carObject.properties.carpets.number) +
    parseFloat(carObject.properties.safety_net.formula.number) +
    parseFloat(carObject.properties.radiator_protection.number) +
    parseFloat(carObject.properties.armored_film.number)
  )

    .toFixed(2);

  return parseFloat(result);
};